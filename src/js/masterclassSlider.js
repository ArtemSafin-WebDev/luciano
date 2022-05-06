import { Swiper, Thumbs, Navigation, Pagination } from 'swiper';

Swiper.use([Thumbs, Navigation, Pagination]);

export default function masterclassSlider() {
    const elements = Array.from(document.querySelectorAll('.js-masterclass-slider'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.masterclasses__slider-main .swiper');
        const thumbsContainer = element.querySelector('.masterclasses__slider-thumbs .swiper');
        const mainSliderOptions = {
            watchOverflow: true,
            thumbs: {},
            spaceBetween: 10,
            slidesPerView: 'auto',
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.masterclasses__slider-arrow--next'),
                prevEl: element.querySelector('.masterclasses__slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    spaceBetween: 20,
                    slidesPerView: 1
                }
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
