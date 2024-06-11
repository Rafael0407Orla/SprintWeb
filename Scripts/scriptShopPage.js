const carousel = document.getElementById('carousel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let currentIndex = 0;
const itemsPerView = 1;
const totalItems = document.querySelectorAll('.card--item_shop').length;

function checkCurrentIndex() {
    prev.style.display = (currentIndex === 0) ? 'none' : 'flex';
    next.style.display = (currentIndex === 2) ? 'none' : 'flex';
}


next.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsPerView) {
        currentIndex++;
        updateCarousel();
        console.log(currentIndex)
        checkCurrentIndex()
    }
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
        console.log(currentIndex)

        checkCurrentIndex()
    }
});

function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

function comprar(){
    alert("Compra realizada com sucesso!");
}