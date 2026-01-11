document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("skin-toggle");
  if (!toggle) return;

  const html = document.documentElement;
  const current = html.getAttribute("data-theme") || "default";

  toggle.textContent = current === "dark" ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    const newSkin = current === "dark" ? "default" : "dark";

    html.setAttribute("data-theme", newSkin);
    localStorage.setItem("mm-skin", newSkin);

    toggle.textContent = newSkin === "dark" ? "☀️" : "🌙";

    // Update state
    current = newSkin;
  });
});
