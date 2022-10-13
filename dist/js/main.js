const menuBtn = document.querySelector(".menu-btn");
const hamBurger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav-item");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamBurger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    main.classList.add("display-none");
    footer.classList.add("display-none");

    navItems.forEach((item) => {
      item.classList.add("open");
    });
    showMenu = true;
  } else {
    hamBurger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    main.classList.remove("display-none");
    footer.classList.remove("display-none");
    navItems.forEach((item) => {
      item.classList.remove("open");
    });
    showMenu = false;
  }
}
