let mobileMenu = document.getElementById("mobile-menu")
let menu = document.getElementById("menu")
let overlay = document.getElementById("overlay")
let header = document.getElementById("mobile-menu-wrapper");
let sticky = header.offsetTop;

mobileMenu.addEventListener('click', function toggleMenu() {
    menu.classList.toggle("active")
    overlay.classList.toggle("active")
})

overlay.addEventListener('click', function overlay() {
    menu.classList.remove("active")
    this.classList.remove("active")
})

window.onscroll = function() {stickyMenu()};

function stickyMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 