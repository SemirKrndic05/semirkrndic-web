// Email na koji kontakt forma priprema poruku
const EMAIL = "skrndic.web@gmail.com";

document.querySelectorAll(".binary-field span").forEach((column) => {
  column.textContent = (column.textContent + " ").repeat(9);
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "");
  const phone = String(data.get("phone") || "");
  const message = String(data.get("message") || "");
  const subject = encodeURIComponent(`Upit za web stranicu — ${name}`);
  const body = encodeURIComponent(`Ime: ${name}\nTelefon: ${phone}\n\nPoruka:\n${message}`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
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
