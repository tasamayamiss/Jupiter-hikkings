// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 500);
});

// Mobile Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const menuLinks = document.querySelector('.menu_links');
const menuItems = document.querySelectorAll('.menu-item');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    menuLinks.classList.toggle('active');
    document.body.style.overflow = menuLinks.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a menu item
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        menuLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuLinks.contains(event.target);
    const isClickOnBurger = burgerMenu.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnBurger && menuLinks.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        menuLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Reviews Slider
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const totalSlides = slides.length;
let currentSlide = 0;
let slideInterval;

function updateSlider() {
    const slideWidth = sliderTrack.clientWidth;
    sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Initialize slider
window.addEventListener('load', function() {
    updateSlider();
    startAutoSlide();
});

// Update slider on window resize
window.addEventListener('resize', function() {
    updateSlider();
});

// Event listeners for slider buttons
nextBtn.addEventListener('click', function() {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', function() {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

// Pause auto slide on hover
sliderTrack.addEventListener('mouseenter', stopAutoSlide);
sliderTrack.addEventListener('mouseleave', startAutoSlide);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Table row hover effect
const tableRows = document.querySelectorAll('.table-row');
tableRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(249, 174, 33, 0.1)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// Card hover effects
const hikingCards = document.querySelectorAll('.hiking-card');
hikingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});