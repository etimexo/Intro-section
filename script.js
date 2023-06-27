// const toggle = document.querySelector("#toggler")
// const navMenu = document.querySelector(".nav-menu")
// const togglerImage = toggle.querySelector("img")
// const toggleOpen = "./images/icon-menu.svg"
// const toggleClose = "./images/icon-close-menu.svg"
// const features = document.querySelector("#nav-item1")
// const dropdown1 = document.querySelector(".dropdown1")
// const company = document.querySelector("#nav-item2")
// const dropdown2 = document.querySelector(".dropdown2")
// let isDropdown1Hovered = false
// let isDropdown2Hovered = false
// features.addEventListener("mouseenter", function () {
//     dropdown1.classList.add("active")
//   })
  
//   features.addEventListener("mouseleave", function () {
//         dropdown1.classList.remove("active")
//   })
//   features.addEventListener("mouseleave", function () {
//     setTimeout(() => {
//       if (!isDropdown1Hovered) {
//         dropdown1.classList.remove("active")
//       }
//     }, 200)
//   })
  
//   dropdown1.addEventListener("mouseenter", function () {
//     isDropdown1Hovered = true
//   })
//   dropdown1.addEventListener("mouseleave", function () {
//     isDropdown1Hovered = false
//   })
//   company.addEventListener("mouseenter", function () {
//     dropdown2.classList.add("active")
//   })
  
//   company.addEventListener("mouseleave", function () {
//     dropdown2.classList.remove("active")
//   })
// toggle.addEventListener("click", () => {
//     toggle.classList.toggle("active")
//     navMenu.classList.toggle("active")
//     if ( toggle.classList.contains("active")) {
//         togglerImage.src = toggleClose
//     } else {
//         togglerImage.src = toggleOpen
//     }
// })

const toggle = document.querySelector("#toggler")
const navMenu = document.querySelector(".nav-menu")
const togglerImage = toggle.querySelector("img")
const toggleOpen = "./images/icon-menu.svg"
const toggleClose = "./images/icon-close-menu.svg"
const features = document.querySelector(".features")
const dropdown1 = document.querySelector(".dropdown1")
const company = document.querySelector(".company")
const dropdown2 = document.querySelector(".dropdown2")
let isDropdown1Hovered = false
let isDropdown2Hovered = false

features.addEventListener("mouseenter", function () {
  dropdown1.classList.add("active")
})

features.addEventListener("mouseleave", function () {
  setTimeout(() => {
    if (!isDropdown1Hovered) {
      dropdown1.classList.remove("active")
    }
  }, 100)
})

dropdown1.addEventListener("mouseenter", function () {
  isDropdown1Hovered = true
})

dropdown1.addEventListener("mouseleave", function () {
  isDropdown1Hovered = false
})

company.addEventListener("mouseenter", function () {
  dropdown2.classList.add("active")
})

company.addEventListener("mouseleave", function () {
  dropdown2.classList.remove("active")
})

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active")
  navMenu.classList.toggle("active")
  if (toggle.classList.contains("active")) {
    togglerImage.src = toggleClose
  } else {
    togglerImage.src = toggleOpen
  }
})
