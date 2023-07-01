document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.getElementById("toggler");
  const navMenu = document.getElementById("nav-menu");
  const features = document.getElementById("features");
  const company = document.querySelector(".company");
  const dropdown1 = document.querySelector(".dropdown1");
  const dropdown2 = document.querySelector(".dropdown2");
  const arrowf = document.querySelector(".arrowf");
  const arrowc = document.querySelector(".arrowc");
  const arrowUp = "./images/icon-arrow-up.svg";
  const arrowDown = "./images/icon-arrow-down.svg";
  const togglerImage = toggler.querySelector("img")
  const toggleOpen = "./images/icon-menu.svg"
  const toggleClose = "./images/icon-close-menu.svg"
  let isDropdown1Active = false;
  let isDropdown2Active = false;

  toggler.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggler.classList.toggle("active");
    if (toggler.classList.contains("active")) {
          togglerImage.src = toggleClose
        } else {
          togglerImage.src = toggleOpen
        }
  });

  features.addEventListener("click", () => {
    if (isDropdown1Active) {
      dropdown1.classList.remove("active");
      arrowf.innerHTML = '<img src="./images/icon-arrow-down.svg" alt="">';
      isDropdown1Active = false;
    } else {
      dropdown1.classList.add("active");
      arrowf.innerHTML = '<img src="./images/icon-arrow-up.svg" alt="">';
      isDropdown1Active = true;
    }
  });

  company.addEventListener("click", () => {
    if (isDropdown2Active) {
      dropdown2.classList.remove("active");
      arrowc.innerHTML = '<img src="./images/icon-arrow-down.svg" alt="">';
      isDropdown2Active = false;
    } else {
      dropdown2.classList.add("active");
      arrowc.innerHTML = '<img src="./images/icon-arrow-up.svg" alt="">';
      isDropdown2Active = true;
    }
  });

    document.addEventListener("click", (event) => {
    const target = event.target
    if (!target.closest(".features") && !target.closest(".dropdown1")) {
      dropdown1.classList.remove("active")
      isDropdown1Active = false
    }
    if (!target.closest(".company") && !target.closest(".dropdown2")) {
      dropdown2.classList.remove("active")
      isDropdown2Active = false
    }
  })

  document.addEventListener("click", (event) => {
  const target = event.target
  if (!target.closest(".features") && !target.closest(".dropdown1")) {
    dropdown1.classList.remove("active")
    isDropdown1Active = false
  }
  if (!target.closest(".company") && !target.closest(".dropdown2")) {
    dropdown2.classList.remove("active")
    isDropdown2Active = false
  }
  if (
    !target.closest("#toggler") &&
    !target.closest(".nav-menu") &&
    !target.closest(".navbar")
  ) {
    navMenu.classList.remove("active")
    toggler.classList.remove("active")
    togglerImage.src = toggleOpen
  }
})
});
