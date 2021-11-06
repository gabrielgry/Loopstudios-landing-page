const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const menuLinks = document.getElementById("menu-links");
const menuBtn = document.getElementById("menu-btn");
const iconHamburger = document.getElementById("icon-hamburger");
const iconClose = document.getElementById("icon-close");
const body = document.getElementById("body");

menuBtn.addEventListener("click", () => {
  iconHamburger.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
  body.classList.toggle("menu--show");
  menuLinks.classList.toggle("menu--show");
  navbar.classList.toggle("menu--show");
  header.classList.toggle("menu--show");
});
