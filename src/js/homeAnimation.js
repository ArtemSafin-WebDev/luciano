import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function homeAnimation() {
    const sections = Array.from(document.querySelectorAll('.home-section'));

    sections.forEach(section => {
        const bg = section.querySelector('.home-section__bg-parallax-layer');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${window.innerHeight * 2}`,
                scrub: true,
                pin: false,
                pinSpacing: false,
                markers: false
            }
        });

        tl.to(bg, {
            // y: 400,
            y: () => window.innerHeight * 0.3,
            duration: 0.4
        });
    });
}
