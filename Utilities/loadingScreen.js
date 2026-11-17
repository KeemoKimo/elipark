/* ==========================================================================
   ELI PARK — LOADING SCREEN & PAGE TRANSITIONS
   The loading screen markup is written directly in each page's HTML
   (inside <div id="loader-container">), so it is the very first thing the
   browser draws — the page underneath never "flashes" before it.

   This script:
   1. Fades the loading screen out once the page has loaded.
   2. Fades it back in when a link to another page of the site is clicked,
      so moving between pages feels like one smooth transition.
   ========================================================================== */

(function () {
  const MIN_VISIBLE_MS = 500; // shortest time the logo is shown, counted from when the page started loading
  const MAX_VISIBLE_MS = 4000; // never block the page longer than this, even on slow connections
  const LEAVE_FADE_MS = 280; // how long the logo takes to fade in before going to the next page

  const root = document.documentElement;
  root.classList.add("ep-loader-js"); // tells the CSS this script is running

  let hidden = false;

  function getScreen() {
    return document.getElementById("loadingScreen");
  }

  function hideLoadingScreen() {
    if (hidden) return;
    hidden = true;
    const screen = getScreen();
    if (screen) {
      screen.classList.remove("is-leaving");
      screen.classList.add("fade-out");
    }
    root.classList.add("ep-loaded"); // lets page animations start after the logo fades
  }

  function scheduleHide() {
    const wait = Math.max(0, MIN_VISIBLE_MS - performance.now());
    setTimeout(hideLoadingScreen, wait);
  }

  if (document.readyState === "complete") {
    scheduleHide();
  } else {
    window.addEventListener("load", scheduleHide);
  }
  setTimeout(hideLoadingScreen, MAX_VISIBLE_MS);

  // Coming back with the browser's Back / Forward buttons: the page is
  // restored from memory, so remove the logo straight away.
  window.addEventListener("pageshow", function (e) {
    if (!e.persisted) return;
    const screen = getScreen();
    if (screen) {
      screen.classList.remove("is-leaving");
      screen.classList.add("fade-out");
    }
  });

  // ---- Smooth transition when going to another page of the site ----
  function isInternalPageLink(link, event) {
    if (event.defaultPrevented || event.button !== 0) return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    if (link.target === "_blank" || link.hasAttribute("download")) return false;

    const url = new URL(link.href, window.location.href);
    if (url.protocol !== window.location.protocol) return false; // mailto:, tel:, etc.
    if (url.origin !== window.location.origin) return false; // other websites
    if (!/\.html$/i.test(url.pathname)) return false;
    if (url.pathname === window.location.pathname && url.hash) return false; // jump on the same page
    return true;
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a[href]");
    if (!link || !isInternalPageLink(link, event)) return;

    const screen = getScreen();
    if (!screen) return;

    event.preventDefault();
    screen.classList.remove("fade-out");
    screen.classList.add("is-leaving");
    setTimeout(function () {
      window.location.href = link.href;
    }, LEAVE_FADE_MS);
  });
})();
