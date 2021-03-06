import { Swiper, Thumbs, Navigation, Pagination } from 'swiper';

Swiper.use([Thumbs, Navigation, Pagination]);

function initializeFlowersSlider() {
    const elements = Array.from(document.querySelectorAll('.js-flowers-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.standard-modal__flowers-slider-arrow--next'),
                prevEl: element.querySelector('.standard-modal__flowers-slider-arrow--prev')
            }
        });
    });
}

window.initializeFlowersSlider = initializeFlowersSlider;

export default function flowersSlider() {
    initializeFlowersSlider();
}
