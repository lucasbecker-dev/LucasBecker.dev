// Copyright (c) Lucas Becker 2021. All right reserved.
(function () {
  "use strict";
}());

const returnButton = document.getElementById("returnButton");
function returnToMainPage() {
  window.location.pathname = ('/');
}
window.setTimeout(returnToMainPage, 5000);

