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