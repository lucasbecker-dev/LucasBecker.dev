// Copyright (c) Lucas Becker 2021. All right reserved.
(function () {
  "use strict";
}());

// BURGER MENU FUNCTIONALITY
const burgerMenu = document.getElementById("burgerMenu");
const navbarMenu = document.getElementById("navbarMenu");
const menuButtons = document.getElementsByClassName("toggles-menu");
const active = burgerMenu.classList.contains("is-active");
function toggleActive() {
  burgerMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
};

burgerMenu.addEventListener("click", () => {
  if (burgerMenu.classList.contains("is-active")) {
    for (let button of menuButtons) {
      button.addEventListener("click", toggleActive());
    }
  } else {
    for (let button of menuButtons) {
      button.removeEventListener("click", toggleActive());
    }
  }
  this.toggleActive();
});

// END OF BURGER MENU FUNCTIONALITY
