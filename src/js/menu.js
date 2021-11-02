import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import gsap from 'gsap';

export default function menu() {
    const burger = document.querySelector('.page-header__burger');
    const menu = document.querySelector('.menu');
    const logo = document.querySelector('.page-header__logo');

    window.menuOpen = false;

    if (!burger || !menu) return;

    const openMenu = () => {
        if (window.menuOpen) return;
        document.body.classList.add('mobile-menu-open');
        disableBodyScroll(menu, {
            reserveScrollBarGap: true
        });
        window.menuOpen = true;

        gsap.to(logo, {
            x: (window.innerWidth / 4) * -1,
            duration: 0.7
        });
    };
    const closeMenu = () => {
        if (!window.menuOpen) return;
        document.body.classList.remove('mobile-menu-open');
        clearAllBodyScrollLocks();
        window.menuOpen = false;

        gsap.to(logo, {
            x: 0,
            duration: 0.4
        });
    };

    window.openMenu = openMenu;
    window.closeMenu = closeMenu;

    burger.addEventListener('click', event => {
        event.preventDefault();
        if (!menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    menu.addEventListener('click', event => {
        if (event.target === menu) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.menuOpen) {
            gsap.set(logo, {
                x: (window.innerWidth / 4) * -1
            });
        }
    });
}
