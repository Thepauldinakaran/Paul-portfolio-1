const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-whitw",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.add(
      "bg-whitw",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
});

/*------------------------Dark and light mode-------------------*/

if (
  localStorage.theme === "dark" ||
  (!(theme in localStorage) &&
    window.matchMedia("(perfers-color-scheme:dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

//-----------------------------------Restricted fuction----------------//
// Prevent right-click
document.addEventListener("contextmenu", (e) => {
  // alert("Right-click is disabled.");
  e.preventDefault();
});

// Prevent specific keyboard shortcuts
document.onkeydown = (e) => {
  if ((e.ctrlKey && e.key === "u") || e.key === "F12") {
    //alert("Opening developer tools is disabled.");
    e.preventDefault();
  }
};
