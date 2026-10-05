const phrases = [
  "CIBERSEGURIDAD // WEB DEVELOPMENT",
  "SECURITY ENTHUSIAST // CODE CREATOR",
  "BUILDING THE FUTURE, ONE LINE AT A TIME"
];

const typing = document.getElementById("typing");
let phrase = 0, char = 0, deleting = false;

function typeEffect() {
  const current = phrases[phrase];
  typing.textContent = deleting ? current.substring(0, char--) : current.substring(0, char++);
  let speed = deleting ? 35 : 65;

  if (!deleting && char > current.length) {
    deleting = true;
    speed = 1600;
  } else if (deleting && char < 0) {
    deleting = false;
    phrase = (phrase + 1) % phrases.length;
    char = 0;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

const nav = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => nav.classList.toggle("menu-open"));
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("menu-open"));
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".skill-card, .project, .contact-box").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(25px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
