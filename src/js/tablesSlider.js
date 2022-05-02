import { Swiper, Thumbs, Navigation, Pagination } from 'swiper';

Swiper.use([Thumbs, Navigation, Pagination]);

export default function tablesSlider() {
    const elements = Array.from(document.querySelectorAll('.js-tables-slider'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.tables__slider-main .swiper-container');
        const thumbsContainer = element.querySelector('.tables__slider-thumbs .swiper-container');
        const mainSliderOptions = {
            watchOverflow: true,
            spaceBetween: 0,
            thumbs: {},
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.tables__slider-arrow--next'),
                prevEl: element.querySelector('.tables__slider-arrow--prev')
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            threshold: 10,
            speed: 700,
            slideToClickedSlide: true,
            spaceBetween: 20,
            centerInsufficientSlides: true
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
