// karusel.js
var slideIndex = 1;
var slideInterval;

showSlides(slideIndex);

function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
   
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";
    }
   
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
}

function startAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000); // Change slide every 5 seconds
}

// Start auto slide on load
startAutoSlide();

// Pause auto-slide on hover
var slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    slideshowContainer.addEventListener('mouseleave', function() {
        startAutoSlide();
    });
}