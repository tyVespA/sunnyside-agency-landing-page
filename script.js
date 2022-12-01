// HAMBURGER MENU POPUP

const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const arrow = document.querySelector(".arrow")

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("lower-opacity")
   mobileMenu.classList.toggle("slide-left")
   arrow.classList.toggle("fade-away")
})