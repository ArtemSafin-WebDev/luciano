import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function homeSectionGallery() {
    const elements = Array.from(document.querySelectorAll('.js-home-section-gallery'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 1,
            speed: 700,
            watchOverflow: true,
            // autoHeight: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: false
            },
            navigation: {
                nextEl: element.querySelector('.home-section__slider-arrow--next'),
                prevEl: element.querySelector('.home-section__slider-arrow--prev')
            }
        })
    })
}