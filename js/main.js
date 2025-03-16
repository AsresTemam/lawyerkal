// Sticky Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Testimonial Slider
const track = document.getElementById('testimonialTrack');
const slides = document.querySelectorAll('.testimonial-slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;
const slideWidth = 100;

// Initialize slider
function setSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

// Next slide
nextBtn.addEventListener('click', () => {
    if (currentIndex >= slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setSlidePosition();
});

// Previous slide
prevBtn.addEventListener('click', () => {
    if (currentIndex <= 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    setSlidePosition();
});

// Auto slide
let slideInterval = setInterval(() => {
    if (currentIndex >= slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setSlidePosition();
}, 5000);

// Pause on hover
track.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

track.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        if (currentIndex >= slides.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        setSlidePosition();
    }, 5000);
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would normally process the form data and send it to a server
    alert('Thank you for your message! We will contact you soon.');
    contactForm.reset();
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.service-card, .team-card, .about-img, .about-text');

function reveal() {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', reveal);

// Call reveal once on page load to check for elements already in view
window.addEventListener('load', reveal);