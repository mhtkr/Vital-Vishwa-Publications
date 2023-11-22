const carousel = document.querySelector('.carousel-inner');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const additionalImages = ['image5.jpg', 'image6.jpg', 'image7.jpg'];

let currentSlide = 0;

function slideTo(index) {
    carousel.style.transform = `translateX(-${index * 25}%)`;
    currentSlide = index;

    if (index === carouselSlides.length - 1) {
        // Add additional images if not already added
        if (!carouselSlides.length === 8) {
            for (const imageURL of additionalImages) {
                const newSlide = document.createElement('div');
                newSlide.classList.add('carousel-slide');
                const newImage = document.createElement('img');
                newImage.src = imageURL;
                newImage.alt = 'Additional Image';
                newSlide.appendChild(newImage);
                carousel.appendChild(newSlide);
            }
        }
    }
}

prevBtn.addEventListener('click', () => {
    if (currentSlide === 0) {
        slideTo(carouselSlides.length - 1);
    } else {
        slideTo(currentSlide - 1);
    }
});

nextBtn.addEventListener('click', () => {
    slideTo(currentSlide + 1);
});
