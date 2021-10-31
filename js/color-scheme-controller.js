// Copyright ©️ Lucas Becker 2021. All right reserved.

// initialization
let darkModeEnabled = false;
let themeRuleIndex = 0;
const styleSheet = document.styleSheets[0];
const styleSheetRules = styleSheet.cssRules;
const bannerImg = document.getElementById('header-img');
const osTheme = window.matchMedia("(prefers-color-scheme: dark)");
const sliderCssSelectorText = ".slider::before";
const sliderRule = getCssSliderRule();
const darkBannerImgPath = "../img/dark-theme/default.svg";
const lightBannerImgPath = "../img/light-theme/default.svg";
const darkThemeCssRule = ':root {--deep-color: #1e1e1e; --medium-color: #404040; --top-color: #707070; --text-color: #d4d4d4; --green-color: #6a9955; --dark-blue-color: #569cd6; --light-blue-color: #9cdcfe; --red-color: #ce9178; --teal-color: #b5cea8; --yellow-color: #d7ba7d; --purple-color: #c586c0;}';
const lightThemeCssRule = ':root {--deep-color: #ffffff; --medium-color: #d3d3d3; --top-color: #939393; --text-color: #000000; --green-color: #008000; --dark-blue-color: #0000ff; --light-blue-color: #0070c1; --red-color: #a31515; --teal-color: #098658; --yellow-color: #795e26; --purple-color: #af00db;}';

// site color scheme options
const themes = {
  dark: "dark",
  light: "light",
};

// main
setCssSliderInitialPosition(sliderRule);
initializeTheme();
// end main


// funcs
function initializeTheme() {
  if (osTheme.matches) { // DARK THEME
    darkModeEnabled = true;
    bannerImg.src = darkBannerImgPath;
    themeRuleIndex = styleSheet.insertRule(darkThemeCssRule);
    setCssSliderInitialPosition(sliderRule);
  } else { // LIGHT THEME
    darkModeEnabled = false;
    bannerImg.src = lightBannerImgPath;
    themeRuleIndex = styleSheet.insertRule(lightThemeCssRule);
    setCssSliderInitialPosition(sliderRule);
  }
}

function switchTheme() {
  if (darkModeEnabled) {
    setTheme(themes.light);
  } else {
    setTheme(themes.dark);
  }
}

function setTheme(theme) {
  let cssSliderRule = getCssSliderRule();
  switch (theme) {
    case themes.dark:
      darkModeEnabled = true; // must be first
      bannerImg.src = darkBannerImgPath;
      styleSheet.deleteRule(themeRuleIndex);
      themeRuleIndex = styleSheet.insertRule(darkThemeCssRule);
      setCssSliderInitialPosition(cssSliderRule);
      break;
    case themes.light:
      darkModeEnabled = false; // must be first
      bannerImg.src = lightBannerImgPath;
      styleSheet.deleteRule(themeRuleIndex);
      themeRuleIndex = styleSheet.insertRule(lightThemeCssRule);
      setCssSliderInitialPosition(cssSliderRule);
      break;
    default:
      console.log("setTheme() received:", theme, "which is not a valid theme");
  }
}

function getCssSliderRule() {
  for (let i = 0; i < styleSheetRules.length; ++i) {
    if (styleSheetRules[i].selectorText === sliderCssSelectorText) {
      console.log(styleSheetRules[i].selectorText);
      return styleSheetRules[i];
    }
  }
  console.log("CSS selector", sliderCssSelectorText, "was not found in the style sheet.");
  return -1;
}

function setCssSliderInitialPosition(cssSliderRule) {
  if (cssSliderRule < 0) return;
  // TODO: Implement setting CSS Dark Theme Slider initial position
  if (darkModeEnabled) {

  }
}

function setCssSliderPosition(cssSliderRule, theme) {
  // TODO: Implement dynamic setting of CSS Dark Theme Slider Position
}