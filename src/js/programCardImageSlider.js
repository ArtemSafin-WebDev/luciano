import { Swiper, Thumbs, Navigation, Pagination } from 'swiper';

Swiper.use([Thumbs, Navigation, Pagination]);

export default function programCardImageSlider() {
    const elements = Array.from(document.querySelectorAll('.js-program-card-image-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        const links = Array.from(document.querySelectorAll('.program__slider-button'));

        const setActiveLink = index => {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        };

        const instance = new Swiper(container, {
            speed: 500,
            spaceBetween: 0,
            on: {
                init: swiper => {
                    setActiveLink(swiper.activeIndex);
                },
                slideChange: swiper => {
                    setActiveLink(swiper.activeIndex);
                }
            }
        });

        instance.init();

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();

                instance.slideTo(linkIndex);
            });
        });
    });
}
