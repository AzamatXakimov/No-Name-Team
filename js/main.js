$(document).ready(function () {
  $(".slider").slick({
    // bu togmalr uchun
    dots: true,

    // default holatda nechta slider turishi
    slidesToShow: 1,

    // bir next button ni bosganda nechta slider yurishi
    slidesToScroll: 1,

    // tezligi
    speed: 500,

    // slider lar qay tarizda harakat qilishi
    easing: "ease",

    // slider cheksiz ligi
    infinite: true,

    // slider qaysi slidan boshlashi kerak ligini belgilash
    initialSlide: 0,

    // sliderlar default ozgarib turish
    autoplay: true,

    //sliderlar default ozgarib turish vaqini belgilash
    autoplaySpeed: 2000,

    //silder hududiga bosganda tohtashi
    // pouseOnFocus: true
    //pouseOnHover: true
    // pouseOnDotsHover: true

    // mishka bilan click qilib sliderni surish ammo responsiv holatda yani tel va planshet larda ishlay
    // draggable: false,

    // responsive holatda scrol halt bilan otkazishni olib tashlash
    // swipe: false
  });
});

let count=1
if (window.screen.width==830) {
     count=2
}

$(document).ready(function () {
    $(".from-google__slider").slick({
      // bu togmalr uchun
      dots: true,
  
      // default holatda nechta slider turishi
      
    // default holatda nechta slider turishi
    slidesToShow: count,

    // bir next button ni bosganda nechta slider yurishi
    slidesToScroll: count,

    // tezligi
    speed: 500,

    // slider lar qay tarizda harakat qilishi
    easing: "ease",

    // slider cheksiz ligi
    infinite: true,

    // slider qaysi slidan boshlashi kerak ligini belgilash
    initialSlide: 0,

    // sliderlar default ozgarib turish
    autoplay: false,
  
      //sliderlar default ozgarib turish vaqini belgilash
      // autoplaySpeed: 500,
  
      //silder hududiga bosganda tohtashi
      // pouseOnFocus: true
      //pouseOnHover: true
      // pouseOnDotsHover: true
  
      // mishka bilan click qilib sliderni surish ammo responsiv holatda yani tel va planshet larda ishlay
      // draggable: false,
  
      // responsive holatda scrol halt bilan otkazishni olib tashlash
      // swipe: false
    });
  });
  

const elChooseItem = document.querySelectorAll(".choose-list__item")
const elChooseLink = document.querySelectorAll(".choose-list__link")
const elChooseWrapper = document.querySelectorAll(".choose-wrap__wrapper")

elChooseLink.forEach(function (links) {
  links.addEventListener("click", function (evt) {
    evt.preventDefault()

    elChooseLink.forEach(function (item) {
      item.classList.remove("choose-list__link--active")
      // item.classList.remove("choose-list__link--active")
    })

    links.classList.add("choose-list__link--active")

    elChooseWrapper.forEach(function (bookmark) {
      bookmark.classList.remove("choose-wrap__wrapper--active")
    })
    document
      .querySelector(links.getAttribute("href"))
      .classList.add("choose-wrap__wrapper--active")
  })
})

// NAVBAR 
const navBarOpenBtn = document.querySelector(".js-navbar-open-btn");
const navBarCloseBtn = document.querySelector(".js-navbar-close-btn");

// THEME 
const themeBtn = document.querySelector(".js-theme-btn");
const theme = localStorage.getItem("theme");

// LOGIN MODAL
const elModalOpenBtn = document.querySelector(".js-login-btn");
const elModalCloseBtn = document.querySelector(".js-login-modal-close");
const elModalPasswordIput =document.querySelector(".js-password-input");
const elModalPasswordShowBtn = document.querySelector(".js-show-password-btn")

    
if(theme == "dark"){
    document.body.classList.add("dark-mode")
}
else if(theme == "light"){
    document.body.classList.remove("dark-mode")
}

navBarOpenBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-bar-show");
})
navBarCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("nav-bar-show");
})

themeBtn.addEventListener("click", () => {
    if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light")
    }
    else if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "dark")
    }

    document.body.classList.toggle("dark-mode");
});

elModalOpenBtn.addEventListener("click", () => {
    document.body.classList.add("show-login");
})
elModalCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("show-login");
})

elModalPasswordShowBtn.addEventListener("click", ()=> {
    if(elModalPasswordIput.type == "password"){
        elModalPasswordIput.type = "text";
        elModalPasswordShowBtn.classList.add("login-modal__showpassword--open")
    }
    else if(elModalPasswordIput.type == "text"){
        elModalPasswordIput.type = "password";
        elModalPasswordShowBtn.classList.remove("login-modal__showpassword--open")
    }
})

