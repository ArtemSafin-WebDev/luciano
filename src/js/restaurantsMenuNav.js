import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function restaurantsMenuNav() {
    const elements = Array.from(document.querySelectorAll('.js-restaurant-menu-nav'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            speed: 500,
            centerInsufficientSlides: true,
            navigation: {
                nextEl: element.querySelector('.restaurant-menu__nav-btn--next'),
                prevEl: element.querySelector('.restaurant-menu__nav-btn--prev')
            },
            threshold: 10
        });
    });
}
