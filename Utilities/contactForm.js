/* ==========================================================================
   ELI PARK — CONTACT FORM (contacto.html)
   - Checks each field as the visitor types and shows a ✓ when it is right
   - Moves the little car along the road as the form gets completed
   - Opens the visitor's email program with the message already written
   - Shows a "message ready" screen with a "copy message" option, for people
     whose email program does not open
   ========================================================================== */

(function () {
  const CONTACT_EMAIL = "y87bf@unb.ca";

  const MAX_CHARS = 300;
  const RING_LENGTH = 97.4; // length of the little counter circle (2 × π × 15.5)
  const REQUIRED = ["name", "email", "subject", "message"];
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const form = document.getElementById("contactForm");
  if (!form) return;

  const card = document.getElementById("messageCard");
  const success = document.getElementById("formSuccess");
  const road = document.getElementById("progressRoad");
  const progressText = document.getElementById("progressText");
  const wheel = document.getElementById("messageWheel");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const charCount = document.getElementById("charCount");
  const charCounter = document.getElementById("charCounter");
  const charRing = document.getElementById("charRing");
  const topicHint = document.getElementById("topicHint");
  const copyBtn = document.getElementById("copyMessageBtn");
  const fallbackEmail = document.getElementById("fallbackEmail");

  let lastMessageText = "";

  fallbackEmail.textContent = CONTACT_EMAIL;
  fallbackEmail.href = "mailto:" + CONTACT_EMAIL;

  /* ---------- The fields and their rules ---------- */
  const fields = {
    name: {
      input: document.getElementById("senderName"),
      error: document.getElementById("nameError"),
      check(value) {
        if (!value) return "Escribe tu nombre";
        if (value.length < 2) return "Tu nombre debe tener al menos 2 letras";
        return "";
      },
    },
    phone: {
      input: document.getElementById("senderPhone"),
      error: document.getElementById("phoneError"),
      check(value) {
        if (!value) return ""; // optional
        const digits = value.replace(/\D/g, "");
        if (digits.length < 8 || digits.length > 15)
          return "Revisa tu número de teléfono (al menos 8 dígitos)";
        return "";
      },
    },
    email: {
      input: document.getElementById("senderEmail"),
      error: document.getElementById("emailError"),
      check(value) {
        if (!value) return "El correo electrónico es requerido";
        if (!EMAIL_PATTERN.test(value))
          return "Por favor ingresa un correo electrónico válido";
        return "";
      },
    },
    subject: {
      input: document.getElementById("subject"),
      error: document.getElementById("subjectError"),
      check(value) {
        if (!value) return "El asunto es requerido";
        if (value.length < 5) return "El asunto debe tener al menos 5 caracteres";
        return "";
      },
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("messageError"),
      check(value) {
        if (!value) return "El mensaje es requerido";
        if (value.length < 10) return "El mensaje debe tener al menos 10 caracteres";
        return "";
      },
    },
  };

  // showError: true when the visitor has left the field or pressed "Enviar".
  // While typing, a visible error disappears as soon as the field is fixed.
  function validateField(key, showError) {
    const field = fields[key];
    const value = field.input.value.trim();
    const problem = field.check(value);
    const group = field.input.closest(".form-group");
    const ok = !problem;

    group.classList.toggle("is-valid", ok && value !== "");

    if (showError || group.classList.contains("has-error")) {
      field.error.textContent = problem;
      group.classList.toggle("has-error", !ok);
      field.input.setAttribute("aria-invalid", String(!ok));
    }
    return ok;
  }

  /* ---------- Car on the road (progress) ---------- */
  function updateProgress() {
    const done = REQUIRED.filter(
      (key) => !fields[key].check(fields[key].input.value.trim())
    ).length;
    const share = done / REQUIRED.length;
    const complete = done === REQUIRED.length;

    road.style.setProperty("--p", share);
    road.parentElement.classList.toggle("is-complete", complete);
    progressText.classList.toggle("is-complete", complete);
    progressText.textContent = complete
      ? "¡Listo para enviar!"
      : `${done} de ${REQUIRED.length} campos listos`;

    // The steering wheel in the dark panel turns as the form fills up
    if (wheel) wheel.style.transform = `rotate(${share * 270}deg)`;
  }

  /* ---------- Character counter ring ---------- */
  function updateCounter() {
    const length = fields.message.input.value.length;
    charCount.textContent = length;
    charRing.style.strokeDashoffset = RING_LENGTH * (1 - length / MAX_CHARS);
    charCounter.classList.toggle("is-near", length >= 250 && length < 280);
    charCounter.classList.toggle("is-limit", length >= 280);
  }

  /* ---------- Listeners ---------- */
  Object.keys(fields).forEach((key) => {
    const input = fields[key].input;
    input.addEventListener("input", () => {
      validateField(key, false);
      updateProgress();
      if (key === "message") updateCounter();
    });
    input.addEventListener("blur", () => {
      if (input.value.trim()) validateField(key, true);
    });
  });

  // Topic tiles: change the subject hint, and point job seekers to Empleo
  form.querySelectorAll('input[name="topic"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      fields.subject.input.placeholder =
        radio.dataset.placeholder || "¿Cómo podemos ayudarte?";
      topicHint.hidden = radio.dataset.hint !== "empleo";
    });
  });

  /* ---------- Sending ---------- */
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalid = null;
    Object.keys(fields).forEach((key) => {
      const ok = validateField(key, true);
      if (!ok && !firstInvalid) firstInvalid = fields[key].input;
    });

    if (firstInvalid) {
      card.classList.remove("shake");
      void card.offsetWidth; // restart the little shake animation
      card.classList.add("shake");
      firstInvalid.focus();
      return;
    }

    const topic = form.querySelector('input[name="topic"]:checked').value;
    const name = fields.name.input.value.trim();
    const phone = fields.phone.input.value.trim();
    const email = fields.email.input.value.trim();
    const subject = fields.subject.input.value.trim();
    const message = fields.message.input.value.trim();

    const subjectLine = `[${topic}] ${subject}`;
    const body = [
      `Tema: ${topic}`,
      `Nombre: ${name}`,
      `Correo: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      "",
      "Mensaje:",
      message,
      "",
      "---",
      "Enviado desde el formulario de contacto de Eli Park",
    ]
      .filter((line) => line !== null)
      .join("\n");

    lastMessageText = `Para: ${CONTACT_EMAIL}\nAsunto: ${subjectLine}\n\n${body}`;

    const mailtoLink =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subjectLine)}` +
      `&body=${encodeURIComponent(body)}`;

    submitBtn.disabled = true;
    submitBtn.classList.add("is-sending");
    btnText.textContent = "Abriendo tu correo…";

    // Let the paper plane fly off, then open the email program
    setTimeout(() => {
      window.location.href = mailtoLink;
      showSuccess();
    }, 650);
  });

  function showSuccess() {
    form.hidden = true;
    success.hidden = false;
    submitBtn.disabled = false;
    submitBtn.classList.remove("is-sending");
    btnText.textContent = "Enviar mensaje";
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    success.focus({ preventScroll: true });
  }

  /* ---------- "Message ready" screen buttons ---------- */
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(lastMessageText);
    } catch (error) {
      copyWithFallback(lastMessageText);
    }
    copyBtn.textContent = "¡Copiado!";
    setTimeout(() => {
      copyBtn.textContent = "Copiar mensaje";
    }, 2500);
  });

  // For browsers that block the modern clipboard (e.g. pages opened as files)
  function copyWithFallback(text) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      console.error("No se pudo copiar el mensaje:", error);
    }
    helper.remove();
  }

  document.getElementById("newMessageBtn").addEventListener("click", () => {
    form.reset();
    Object.keys(fields).forEach((key) => {
      const group = fields[key].input.closest(".form-group");
      group.classList.remove("is-valid", "has-error");
      fields[key].error.textContent = "";
      fields[key].input.removeAttribute("aria-invalid");
    });
    fields.subject.input.placeholder = "¿Cómo podemos ayudarte?";
    topicHint.hidden = true;
    updateCounter();
    updateProgress();

    success.hidden = true;
    form.hidden = false;
    fields.name.input.focus();
  });

  updateCounter();
  updateProgress();
})();
