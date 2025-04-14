let ham = document.querySelector('.ham'),
navMenu = document.querySelector('.nav-menu');

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})