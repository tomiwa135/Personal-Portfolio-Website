function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function downloadResume() {
    window.open('assets/tomiwa-Akinrotimi-Resume.pdf');
}