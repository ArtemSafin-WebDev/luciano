import { Swiper, Navigation, EffectFade } from 'swiper';
import { sliceIntoChunks } from './utils';

Swiper.use([Navigation, EffectFade]);

import { IS_MOBILE } from './utils';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gallerySlider() {
    const elements = Array.from(document.querySelectorAll('.js-gallery-slider'));

    elements.forEach(element => {
        const cards = Array.from(element.querySelectorAll('.gallery__slider-card'));

        const wrapper = element.querySelector('.gallery__slider-inner');

        wrapper.classList.add('initialized');

        let sliderContainer = element.querySelector('.swiper');

        wrapper.innerHTML = `<div class="swiper">
                <div class="swiper-wrapper"> 

                </div>
            </div>`;

        const slidesWrapper = wrapper.querySelector('.swiper-wrapper');
        sliderContainer = wrapper.querySelector('.swiper');

        let preparedCards = [];

        if (!IS_MOBILE) {
            preparedCards = sliceIntoChunks(cards, 4);
        } else {
            preparedCards = cards.map(card => [card]);
        }

        const slides = preparedCards.map(group => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            group.forEach(groupItem => {
                slide.appendChild(groupItem);
            });

            return slide;
        });

        slidesWrapper.append(...slides);

        ScrollTrigger.refresh();

        new Swiper(sliderContainer, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 10,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.gallery__slider-arrow--next'),
                prevEl: element.querySelector('.gallery__slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    spaceBetween: 20
                }
            }
        });
    });
}
