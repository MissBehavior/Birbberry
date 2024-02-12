function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}
function calculateSettingAsFontsizeString({ localStorageFontsize }) {
  if (localStorageFontsize !== null) {
    return localStorageFontsize;
  } else {
    return "medium";
  }
}
function calculateSettingAsColorString({ localStorageColor }) {
  if (localStorageColor !== null) {
    return localStorageColor;
  } else {
    return "#04aa6df1";
  }
}
function updateThemeOnHtmlEl({ theme, fontSize }) {
  document.querySelector("html").setAttribute("data-theme", theme);
  document.querySelector("html").setAttribute("data-size", fontSize);
}
const themeToggleButton = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const localStorageFontsize = localStorage.getItem("fontsize");
const localStorageColor = localStorage.getItem("color");
const systemSettingDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
);
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});
let currentFontsizeSetting = calculateSettingAsFontsizeString({
  localStorageFontsize,
});
let currentColorSetting = calculateSettingAsColorString({
  localStorageColor,
});

updateThemeOnHtmlEl({ theme: currentThemeSetting, fontSize: currentFontsizeSetting, color: currentColorSetting });


document.addEventListener('DOMContentLoaded', function () {
  const storedColor = localStorage.getItem('color');
  if (storedColor) {
    document.documentElement.style.setProperty('--header-color', storedColor);
  }
  const storedValue = localStorage.getItem('fontsize');
  if (storedValue) {
    document.querySelector("html").setAttribute("data-size", storedValue);
  }

});


function hamburgerMenuClick() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}






// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("tester");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



console.log(currentThemeSetting);


function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "🌙" : "🌞";
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}
updateButton({
  buttonEl: themeToggleButton,
  isDark: currentThemeSetting === "dark",
});
themeToggleButton.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: themeToggleButton, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme, fontSize: currentFontsizeSetting, color: currentColorSetting });
  currentThemeSetting = newTheme;
});

const selectColorElement = document.getElementById("header-color");
selectColorElement.addEventListener('change', function () {
  console.log(selectColorElement.value);
  document.documentElement.style.setProperty('--header-color', selectColorElement.value);
  localStorage.setItem('color', selectColorElement.value);

});

const selectElement = document.getElementById("header-size");
selectElement.addEventListener('change', function () {
  localStorage.setItem('fontsize', selectElement.value);
  document.querySelector("html").setAttribute("data-size", selectElement.value);
});

document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById("header-size");
  const selectColorElement = document.getElementById("header-color");
  const storedColor = localStorage.getItem('color');
  if (storedColor) {
    selectColorElement.value = storedColor;
    document.documentElement.style.setProperty('--header-color', storedColor);

  }
  const storedValue = localStorage.getItem('fontsize');
  if (storedValue) {
    selectElement.value = storedValue;
  }

});
