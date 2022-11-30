const underlinedBtns = document.querySelectorAll(".underlined-btn")
const underlines = document.querySelectorAll(".underline")

underlinedBtns.forEach((underlinedBtn) => {
   underlinedBtn.addEventListener("mouseover", () => {
      underlines.classList.add("underline-mouseover")
   })
})

// underlinedBtns.forEach((underlinedBtn) => {
//    underlinedBtn.addEventListener("mouseout", () => {
//       underlines.classList.remove("underline-mouseover")
//    })
// })