import { Swiper, Thumbs, Navigation, Pagination, Grid } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Thumbs, Navigation, Pagination, Grid]);

export default function includedSlider() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-included-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            speed: 500,
            slidesPerView: 'auto',
            spaceBetween: 25,
            
            grid: {
                rows: 4,
                fill: 'row'
            }
        });
    });
}
