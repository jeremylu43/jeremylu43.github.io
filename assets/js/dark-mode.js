const toggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Load saved preference
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    toggle.textContent = "🌙";
  }
});
