// HAMBURGER MENU
let hamburgerMenuShow = false;
const menuButton = document.querySelector(".hamburger__menu");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".fa-xmark")
menuButton.addEventListener("click",function(){
    if(hamburgerMenuShow == false){
        menu.style.width = "27%"
        hamburgerMenuShow = true;
        menuSearch.style.width = "0%"
        searchShow = false;
    }
    else{
        menu.style.width = "0%"
        hamburgerMenuShow = false;
    }
});
closeButton.addEventListener("click",function(){
    hamburgerMenuShow = false;
    menu.style.width = "0%"
})

// END



// SEARCH MENU
let searchShow = false;
const searchButton = document.querySelector(".search__glass");
const menuSearch = document.querySelector(".menu__search");
const closeButton2 = document.querySelector(".mark-x")
searchButton.addEventListener("click",function(){
    if(searchShow ==false){
        menuSearch.style.width = "27%"
        searchShow = true;
        menu.style.width = "0%"
        hamburgerMenuShow = false;
    }else{
    menuSearch.style.width = "0%"
    searchShow = false;
    }
});
closeButton2.addEventListener("click",function(){
    searchShow = false
    menuSearch.style.width = "0%"
})

// END



// RESPONSIVE MENU
let menuShow = false;
const menuResponsive = document.querySelector(".responsive__menu");
const dropdownMenu = document.querySelector(".dropdown__menu");
const search = document.querySelector(".search__glass2");
const infoResponsive = document.querySelector(".info__icon");
menuResponsive.addEventListener("click",function(){
    if(menuShow == false){
        dropdownMenu.style.display = "flex"
        menuShow = true;
    }else{
        dropdownMenu.style.display = "none"
        menuShow = false;
    }
});
search.addEventListener("click",function(){
    menuSearch.style.width = "100%"
})
infoResponsive.addEventListener("click",function(){
    menu.style.width = "100%"
})
// END


// SHADOW SCROLL
const SHADOW = document.querySelector(".all__shadow")
const SHADOW2 = document.querySelector(".all__shadow2")

document.addEventListener("scroll",function (e) {
    if(SHADOW.offsetTop - 520 < window.scrollY){
        SHADOW.classList.add("shadows--open");
    }else{
        SHADOW.classList.remove("shadows--open");
    }
})

document.addEventListener("scroll",function (e) {
    if(SHADOW2.offsetTop - 520 < window.scrollY){
        SHADOW2.classList.add("shadows--open");
    }else{
        SHADOW2.classList.remove("shadows--open");
    }
})
// END



// const TABLE = document.querySelector(".table")

// document.addEventListener("scroll",function (e) {
//     if(TABLE.offsetTop - 100 < window.scrollY){
//         TABLE.classList.add("shadows--open");
//     }else{
//         TABLE.classList.remove("shadows--open");
//     }
// })