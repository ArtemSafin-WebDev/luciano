import { Swiper, Thumbs, Navigation, Pagination, Grid } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Thumbs, Navigation, Pagination, Grid]);

export default function proceduresSlider() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-procedures-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        new Swiper(container, {
            speed: 500,
            slidesPerView: 1,
            spaceBetween: 10,
            
            grid: {
                rows: 2,
                fill: 'row'
            }
        });
    })
    
}