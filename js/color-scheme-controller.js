// Copyright ©️ Lucas Becker 2021. All right reserved.

const osTheme = window.matchMedia("(prefers-color-scheme: dark)");
const headerImg = document.getElementById("header-img");
const styleSheet = window.document.styleSheets[0];

osTheme.addEventListener("change", e => {
  if (e.matches) {
    // DARK THEME
    headerImg.src = "https://github.com/lucasbecker451/LucasBecker.dev/blob/main/img/dark-theme/default.svg";
    styleSheet.insertRule(':root {--deep-color: #1e1e1e; --medium-color: #404040; --top-color: #707070; --text-color: #d4d4d4; --green-color: #6a9955; --dark-blue-color: #569cd6; --light-blue-color: #9cdcfe; --red-color: #ce9178; --teal-color: #b5cea8; --yellow-color: #d7ba7d;--purple-color: #c586c0;}', styleSheet.cssRules.length);
  } else {
    // LIGHT THEME
    headerImg.src = "https://github.com/lucasbecker451/LucasBecker.dev/blob/main/img/light-theme/default.svg";
    styleSheet.insertRule(':root {--deep-color: #ffffff; --medium-color: #d3d3d3; --top-color: #939393; --text-color: #000000; --dark-blue-color: #0000ff; --light-blue-color: #0070c1; --red-color: #a31515; --teal-color: #098658; --yellow-color: #795e26; --purple-color: #af00db;}', styleSheet.cssRules.length);
  }
});