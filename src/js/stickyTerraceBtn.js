import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function stickyTerraceBtn() {
    const elements = Array.from(document.querySelectorAll('.js-sticky-terrace-btn'));

    elements.forEach(element => {
        ScrollTrigger.matchMedia({
            '(min-width: 641px)': function() {
                const parentSection = element.closest('.terrace');
                ScrollTrigger.create({
                    trigger: parentSection,
                    start: 'bottom bottom',
                    end: 99999999,
                    pin: element,
                    pinSpacing: false,
                    markers: false
                });
            }
        });
    });
}
