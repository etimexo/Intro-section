const toggle = document.querySelector(".toggler")
const navMenu = document.querySelector(".nav-menu")
const togglerImage = toggle.querySelector("img")
const toggleOpen = "./images/icon-menu.svg"
const toggleClose = "./images/icon-close-menu.svg"
const features = document.querySelector(".features")
const dropDown1 = document.querySelector(".dropdown1")
features.addEventListener("click", function feat() {
    features.classList.toggle("dropdown1")
})
toggle.addEventListener ("click", () => {
    toggle.classList.toggle("active")
    navMenu.classList.toggle("active")
    if (toggle.classList.contains("acitve")) {
        togglerImage.src = toggleClose  
    } else {
        togglerImage.src = toggleOpen
    }
})
document.addEventListener("click", (event) => {
    const target = event.target
    const isNavMenuClicked = target.classList.contains("nav-menu") || target.closest(".nav-menu")
    const isToggleClicked = target.classList.contains("toggler") || target.closest(".toggler")
    if (!isNavMenuClicked && !isToggleClicked) {
      toggle.classList.remove("active")
      navMenu.classList.remove("active")
      togglerImage.src = toggleOpen
    }
})
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    toggle.classList.remove("active")
    navMenu.classList.remove("active")
    togglerImage.src = toggleOpen

}))