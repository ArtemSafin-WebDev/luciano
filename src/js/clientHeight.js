import { debounce } from "lodash";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function clientHeight() {
    const setHeight = () => {
        const clientHeight = document.documentElement.clientHeight;

        console.log(clientHeight)

        document.documentElement.style.setProperty('--client-height', clientHeight + "px");

        ScrollTrigger.refresh();
    }

    setHeight();

    window.addEventListener('resize', debounce(setHeight, 400));
    
}