const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      navMenu.classList.remove("open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("open");
    }
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}