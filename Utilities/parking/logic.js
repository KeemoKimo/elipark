/* ==========================================================================
   ELI PARK — ESTACIONAMIENTOS (parking locations page)
   1. The list of cities (the cards written in estacionamientos.html)
   2. A page for each city, built from parkingData.js when a city is chosen

   The address bar shows the chosen city (e.g. estacionamientos.html#cancun),
   so the browser's Back button, reloading, and sharing a link all work.
   Styles for the city page live in Styling/estacionamientos.css
   ========================================================================== */

const cityIdMapping = {
  pdc: "playa-del-carmen",
  cuervnavaca: "cuernavaca",
  puertovallarta: "puerto-vallarta",
  tuxtlagutierrez: "tuxtla-gutierrez",
  ciudaddelcarmen: "ciudad-del-carmen",
  mexico: "mexico",
  cancun: "cancun",
  guadalajara: "guadalajara",
  tepic: "tepic",
  acapulco: "acapulco",
  toluca: "toluca",
  pachuca: "pachuca",
  monterrey: "monterrey",
  coatzacoalcos: "coatzacoalcos",
  culiacan: "culiacan",
  tlaquepaque: "tlaquepaque",
  colima: "colima",
};

function getParkingDataKey(htmlId) {
  const baseId = htmlId.replace("card-", "");
  return cityIdMapping[baseId] || baseId;
}

// Small line icons used on the city page
const ICONS = {
  pin: '<svg class="ep-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  parking: '<svg class="ep-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M10 17V7h3.5a3 3 0 0 1 0 6H10"/></svg>',
  clock: '<svg class="ep-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  phone: '<svg class="ep-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  search: '<svg class="ep-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
};

const PAGE_TITLE = document.title;
const SEARCH_MIN_LOCATIONS = 4; // only show the search box for cities with this many locations or more

