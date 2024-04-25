const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const slidesContainer = document.querySelector('.vidslides');
        const slides = document.querySelectorAll('.vidslide');
        const slideWidth = slides[0].clientWidth;
        let currentIndex = 0;

        // Function to show the current slide
        function showSlide(index) {
            slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
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