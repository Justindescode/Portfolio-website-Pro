function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
toggleMenu();
