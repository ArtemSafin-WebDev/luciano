import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function homeAnimation() {
    const sections = Array.from(document.querySelectorAll('.home-section:not(.home-section--no-parallax)'));

    sections.forEach((section, sectionIndex) => {
        // if (sectionIndex == sections.length - 1) return;
        const bg = section.querySelector('.home-section__bg-parallax-layer');

        const bgWrapper = section.querySelector('.home-section__bg');

        // const content = section.querySelector('.home-section__inner-content');

        const fixedTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'bottom bottom',
                end: () => `+=${window.innerHeight * 1.5}`,
                scrub: true,
                pin: bgWrapper,
                pinSpacing: true,
                markers: false
            }
        });

        // const contentTl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: section,
        //         start: 'top bottom',
        //         end: 'bottom top',
        //         scrub: true
        //     }
        // });

        // contentTl.to(bgWrapper, {});

        if (sectionIndex !== 0) {
            const bgTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            bgTl.to(bg, {
                yPercent: -20,
                duration: 0.4
            });
        }
    });
}
