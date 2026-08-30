const EMAIL = "skrndic.web@gmail.com";
const WHATSAPP_NUMBER = "38762257591";
const PHONE_DISPLAY = "062 257 591";
const FACEBOOK_URL = "https://www.facebook.com/semirkrndicweb/";

document.querySelectorAll(".binary-field span").forEach((column) => {
  column.textContent = (column.textContent + " ").repeat(9);
});

const emailLink = document.getElementById("email-link");
const emailText = document.getElementById("email-text");

if (emailLink) emailLink.href = `mailto:${EMAIL}`;
if (emailText) emailText.textContent = EMAIL;

const phoneContact = document.getElementById("phone-contact");

if (phoneContact) {
  phoneContact.classList.remove("pending-contact");
  phoneContact.style.cursor = "pointer";
  phoneContact.setAttribute("role", "link");
  phoneContact.setAttribute("tabindex", "0");

  const phoneText = document.getElementById("phone-text");
  if (phoneText) phoneText.textContent = PHONE_DISPLAY;

  phoneContact.addEventListener("click", () => {
    window.location.href = "tel:+38762257591";
  });
}

const facebookContact = document.getElementById("facebook-contact");

if (facebookContact) {
  facebookContact.classList.remove("pending-contact");
  facebookContact.style.cursor = "pointer";
  facebookContact.setAttribute("role", "link");
  facebookContact.setAttribute("tabindex", "0");

  const facebookText = document.getElementById("facebook-text");
  if (facebookText) facebookText.textContent = "Semir Krndić Web";

  facebookContact.addEventListener("click", () => {
    window.open(FACEBOOK_URL, "_blank", "noopener,noreferrer");
  });
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const formNote = contactForm.querySelector(".form-note");

  if (submitButton) {
    submitButton.innerHTML =
      'Pošalji putem WhatsAppa <span>➤</span>';
  }

  if (formNote) {
    formNote.textContent =
      "Otvorit će se WhatsApp sa pripremljenom porukom. Potrebno je samo pritisnuti Send.";
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!phone) {
      alert("Molimo unesite broj telefona.");
      return;
    }

    const whatsappMessage = [
      "Pozdrav, javljam se putem vaše web stranice.",
      "",
      `Ime / naziv firme: ${name}`,
      `Broj telefona: ${phone}`,
      "",
      "Potrebna mi je web stranica:",
      message
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
