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