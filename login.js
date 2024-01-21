const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin.popup');
const iconClose = document.querySelector('.icon-close');
const btn = document.querySelector('.btn')

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "tejas.auti2003@gmail.com" && password === "Tejas@2003") {

        window.location.href = "page2.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}