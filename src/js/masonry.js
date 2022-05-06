import { IS_MOBILE } from './utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

gsap.registerPlugin(ScrollTrigger);

export default function masonry() {
    const elements = Array.from(document.querySelectorAll('.js-masonry-grid'));
    if (!IS_MOBILE) {
        elements.forEach(element => {
            const cards = Array.from(element.querySelectorAll('.js-masonry-grid-card'));
            const wrapper = element.querySelector('.swiper-wrapper');
            const COLUMN_COUNT = 2;
            const columns = [];
            wrapper.innerHTML = '';
            for (let i = 0; i < COLUMN_COUNT; i++) {
                const column = document.createElement('div');
                column.className = 'masonry__grid-column';
                wrapper.appendChild(column);
                columns.push(column);
            }

            cards.forEach((card, cardIndex) => {
                if ((cardIndex + 1) % 2 == 0) {
                    columns[1].appendChild(card);
                } else {
                    columns[0].appendChild(card);
                }
            });

            ScrollTrigger.refresh();
        });
    } else {
        elements.forEach(element => {
            new Swiper(element.querySelector('.swiper'), {
                slidesPerView: 'auto',
                speed: 500,
                spaceBetween: 14
            });
        });
    }
}
