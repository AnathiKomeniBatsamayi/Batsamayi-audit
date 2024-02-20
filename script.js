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

    // Simulating form submission (you can replace this with your backend logic)
    // For demonstration purposes, we're just showing a success message
    function submitForm() {
        // Collect form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
    
        emailjs.send("service_m9gm10a", "template_mk2ocjb", {
            from_name: name,
            email_id: email,
            subject: subject,
            message: message
        }).then(function(response) {
            
            console.log("Email sent successfully", response);
            document.getElementById('success-message').style.display = 'block';
        }, function(error) {
            // Handle error
            console.error("Email sending failed", error);
            
    document.getElementById('form-container').style.display = 'none';
        });
    
    
    
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

// Function to scroll to a specific section when a navigation link is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to a specific section when a navigation link is clicked
function scrollToSectionOffset(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = -80; // Adjust this value to set the offset

    // Calculate the target scroll position with the offset
    const targetScrollPosition = section.getBoundingClientRect().top + window.pageYOffset + offset;

    // Scroll to the calculated position with smooth behavior
    window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
}

// Add event listeners for each navigation link
document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('bannertop');
});

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSectionOffset('intro');
});

document.getElementById('services-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSectionOffset('services');
});

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('Contact');
});