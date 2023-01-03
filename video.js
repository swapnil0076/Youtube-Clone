
import {navbar} from './components/navbar.js'

document.getElementById('navbar').innerHTML = navbar();


const API_key = 'AIzaSyDGRlq2GGkCiIN0jhgi5WT4efETrqoIFlY'


const recommendedvideos = async () => {




    try{
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=10&chart=mostPopular&key=${API_key}`)
        const data=await res.json();
        let actual_data=data.items;
        console.log(actual_data)
        
        appendvideos(actual_data)

    }catch (error){
        console.log(error)
    }
}

recommendedvideos()

const appendvideos =(data) =>{

    const display = document.querySelector(".recommendation");
    display.innerHTML = null;

data.forEach(({ snippet, id }) => {

    // console.log(snippet)

    let div=document.createElement("div");
    div.className=('main_image');

    let data = {
                
       id,
        snippet,
    }


    div.onclick = () => {

        storeclickedvideo(data);
        // console.log(snippet.title)

    }




    let div2=document.createElement("div");


    let thumbnail_image=document.createElement("img");
    thumbnail_image.src=snippet.thumbnails.high.url;


    let channel_name = document.createElement("p");
    channel_name.innerHTML = snippet.channelTitle;

    const title = document.createElement("h5");
        title.innerHTML = snippet.title;
        title.id = "id"

div.append(thumbnail_image);

div2.append(title,channel_name)

document.querySelector('.recommendation').append(div,div2)

})
}

function storeclickedvideo(data){

    localStorage.setItem('clicked_item',JSON.stringify(data))
    // console.log(clicked_item)

    window.location.href='video.html'
}

const video_details = document.getElementById('video_details')

const playVideo = () => {
    const {id} = JSON.parse(localStorage.getItem('popular_item'))

    console.log(id.videoId)


    let iframe = document.createElement('iframe');
    iframe.src =`https://www.youtube.com/embed/${id}?autoplay=1`
    iframe.width='100%';
    iframe.height='100%';
     iframe.setAttribute('allowfullscreen', true)
    video_details.append(iframe)

   
  
}

 playVideo()

document.querySelector('.youtube_logo').addEventListener('click',()=>{
    goback()
})

function goback(){
    console.log("yes ")
   let a= document.createElement("a")
    a.src="index.html"
    window.location.href="index.html";
}



const searchplayVideo = () => {
    const {id} = JSON.parse(localStorage.getItem('clicked_item'))

    console.log(id)


    let iframe = document.createElement('iframe');
    iframe.src =`https://www.youtube.com/embed/${id.videoId}?autoplay=1`
    iframe.width='100%';
    iframe.height='100%';
     iframe.setAttribute('allowfullscreen', true)
    video_details.append(iframe)
   
}

searchplayVideo()
