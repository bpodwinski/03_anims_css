let mobileMenu = document.getElementById("mobile-menu")
let menu = document.getElementById("menu")
let overlay = document.getElementById("overlay")

mobileMenu.addEventListener('click', function toggleMenu() {
    menu.classList.toggle("active")
    overlay.classList.toggle("active")
})

overlay.addEventListener('click', function overlay() {
    menu.classList.remove("active")
    this.classList.remove("active")
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("mobile-menu-wrapper");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 