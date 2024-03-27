// Copyright (c) Lucas Becker 2021-2024. All right reserved.
(function () {
  'use strict';
})();

// BURGER MENU FUNCTIONALITY
const burgerMenu = document.getElementById('burgerMenu');
const navbarMenu = document.getElementById('navbarMenu');
const menuButtons = document.getElementsByClassName('toggles-menu');
let active = burgerMenu.classList.contains('is-active');
const toggleMenu = () => {
  active = burgerMenu.classList.toggle('is-active');
  navbarMenu.classList.toggle('is-active');
  toggleButtons();
};
const toggleButtons = () => {
  if (active) {
    for (const button of [...menuButtons]) {
      button.addEventListener('click', toggleMenu);
    }
  } else {
    for (const button of [...menuButtons]) {
      button.removeEventListener('click', toggleMenu);
    }
  }
};

burgerMenu.addEventListener('click', toggleMenu);

// END OF BURGER MENU FUNCTIONALITY
