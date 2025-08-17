// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const toggleBtn = document.createElement("button");

  toggleBtn.innerHTML = "☰"; // Hamburger icon
  toggleBtn.classList.add("nav-toggle");

  // Insert toggle button before nav
  nav.parentNode.insertBefore(toggleBtn, nav);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});