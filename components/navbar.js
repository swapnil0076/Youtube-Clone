const navbar = ()=>{
    return `<div class="menu_logo">
    <div><img src="images\menu.png" alt=""></div>
    <div class="youtube_logo"><img src="images/youtube-logo.png" alt=""></div>
</div>
<div class="search_section">
    <input type="Search" id="query"  placeholder="Search ...">
    <button id="search_results"><img src="images/search.png" alt=""></button>
    <img class="mic_logo" src="images/mic.png" alt="">
</div>
<div class="last_section">
    <img src="images/bell.png" alt="">
    <img src="images/create.png" alt="">
    <img class="profile_pic" src="images/Norse_Kratos.png" alt=""> 
    <button class="button-26" role="button"><a href="Signup\signup.html">Sign Up</a> </button>
</div>
`
}

export {navbar}