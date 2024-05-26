const carousel = document.getElementById('carousel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let currentIndex = 0;
const itemsPerView = 1; 
const totalItems = document.querySelectorAll('.card--item_shop').length;

next.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsPerView) {
        currentIndex++;
        updateCarousel();
    }
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}