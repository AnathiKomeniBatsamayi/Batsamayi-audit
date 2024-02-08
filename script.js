document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const textContainer = document.querySelector(".text-container");
    const navLinks = document.querySelectorAll("nav a");
    const scrolled = window.scrollY > 0;

    header.classList.toggle("scrolled", scrolled);
    textContainer.classList.toggle("scrolled", scrolled);

    // Update navigation link colors
    navLinks.forEach(link => {
        link.style.color = scrolled ? "black" : "white";
    });
});
  // JavaScript for carousel functionality
const carousel = document.querySelector('.carousel');
const indicatorLines = document.querySelectorAll('.indicator-line');
let currentIndex = 0;

function showBanner(index) {
    const bannerWidth = document.querySelector('.banner').offsetWidth;
    currentIndex = index; // Update currentIndex on click

    carousel.style.transform = `translateX(${-index * bannerWidth}px)`;

    // Update active indicator line
    indicatorLines.forEach(line => line.classList.remove('active'));
    indicatorLines[index].classList.add('active');
}

// Function to handle window resize event
function handleResize() {
    // Recalculate and show the current banner when window is resized
    showBanner(currentIndex);
}

// Add event listener for window resize event
window.addEventListener('resize', handleResize);

// Automatically advance the carousel every few seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % indicatorLines.length; // Use indicatorLines.length for dynamic count
    showBanner(currentIndex);
}, 5000); // Change the duration as needed

//Nav button for small screens
function toggleNav() {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'flex' || nav.style.display === '') ? 'none' : 'flex';
}