const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slidesContainer = document.querySelector('.vidslides');
const slides = document.querySelectorAll('.vidslide');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;
let intervalId; // Variable to store the interval ID

// Function to show the current slide
function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Function to move to the next slide
function moveToNextSlide() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Event listener for left and right arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    } else if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }
});/*

// Start auto sliding after 3 seconds
intervalId = setInterval(moveToNextSlide, 3000);

// Stop auto sliding when the user interacts with the slideshow*/
