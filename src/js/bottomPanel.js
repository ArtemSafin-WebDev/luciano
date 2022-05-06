import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function bottomPanel() {
    const bottomPanel = document.querySelector('.js-bottom-panel');
    const landingPosition = document.querySelector('.bottom-panel-landing-position')

    if (!bottomPanel || !landingPosition) {
        document.body.classList.add('no-bottom-menu');
        return;
    }

    ScrollTrigger.create({
        trigger: bottomPanel,
        start: 'bottom bottom',
        endTrigger: landingPosition,
        end: 'bottom bottom',
        markers: false,
        pin: true,
        pinSpacing: false,
        toggleClass: 'sticky',
        anticipatePin: 1,
        onLeave: () => {
            document.body.classList.add('fixed-panel-docked');
        },
        onEnterBack: () => {
            document.body.classList.remove('fixed-panel-docked');
        }
    });
}
