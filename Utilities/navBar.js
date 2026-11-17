/* ==========================================================================
   ELI PARK — TOP MENU (shared by every page)
   Builds the menu, highlights the page you're on, and opens/closes the
   full-screen menu on phones. No jQuery/Bootstrap JavaScript needed.
   ========================================================================== */

const NAV_LINKS = [
  { file: "main.html", label: "Inicio" },
  { file: "estacionamientos.html", label: "Estacionamientos" },
  { file: "empleo.html", label: "Empleo" },
  { file: "quienesSomos.html", label: "Quiénes Somos" },
  { file: "contacto.html", label: "Contacto" },
  { file: "avisoDePrivacidad.html", label: "Aviso de Privacidad" },
];

function loadNavBar() {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  const currentPage = window.location.pathname.split("/").pop() || "main.html";

  const linksHTML = NAV_LINKS.map((link) => {
    const isActive = link.file === currentPage;
    const activeClass = isActive ? " active" : "";
    const ariaCurrent = isActive ? ' aria-current="page"' : "";
    return `<a class="nav-item nav-link${activeClass}" href="../HTML/${link.file}"${ariaCurrent}>${link.label}</a>`;
  }).join("");

  container.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white" id="mainNavbar">
      <a class="navbar-brand customizedBrand" href="../HTML/main.html" aria-label="Eli Park - Inicio">
        <img src="../Assets/elipark_logo.png" alt="Eli Park" id="nav_imgLogo">
      </a>

      <button class="navbar-toggler custom-toggler" type="button"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Abrir menú">
        <span class="toggler-bars" aria-hidden="true"><span></span><span></span><span></span></span>
      </button>

      <div class="collapse navbar-collapse fullscreen_mobileOverlay" id="navbarNavAltMarkup">
        <div class="navbar-nav desktop_sideBar">${linksHTML}</div>
      </div>
    </nav>
  `;

  setupMobileMenu();
  setupScrollShadow();
}

function setupMobileMenu() {
  const toggler = document.querySelector(".custom-toggler");
  const menu = document.getElementById("navbarNavAltMarkup");
  if (!toggler || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("show", open);
    toggler.setAttribute("aria-expanded", String(open));
    toggler.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("nav-open", open);
  }

  toggler.addEventListener("click", () => {
    setOpen(toggler.getAttribute("aria-expanded") !== "true");
  });

  // Close with the Esc key, when a link is chosen, or when the screen gets wide
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setOpen(false))
  );
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) setOpen(false);
  });
}

// Soft shadow under the menu once the page is scrolled
function setupScrollShadow() {
  const nav = document.getElementById("mainNavbar");
  if (!nav) return;
  const update = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

document.addEventListener("DOMContentLoaded", loadNavBar);
