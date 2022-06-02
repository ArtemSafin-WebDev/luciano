import { Swiper, Navigation, EffectFade, Controller } from 'swiper';

Swiper.use([Navigation, EffectFade, Controller]);

import { IS_MOBILE } from './utils';

export default function homeSectionGallery() {
    const elements = Array.from(document.querySelectorAll('.js-home-section-gallery'));

    elements.forEach(element => {
        const photoSliderContainer = element.querySelector('.home-section__bg-slider .swiper');
        const textSliderContainer = element.querySelector('.home-section__text-slider .swiper');

        const photoSlider = new Swiper(photoSliderContainer, {
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
        });

        const textSlider = new Swiper(textSliderContainer, {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoHeight: true
        });

        textSlider.controller.control = photoSlider;
        photoSlider.controller.control = textSlider;
    });
}
