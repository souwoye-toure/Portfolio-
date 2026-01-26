document.addEventListener("DOMContentLoaded", () => {

  console.log("JS OK");

 
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');

      if (!href.startsWith('#')) return;

      const id = href.substring(1);
      const section = document.getElementById(id);

      if (!section) return;

      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });

      nav.classList.remove("active");
    });
  });

});
