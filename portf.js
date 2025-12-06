
// ------------------------------
// 1. MENU RESPONSIVE (mobile)
// ------------------------------
const menuBtn = document.getElementById("menu-toggle");
const nav = document.querySelector(".main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expanded);
});
