const underlinedBtns = document.querySelectorAll(".underlined-btn")
const underlines = document.querySelectorAll(".underline")

underlinedBtns.forEach((underlinedBtn) => {
   underlinedBtn.addEventListener("mouseover", () => {
         underlines.forEach((underline) => {
            underline.classList.add("underline-mouseover")
      })
   })
})

// underlinedBtns.forEach((underlinedBtn) => {
//    underlinedBtn.addEventListener("mouseout", () => {
//       underlines.classList.remove("underline-mouseover")
//    })
// })