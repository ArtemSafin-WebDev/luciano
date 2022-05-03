import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function eventsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-home-events-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 1,
            speed: 400,
            watchOverflow: true,
            autoHeight: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: element.querySelector('.home-section__events-slider-arrow--next'),
                prevEl: element.querySelector('.home-section__events-slider-arrow--prev')
            }
        });
    });
}
