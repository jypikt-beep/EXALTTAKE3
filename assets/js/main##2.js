const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.getAttribute("data-open") === "true";
    navLinks.setAttribute("data-open", String(!isOpen));
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.setAttribute("data-open", "false");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
