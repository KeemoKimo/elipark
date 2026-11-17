/* ==========================================================================
   ELI PARK — PAGE EFFECTS (shared by every page)
   1. Fade-up on scroll for anything with class="reveal"
   2. Count-up animation for numbers with data-count="12345"
   3. Back-to-top button
   Load this as the LAST script on the page.
   ========================================================================== */

(function () {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Lets the CSS know JavaScript is running (content stays visible without it).
  document.documentElement.classList.add("ep-js");

  /* ---------- 1. Fade-up on scroll ---------- */
  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Optional small delay: <div class="reveal" data-reveal-delay="150">
    items.forEach((el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.animationDelay = delay + "ms";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ---------- 2. Count-up numbers ---------- */
  function formatNumber(value) {
    return Math.round(value).toLocaleString("es-MX");
  }

  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const prefix = el.getAttribute("data-prefix") || "";
    if (isNaN(target)) return;

    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      el.textContent = prefix + formatNumber(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  function setupCountUp() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length || reduceMotion || !("IntersectionObserver" in window))
      return; // numbers simply stay as written in the HTML

    counters.forEach((el) => {
      el.textContent = (el.getAttribute("data-prefix") || "") + "0";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  /* ---------- 3. Back-to-top button ---------- */
  function setupBackToTop() {
    if (document.getElementById("backToTop")) return;

    const button = document.createElement("button");
    button.id = "backToTop";
    button.className = "back-to-top";
    button.type = "button";
    button.innerHTML = "&#8593;"; // ↑
    button.setAttribute("aria-label", "Volver arriba");
    document.body.appendChild(button);

    function update() {
      const show =
        window.scrollY > 400 &&
        !document.body.classList.contains("showing-details");
      button.classList.toggle("visible", show);
    }

    window.addEventListener("scroll", update, { passive: true });
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
    update();
  }

  /* ---------- 4. Gentle 3D tilt for anything with data-tilt ---------- */
  function setupTilt() {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduceMotion || !canHover) return; // only on computers with a mouse

    const MAX_DEG = 7;
    document.querySelectorAll("[data-tilt]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const box = el.getBoundingClientRect();
        const x = (e.clientX - box.left) / box.width - 0.5; // -0.5 … 0.5
        const y = (e.clientY - box.top) / box.height - 0.5;
        el.style.setProperty("--tilt-y", (x * MAX_DEG).toFixed(2) + "deg");
        el.style.setProperty("--tilt-x", (-y * MAX_DEG).toFixed(2) + "deg");
      });
      el.addEventListener("mouseleave", () => {
        el.style.setProperty("--tilt-x", "0deg");
        el.style.setProperty("--tilt-y", "0deg");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupReveal();
    setupCountUp();
    setupBackToTop();
    setupTilt();
  });
})();
