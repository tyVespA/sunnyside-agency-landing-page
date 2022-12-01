// const underlinedBtns = document.querySelectorAll(".underlined-btn")
// const underlines = document.querySelectorAll(".underline")

// underlinedBtns.forEach((underlinedBtn) => {
//    underlinedBtn.addEventListener("mouseover", () => {
//       underlines.classList.add("underline-mouseover")
//    })
// })

// underlinedBtns.forEach((underlinedBtn) => {
//    underlinedBtn.addEventListener("mouseout", () => {
//       underlines.classList.remove("underline-mouseover")
//    })
// })

// HAMBURGER MENU POPUP

const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const arrow = document.querySelector(".arrow")

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("lower-opacity")
   // mobileMenu.classList.toggle("hidden")
   mobileMenu.classList.toggle("slide-left")
   arrow.classList.toggle("fade-away")
})