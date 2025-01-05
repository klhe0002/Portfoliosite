const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// Hent alle links i navigationen
const navLinks = document.querySelectorAll("nav a");

// Få den aktuelle sidesti
const currentPage = window.location.pathname;

// Marker det aktive link
navLinks.forEach((link) => {
  if (link.href.includes(currentPage)) {
    link.classList.add("active");
  }
});
