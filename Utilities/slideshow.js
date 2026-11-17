/* ==========================================================================
   ELI PARK — PHOTO SLIDESHOW (used on Inicio and Empleo)
   Finds every .photoSlider-container on the page and turns it into a
   slideshow with arrows, dots, swipe (phones) and pause-on-hover.
   Change the speed with data-interval="6000" (milliseconds) on the container.
   ========================================================================== */

(function () {
  const FADE_MS = 1200; // keep in sync with the opacity transition in slideshow.css

  function initSlideshow(container) {
    const slides = Array.from(
      container.querySelectorAll(".photoSlider-children")
    );
    if (!slides.length) return;

    const interval = parseInt(container.dataset.interval, 10) || 6000;
    let index = Math.max(
      0,
      slides.findIndex((s) => s.classList.contains("active"))
    );
    let timer = null;
    let dots = [];

    if (slides.some((s) => s.querySelector(".infoDiv-slider"))) {
      container.classList.add("has-captions");
    }

    container.setAttribute("aria-roledescription", "carrusel");
    if (!container.hasAttribute("tabindex")) container.tabIndex = 0;

    // ---- Controls (only when there is more than one photo) ----
    if (slides.length > 1) {
      const prevBtn = makeButton("slider-arrow slider-arrow--prev", "Anterior", "&#8249;");
      const nextBtn = makeButton("slider-arrow slider-arrow--next", "Siguiente", "&#8250;");
      prevBtn.addEventListener("click", () => goTo(index - 1, true));
      nextBtn.addEventListener("click", () => goTo(index + 1, true));
      container.append(prevBtn, nextBtn);

      const dotsWrap = document.createElement("div");
      dotsWrap.className = "slider-dots";
      slides.forEach((_, n) => {
        const dot = makeButton("slider-dot", "Ir a la foto " + (n + 1), "");
        dot.addEventListener("click", () => goTo(n, true));
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
      container.appendChild(dotsWrap);
    }

    function makeButton(className, label, html) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = className;
      b.setAttribute("aria-label", label);
      b.innerHTML = html;
      return b;
    }

    // ---- Show a slide ----
    function goTo(newIndex, fromUser) {
      const total = slides.length;
      newIndex = (newIndex + total) % total;
      if (newIndex === index && slides[index].classList.contains("active")) {
        if (fromUser) restart();
        return;
      }

      const old = slides[index];
      old.classList.remove("active");
      old.classList.add("leaving");
      setTimeout(() => old.classList.remove("leaving"), FADE_MS);

      index = newIndex;
      render();
      if (fromUser) restart();
    }

    function render() {
      slides.forEach((slide, n) => {
        const isActive = n === index;
        slide.classList.toggle("active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
        // Hidden slides can't be tabbed into (their buttons stay out of the way)
        if ("inert" in slide) slide.inert = !isActive;
      });
      dots.forEach((dot, n) => {
        dot.classList.toggle("active", n === index);
        dot.setAttribute("aria-current", n === index ? "true" : "false");
      });
    }

    // ---- Autoplay ----
    function start() {
      if (slides.length < 2 || timer) return;
      timer = setInterval(() => goTo(index + 1, false), interval);
    }

    function stop() {
      clearInterval(timer);
      timer = null;
    }

    function restart() {
      stop();
      start();
    }

    // Pause while the mouse is over it or a button has keyboard focus
    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);
    container.addEventListener("focusin", stop);
    container.addEventListener("focusout", (e) => {
      if (!container.contains(e.relatedTarget)) start();
    });

    // Pause when the browser tab is in the background
    document.addEventListener("visibilitychange", () => {
      document.hidden ? stop() : start();
    });

    // Keyboard arrows
    container.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") goTo(index - 1, true);
      if (e.key === "ArrowRight") goTo(index + 1, true);
    });

    // Swipe on phones / tablets
    let touchX = null;
    container.addEventListener(
      "touchstart",
      (e) => {
        touchX = e.touches[0].clientX;
      },
      { passive: true }
    );
    container.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) goTo(index + (dx < 0 ? 1 : -1), true);
      touchX = null;
    });

    render();
    start();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".photoSlider-container").forEach(initSlideshow);
  });
})();