const cities = {}; // city key -> { card, name, image }
let currentCity = null;
let savedScrollY = 0;
let lastOpenedCard = null;

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  if (typeof parkingData === "undefined") {
    console.error("Error: parkingData.js no se cargó.");
    return;
  }

  // We bring visitors back to the right spot ourselves
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  document
    .querySelectorAll("#cardContainers_location .card")
    .forEach((card) => {
      const key = getParkingDataKey(card.id);
      if (!parkingData[key]) return;

      const title = card.querySelector("h3");
      const img = card.querySelector("img");
      const name = title ? title.textContent.trim() : parkingData[key].cityName;
      cities[key] = { card, name, image: img ? img.getAttribute("src") : "" };

      // Cards work with the keyboard too (Tab to a city, then Enter)
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Ver ubicaciones en ${name}`);

      const open = () => {
        lastOpenedCard = card;
        savedScrollY = window.scrollY;
        goToCity(key, true);
      };

      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });

  createCityView();

  // Browser Back / Forward, or a city typed into the address bar
  window.addEventListener("popstate", renderFromUrl);
  window.addEventListener("hashchange", renderFromUrl);

  // Esc goes back to the list of cities
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !currentCity) return;
    if (e.target.matches("input, textarea")) return;
    goBackToCities();
  });

  // Opened with a city already in the address (e.g. a shared link)
  if (getCityFromUrl()) {
    history.replaceState({ depth: 0 }, "");
    renderFromUrl();
  }
}

/* ---------- Moving between the list and a city ---------- */

function getCityFromUrl() {
  const key = decodeURIComponent(window.location.hash.slice(1));
  return parkingData[key] ? key : null;
}

function renderFromUrl() {
  const key = getCityFromUrl();
  if (key) {
    if (key !== currentCity) showCityDetails(key);
  } else if (currentCity) {
    closeCityDetails();
  }
}

// "depth" counts how many cities were opened since the list, so the
// "Todas las ciudades" button can always return straight to the list.
// It stays 0 when the page was opened directly on a city (shared link),
// because then there is no list behind us to go back to.
function goToCity(key, fromList) {
  const currentDepth = (history.state && history.state.depth) || 0;
  const depth = fromList ? 1 : currentDepth > 0 ? currentDepth + 1 : 0;
  history.pushState({ depth }, "", "#" + encodeURIComponent(key));
  showCityDetails(key);
}

// Used by the "Todas las ciudades" button, the breadcrumb and the Esc key
window.goBackToCities = function () {
  const depth = (history.state && history.state.depth) || 0;
  if (depth > 0) {
    history.go(-depth); // the "popstate" listener then shows the list
  } else {
    history.pushState(
      { depth: 0 },
      "",
      window.location.pathname + window.location.search
    );
    closeCityDetails();
  }
};

/* ---------- Building the city page ---------- */

function createCityView() {
  const view = document.createElement("section");
  view.id = "city-details";
  view.className = "city-view";
  view.hidden = true;
  view.setAttribute("aria-labelledby", "details-city-name");

  view.innerHTML = `
    <header class="city-hero">
      <img class="city-hero-img" id="details-city-image" src="" alt="" />
      <div class="city-hero-inner">
        <button type="button" class="back-btn" onclick="goBackToCities()">
          <span class="back-arrow" aria-hidden="true">‹</span>
          <span>Todas las ciudades</span>
        </button>

        <div class="city-hero-text">
          <nav class="city-breadcrumb" aria-label="Ruta de navegación">
            <a href="../HTML/main.html">Inicio</a>
            <span aria-hidden="true">›</span>
            <button type="button" onclick="goBackToCities()">Estacionamientos</button>
            <span aria-hidden="true">›</span>
            <span id="details-city-crumb" aria-current="page"></span>
          </nav>
          <h1 id="details-city-name"></h1>
          <div class="city-stats">
            <div class="city-stat city-stat--accent">
              <span class="city-stat-num" id="details-count"></span>
              <span class="city-stat-label" id="details-count-label"></span>
            </div>
            <div class="city-stat">
              <span class="city-stat-num" id="details-spots"></span>
              <span class="city-stat-label">Cajones</span>
            </div>
            <div class="city-stat" id="details-hours-stat">
              <span class="city-stat-num" id="details-hours"></span>
              <span class="city-stat-label" id="details-hours-label"></span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="city-body">
      <div class="city-toolbar" id="city-toolbar">
        <label class="city-search">
          ${ICONS.search}
          <span class="visually-hidden">Buscar ubicación</span>
          <input type="search" id="location-search"
            placeholder="Buscar por nombre o dirección…" autocomplete="off" />
        </label>
        <p class="city-results" id="location-results" aria-live="polite"></p>
      </div>

      <div id="locations-list" class="locations-grid"></div>
      <p class="locations-empty" id="locations-empty" hidden>
        No encontramos ubicaciones con esa búsqueda.
      </p>

      <section class="other-cities" aria-labelledby="other-cities-title">
        <div class="redDividerLine"></div>
        <h2 class="ep-section-title" id="other-cities-title">Otras ciudades</h2>
        <div class="other-cities-list" id="other-cities-list"></div>
      </section>
    </div>
  `;

  document
    .getElementById("cities-view")
    .insertAdjacentElement("afterend", view);

  document
    .getElementById("location-search")
    .addEventListener("input", filterLocations);

  document
    .getElementById("other-cities-list")
    .addEventListener("click", (e) => {
      const chip = e.target.closest("[data-city]");
      if (chip) goToCity(chip.dataset.city, false);
    });
}

function showCityDetails(cityKey) {
  const cityData = parkingData[cityKey];
  if (!cityData) return false;

  currentCity = cityKey;
  const info = cities[cityKey] || {};
  const locations = cityData.locations;
  const total = locations.length;

  // ----- Top banner -----
  const cityName = toTitleCase(cityData.cityName);
  showHeroPhoto(cityKey, info.image || "");
  document.getElementById("details-city-name").textContent = cityName;
  document.getElementById("details-city-crumb").textContent = cityName;
  document.title = `${cityName} | Estacionamientos Eli Park`;

  document.getElementById("details-count").textContent = total;
  document.getElementById("details-count-label").textContent =
    total === 1 ? "Ubicación" : "Ubicaciones";

  const totalSpots = locations.reduce((sum, l) => sum + (Number(l.spots) || 0), 0);
  document.getElementById("details-spots").textContent =
    totalSpots.toLocaleString("es-MX");

  const open24 = locations.filter((l) => /24/.test(l.hours)).length;
  const hoursStat = document.getElementById("details-hours-stat");
  hoursStat.hidden = open24 === 0;
  if (open24 === total) {
    document.getElementById("details-hours").textContent = "24 h";
    document.getElementById("details-hours-label").textContent = "Todos los días";
  } else {
    document.getElementById("details-hours").textContent = `${open24} de ${total}`;
    document.getElementById("details-hours-label").textContent = "Abiertos 24 horas";
  }

  // ----- Location cards -----
  const list = document.getElementById("locations-list");
  list.innerHTML = locations.map(locationCardHTML).join("");
  list.classList.toggle("is-single", total === 1);

  // ----- Search (only for cities with many locations) -----
  document.getElementById("city-toolbar").hidden = total < SEARCH_MIN_LOCATIONS;
  document.getElementById("location-search").value = "";
  filterLocations();

  // ----- Other cities -----
  document.getElementById("other-cities-list").innerHTML = Object.keys(cities)
    .filter((key) => key !== cityKey)
    .map(
      (key) => `
        <button type="button" class="city-chip" data-city="${key}">
          <img src="${cities[key].image}" alt="" loading="lazy" />
          <span>${escapeHTML(cities[key].name)}</span>
        </button>`
    )
    .join("");

  // ----- Show it -----
  const view = document.getElementById("city-details");
  document.getElementById("cities-view").hidden = true;
  view.hidden = false;
  document.body.classList.add("viewing-city");

  view.classList.remove("is-entering");
  void view.offsetWidth; // restart the entrance animation
  view.classList.add("is-entering");

  window.scrollTo({ top: 0, behavior: "auto" });
  view.querySelector(".back-btn").focus({ preventScroll: true });
  return true;
}

// Cards use small photos (Assets/parking-card-images/thumbs/) and the big
// banner uses the full-size photo with the same name. The small one (already
// loaded) shows instantly, softly blurred, and the sharp one replaces it as
// soon as it arrives — so the banner is never empty.
function showHeroPhoto(cityKey, thumbSrc) {
  const hero = document.getElementById("details-city-image");
  const fullSrc = thumbSrc.replace("/thumbs/", "/");

  hero.src = thumbSrc;
  hero.classList.add("is-preview");

  const full = new Image();
  full.onload = () => {
    if (currentCity !== cityKey) return; // visitor already moved on
    hero.src = fullSrc;
    hero.classList.remove("is-preview");
  };
  full.src = fullSrc;
}

function closeCityDetails() {
  currentCity = null;

  const view = document.getElementById("city-details");
  const citiesView = document.getElementById("cities-view");
  view.hidden = true;
  document.getElementById("locations-list").innerHTML = ""; // unloads the maps
  citiesView.hidden = false;
  document.body.classList.remove("viewing-city");
  document.title = PAGE_TITLE;

  citiesView.classList.remove("is-entering");
  void citiesView.offsetWidth;
  citiesView.classList.add("is-entering");

  // Back to the same spot on the page, with the city card focused
  window.scrollTo({ top: savedScrollY, behavior: "auto" });
  if (lastOpenedCard) lastOpenedCard.focus({ preventScroll: true });
}

function locationCardHTML(location, index) {
  const number = String(index + 1).padStart(2, "0");
  const name = escapeHTML(location.name);
  const address = escapeHTML(location.address);
  const phoneHref = "tel:" + String(location.phone).replace(/[^\d+]/g, "");
  const destination = encodeURIComponent(`${location.name}, ${location.address}`);
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  const is24 = /24/.test(location.hours);
  const map = String(location.mapIframe || "").replace(
    "<iframe ",
    `<iframe title="Mapa de ${name}" `
  );

  return `
    <article class="location-card" style="--i:${index}"
      data-search="${escapeHTML(normalizeText(location.name + " " + location.address))}">
      <div class="location-map">${map}</div>
      <div class="location-body">
        <div class="location-head">
          <span class="location-index" aria-hidden="true">${number}</span>
          <h3 class="location-name">${name}</h3>
        </div>
        <p class="location-address">${ICONS.pin}<span>${address}</span></p>
        <ul class="location-facts">
          <li>${ICONS.parking}<span><strong>${Number(location.spots).toLocaleString("es-MX")}</strong> cajones</span></li>
          <li${is24 ? ' class="is-24"' : ""}>${ICONS.clock}<span>${escapeHTML(location.hours)}</span></li>
          <li>${ICONS.phone}<a href="${phoneHref}">${escapeHTML(location.phone)}</a></li>
        </ul>
        <a class="ep-btn ep-btn--outline location-directions" href="${directions}"
          target="_blank" rel="noopener">Cómo llegar</a>
      </div>
    </article>`;
}

/* ---------- Search ---------- */

function filterLocations() {
  const term = normalizeText(document.getElementById("location-search").value.trim());
  const cards = document.querySelectorAll("#locations-list .location-card");
  let shown = 0;

  cards.forEach((card) => {
    const match = !term || card.dataset.search.includes(term);
    card.hidden = !match;
    if (match) shown++;
  });

  document.getElementById("locations-empty").hidden = shown > 0;
  document.getElementById("location-results").textContent = term
    ? `${shown} de ${cards.length} ubicaciones`
    : `${cards.length} ubicaciones`;
}

/* ---------- Helpers ---------- */

// "CIUDAD DE MÉXICO" -> "Ciudad de México"
function toTitleCase(text) {
  const small = ["de", "del", "la", "las", "los", "y"];
  return String(text)
    .toLowerCase()
    .split(" ")
    .map((word, i) =>
      i > 0 && small.includes(word)
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

// Lowercase without accents, so "cancun" finds "Cancún"
function normalizeText(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function escapeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
