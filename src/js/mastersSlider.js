import { Swiper, Thumbs, Navigation, Pagination, Grid } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Thumbs, Navigation, Pagination, Grid]);

export default function mastersSlider() {
    const elements = Array.from(document.querySelectorAll('.js-masters-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            speed: 500,
            slidesPerView: 'auto',
            navigation: {
                nextEl: element.querySelector('.masters__slider-arrow--next'),
                prevEl: element.querySelector('.masters__slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 2
                }
            }
        });
    });
}
