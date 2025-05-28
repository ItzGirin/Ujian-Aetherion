function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");
  if (!menu || !hamburger) return;
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Close menu if clicking outside
document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");
  if (!menu || !hamburger) return;
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});


// Generate navigation on page load
document.addEventListener("DOMContentLoaded", generateNavigation);
