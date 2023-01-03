
import {navbar} from './components/navbar.js'

document.getElementById('navbar').innerHTML = navbar()


const API_key = 'AIzaSyDGRlq2GGkCiIN0jhgi5WT4efETrqoIFlY'


let searchvideos = async () => {
    try {
    
        const query =JSON.parse(localStorage.getItem("search-item")) || document.getElementById("query").value;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_key}`
        const res = await fetch(url);
        const data = await res.json();
        let actual_data = data.items;

        appendvideos(actual_data);
        console.log(actual_data)
    } catch (error) {
        console.log(error)
    }
}
searchvideos()

document.getElementById('search_results').addEventListener('click',()=>{
    searchtabs()
})

let searchtabs = async () => {
    try {
    
        const query =document.getElementById("query").value;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_key}`
        const res = await fetch(url);
        const data = await res.json();
        let actual_data = data.items;

        appendvideos(actual_data);
        console.log(actual_data)
    } catch (error) {
        console.log(error)
    }
}






document.querySelector('.youtube_logo').addEventListener('click',()=>{
    goback()
})



function goback(){
    console.log("yes ")
   let a= document.createElement("a")
    a.src="index.html"
    window.location.href="index.html";
}

document.getElementById("datebydate").addEventListener("click",date)
   async function date() {
    console.log("Yesa")
    try {
        const query = document.getElementById("query").value;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&order=date&q=${query}&key=${API_key}`
        const res = await fetch(url);
        const data = await res.json();
        let actual_data = data.items;

        appendvideos(actual_data);
        console.log(actual_data)
    } catch (error) {
        console.log(error)
    }
}

document.getElementById("viewcount").addEventListener("click",count)
   async function count() {
    
    try {
        const query = document.getElementById("query").value;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&order=viewCount&q=${query}&key=${API_key}`
        const res = await fetch(url);
        const data = await res.json();
        let actual_data = data.items;

        appendvideos(actual_data);
        console.log(actual_data)
    } catch (error) {
        console.log(error)
    }
}

document.getElementById("ratings").addEventListener("click",rating)
   async function rating() {
    
    try {
        const query = document.getElementById("query").value;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&order=rating&q=${query}&key=${API_key}`
        const res = await fetch(url);
        const data = await res.json();
        let actual_data = data.items;

        appendvideos(actual_data);
        console.log(actual_data)
    } catch (error) {
        console.log(error)
    }
}

document.getElementById("titlded").addEventListener("click",titles)
   async function titles() {
    
    try {
        const query = document.getElementById("query").value;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&order=title&q=${query}&key=${API_key}`
        const res = await fetch(url);
        const data = await res.json();
        let actual_data = data.items;

        appendvideos(actual_data);
        console.log(actual_data)
    } catch (error) {
        console.log(error)
    }
}








const appendvideos = (data) => {

    const display = document.getElementById("container");
    display.innerHTML = null;

    data.forEach(({ snippet, id}) => {

      
        let div = document.createElement("div");
        div.className="video"

        let data = {
           id,
            snippet
        }  
        console.log(data)

        div.onclick = () =>{
            storeclickedvideo(data)
        }
      
        let div2 = document.createElement("div");

        let image= document.createElement("img");
        image.src=snippet.thumbnails.high.url;
        image.style.cursor = "Pointer"
        image.id="cover"

        let div3 = document.createElement("div");
        div3.id="title"

        let titled=document.createElement("h3");
        titled.innerHTML=snippet.title;

        let div4 = document.createElement("div");

        let div5 = document.createElement("div");
        div5.id="boxes"
        let image2= document.createElement("img");
        let channel_name= document.createElement("p");
        channel_name.innerHTML=snippet.channelTitle;
        image2.src=snippet.thumbnails.high.url;
        image2.id="thumbnail"
        
         
        div5.append(image2,channel_name)
        div4.append(div5)
        div3.append(titled,div4)
      div2.append(image)

      div.append(div2,div3)

      document.getElementById("container").append(div)
    })


 
   
    
    

}

function storeclickedvideo(data) {
    localStorage.setItem('clicked_item', JSON.stringify(data))
    window.location.href = 'video.html';
}

