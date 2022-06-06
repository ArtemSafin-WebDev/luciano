import { Swiper, Thumbs, Navigation, Pagination, Controller, EffectFade } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Thumbs, Navigation, Pagination, Controller, EffectFade]);

export default function schedule() {
    const dayOfWeekDigit = new Date().getDay();

    const dayOfWeekIndexes = [
        {
            dayOfWeekDigit: 1,
            index: 0
        },
        {
            dayOfWeekDigit: 2,
            index: 1
        },
        {
            dayOfWeekDigit: 3,
            index: 2
        },
        {
            dayOfWeekDigit: 4,
            index: 3
        },
        {
            dayOfWeekDigit: 5,
            index: 4
        },
        {
            dayOfWeekDigit: 6,
            index: 5
        },
        {
            dayOfWeekDigit: 0,
            index: 6
        }
    ];

    const dayIndex = dayOfWeekIndexes.find(item => item.dayOfWeekDigit === dayOfWeekDigit).index;

    const elements = Array.from(document.querySelectorAll('.schedule__block'));

    elements.forEach(element => {
        const days = Array.from(element.querySelectorAll('.schedule__block-day'));

        days[dayIndex].classList.add('current');

        const todayTrainings = Array.from(element.querySelectorAll(`.schedule__block-trainings .swiper-slide:nth-child(${dayIndex + 1})`));

        todayTrainings.forEach(training => {
            training.classList.add('current');
        });


        element.style.setProperty('--day', dayIndex);

        if (!IS_MOBILE) return;
        const daysContainer = element.querySelector('.schedule__block-days .swiper');

        const daysSlider = new Swiper(daysContainer, {
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.schedule__block-days-arrow--next'),
                prevEl: element.querySelector('.schedule__block-days-arrow--prev')
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });

        const trainingsContainers = Array.from(element.querySelectorAll('.schedule__block-trainings .swiper'));

        let trainingsSliders = [];

        trainingsContainers.forEach(container => {
            const trainingsSlider = new Swiper(container, {
                speed: 500,
                // allowTouchMove: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            });
            trainingsSliders.push(trainingsSlider);
        });

        daysSlider.controller.control = trainingsSliders;

        trainingsSliders.forEach(slider => {
            slider.controller.control = daysSlider;
        })

        daysSlider.slideTo(dayIndex);
    });
}
