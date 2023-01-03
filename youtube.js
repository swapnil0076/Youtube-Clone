import { navbar } from "./components/navbar.js";

// console.log(navbar)

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML=(navbar())

const API_key = 'AIzaSyDGRlq2GGkCiIN0jhgi5WT4efETrqoIFlY'



let popularvideos = async () => {
    try {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=52&chart=mostPopular&key=${API_key}`
        const res = await fetch(url);
        const data = await res.json();
        let actual_data = data.items;

        appendvideos(actual_data);
        console.log(actual_data)
    } catch (error) {
        console.log(error)
    }
}

popularvideos()






const appendvideos = (data) => {

    const display = document.getElementById("container");
    display.innerHTML = null;

    data.forEach(({ snippet, id }) => {


        let div = document.createElement("div");
        div.id = "video"

        let data = {
            id,
            snippet
        }
        console.log(data)

        div.onclick = () => {
            storeclickedvideo(data)
        }

        let div2 = document.createElement("div");
        div2.id = "content";

        let div3 = document.createElement("div");
        div3.id = "info";

        let thumb = document.createElement("img")
        thumb.id = "thumbnail"
        thumb.src = snippet.thumbnails.default.url


        let image = document.createElement("img");
        image.src = snippet.thumbnails.high.url;
        image.style.cursor = "Pointer"


        const title = document.createElement("h5");
        title.innerHTML = snippet.title;
        title.id = "id"

        let channel_name = document.createElement("p");
        channel_name.innerHTML = snippet.channelTitle;

        div3.append(title, channel_name)

        div2.append(thumb, div3)

        div.append(image, div2);

        document.getElementById("container").append(div);

    })







}

document.getElementById('search_results').addEventListener('click',clickedvideo)

function clickedvideo() {
    let search=document.getElementById("query").value;
    localStorage.setItem('search-item', JSON.stringify(search))
    window.location.href = 'search.html';
}

function storeclickedvideo(data) {
    localStorage.setItem('popular_item', JSON.stringify(data))
    window.location.href = 'video.html';
}





