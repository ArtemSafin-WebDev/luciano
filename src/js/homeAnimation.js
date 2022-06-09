import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function homeAnimation() {

    // return;
    
    
    const sections = Array.from(document.querySelectorAll('.home-section:not(.home-section--no-parallax)'));

    sections.forEach((section, sectionIndex) => {
       
       
        const bg = section.querySelector('.home-section__bg-parallax-layer');

        const bgWrapper = section.querySelector('.home-section__bg');


        const bgTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        bgTl.to(bg, {
            y: () => section.offsetHeight / 2,
            duration: 0.4,
            ease: 'none'
        });

        
    });
}
