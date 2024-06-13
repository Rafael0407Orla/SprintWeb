document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById('carousel');

    const items = [
        { bgColor: 'azul', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
        { bgColor: 'azul', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
        { bgColor: 'azul', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
        { bgColor: 'verde', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
        { bgColor: 'verde', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
        { bgColor: 'verde', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
        { bgColor: 'roxo', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
        { bgColor: 'roxo', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
        { bgColor: 'roxo', imgSrc: 'Assets/car.png', title: 'Miniature Car', price: '$ 15.000' },
    ];

    const generateItemHTML = (item) => `
        <div class="card--item">
            <img class="bg_item" src="Assets/asset_shop_item_${item.bgColor}.svg" alt="bg_item">
            <img class="item_shop" src="${item.imgSrc}" alt="item">
            <p class="item_shop--titulo">${item.title}</p>
            <p class="item_shop--subtitulo">${item.price}</p>
            <button class="item_button" onclick="comprar()">Buy</button>
        </div>
    `;

    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(items.length / itemsPerSlide);

    const generateSlideHTML = (startIndex) => {
        const endIndex = startIndex + itemsPerSlide;
        const slideItems = items.slice(startIndex, endIndex);
        return slideItems.map(generateItemHTML).join('');
    };

    carousel.innerHTML = Array.from({ length: totalSlides }, (_, index) => {
        const slideItemsHTML = generateSlideHTML(index * itemsPerSlide);
        return `<div class="card--item_shop">${slideItemsHTML}</div>`;
    }).join('');

    // Carousel Navigation
    let currentIndex = 0;

    const showItems = () => {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        showItems();
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        showItems();
    });

    showItems();
});

function comprar(){
    alert("Compra realizada com sucesso!");
}