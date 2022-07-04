import { Swiper, Navigation, EffectFade } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, EffectFade]);

export default function standardNav() {
    const elements = Array.from(document.querySelectorAll('.js-standard-nav'));

    elements.forEach(element => {
        if (element.matches('.js-standard-nav-only-mobile') && !IS_MOBILE) return;
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            speed: 500,
            centerInsufficientSlides: true,
            spaceBetween: 0,
            // centeredSlides: true,
            // centeredSlidesBounds: true,
            navigation: {
                nextEl: element.querySelector('.standard-nav__btn--next'),
                prevEl: element.querySelector('.standard-nav__btn--prev')
            },
            threshold: 10
        });
    });
}
