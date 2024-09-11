// Select DOM elements
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalSlides = slide.length;

// Event listeners for navigation buttons
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);

// Function to move to the next slide
function moveToNextSlide() {
    if (index === totalSlides - 1) {
        index = 0;
    } else {
        index++;
    }
    updateSlidePosition();
}

// Function to move to the previous slide
function moveToPrevSlide() {
    if (index === 0) {
        index = totalSlides - 1;
    } else {
        index--;
    }
    updateSlidePosition();
}

// Function to update slide position
function updateSlidePosition() {
    slides.style.transform = 'translateX(' + (-index * 100) + '%)';
}
