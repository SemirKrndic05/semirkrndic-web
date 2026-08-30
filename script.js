const VIBER_CHAT_URL = "viber://chat?number=%2B38762257591";

document.querySelectorAll(".binary-field span").forEach((column) => {
  column.textContent = (column.textContent + " ").repeat(9);
});

function copyMessage(message) {
  const textArea = document.createElement("textarea");
  textArea.value = message;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  textArea.remove();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message).catch(() => {});
  }
}

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const message = String(data.get("message") || "").trim();
  const viberMessage = [
    "Pozdrav, javljam se putem vaše web stranice.",
    "",
    `Ime / naziv firme: ${name}`,
    `Broj telefona: ${phone}`,
    "",
    "Potrebna mi je web stranica:",
    message
  ].join("\n");

  copyMessage(viberMessage);
  window.alert("Poruka je kopirana. Kada se Viber otvori, zalijepite poruku i pošaljite.");
  window.location.href = VIBER_CHAT_URL;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
