// Sticky navbar background
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--nav-bg');
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Smooth scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typewriter effect
const typewriterEl = document.querySelector(".typewriter");
const phrases = ["Web Developer ", "UI/UX Designer ", "Tech Enthusiast ", "Creative Coder "];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
  const currentText = phrases[currentPhrase];
  if (isDeleting) {
    typewriterEl.textContent = currentText.substring(0, currentChar--);
  } else {
    typewriterEl.textContent = currentText.substring(0, currentChar++);
  }

  if (!isDeleting && currentChar === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  }
});
