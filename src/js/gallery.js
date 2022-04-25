import { Swiper, Navigation, EffectFade } from 'swiper';
import { sliceIntoChunks } from './utils';

Swiper.use([Navigation, EffectFade]);

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function gallerySlider() {
    const elements = Array.from(document.querySelectorAll('.js-gallery-slider'));

    elements.forEach(element => {
        const cards = Array.from(element.querySelectorAll('.gallery__slider-card'));

        const wrapper = element.querySelector('.gallery__slider-inner');

        wrapper.classList.add('initialized');

        wrapper.innerHTML = `<div class="swiper-container">
            <div class="swiper-wrapper"> 

            </div>
        </div>`;

        const slidesWrapper = wrapper.querySelector('.swiper-wrapper');
        const sliderContainer = wrapper.querySelector('.swiper-container');

        const cardsSplitByFour = sliceIntoChunks(cards, 4);

        const slides = cardsSplitByFour.map(group => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            group.forEach(groupItem => {
                slide.appendChild(groupItem);
            });

            return slide;
        });

        slidesWrapper.append(...slides);

        new Swiper(sliderContainer, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 20,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.gallery__slider-arrow--next'),
                prevEl: element.querySelector('.gallery__slider-arrow--prev')
            }
        });

        ScrollTrigger.refresh();


    });
}
