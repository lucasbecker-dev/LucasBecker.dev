// Copyright (c) Lucas Becker 2021. All right reserved.
(function () {
  "use strict";
}());

const returnButton = document.getElementById("returnButton");
returnButton.addEventListener("click", returnToMainPage);
const returnToMainPage = () => {
  clearTimeout(timeout);
  window.location.pathname = ('/');
}
let time = 10000;
let timeout = setTimeout(returnToMainPage, time);

