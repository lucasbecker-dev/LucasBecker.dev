// Copyright (c) Lucas Becker 2021. All right reserved.
(function () {
  "use strict";
}());

// BURGER MENU FUNCTIONALITY
const burgerMenu = document.getElementById("burgerMenu");
const navbarMenu = document.getElementById("navbarMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
});
// END OF BURGER MENU FUNCTIONALITY