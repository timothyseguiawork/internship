/* The following function will run every time the dark mode button is clicked. */

function toggleDarkMode() {
  // let body = document.querySelector("body") = document.body
  let body = document.body;
  body.classList.toggle("dark");
  buttonContent = document.getElementById("dark-mode-button")
  if (body.classList.contains("dark") == true ) {
    buttonContent.innerHTML = "☀️Light Mode";
  }
  else {
    buttonContent.innerHTML = "🌛 Dark Mode";
  }
}