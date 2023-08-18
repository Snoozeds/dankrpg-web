// This code is licensed under the MIT License.
// https://github.com/Snoozeds/dankrpg-web

// Dark mode icon
const themeIcon = document.getElementById("themeIcon");

// Toggle icon
const toggleIcon = (theme) => {
  if (theme === "dark") {
    themeIcon.textContent = "light_mode";
  } else {
    themeIcon.textContent = "dark_mode";
  }
};

// Manually set theme
const setTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleIcon("light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggleIcon("dark");
  }
};

// Set theme based on prefers
const setThemePrefers = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggleIcon("dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleIcon("light");
  }
};

// Check theme
const checkTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    toggleIcon("dark");
  } else {
    document.documentElement.classList.remove("dark");
    toggleIcon("light");
  }
};

// Event listener
themeIcon.addEventListener("click", () => setTheme());

// Check theme on load
checkTheme();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setThemePrefers());
