import { primaryInput } from 'detect-it';

export default function fitnessProgram() {
    if (primaryInput === 'touch') return;
    const elements = Array.from(document.querySelectorAll('.js-fitness-program'));

    elements.forEach(element => {
        const images = Array.from(element.querySelectorAll('.fitness-program__image'));
        const links = Array.from(element.querySelectorAll('.fitness-program__link'));
        const list = element.querySelector('.fitness-program__list')

        const setActiveLink = index => {
            images.forEach(image => image.classList.remove('active'));
            links.forEach(link => link.classList.remove('active'));
            links.forEach(link => link.classList.remove('inactive'));

            if (typeof index !== 'undefined') {

                links.forEach((otherLink, otherLinkIndex) => {
                    if (otherLinkIndex !== index) {
                        otherLink.classList.add('inactive');
                    }
                })

                images[index].classList.add('active');
                links[index].classList.add('active');
            }
        };

        links.forEach((link, linkIndex) => {

            list.addEventListener('pointerenter', () => {
                element.classList.add('hovered');
            })
            list.addEventListener('pointerleave', () => {
                element.classList.remove('hovered');
            })
            link.addEventListener('pointerenter', () => {
                setActiveLink(linkIndex);
            })
            link.addEventListener('pointerleave', () => {
                setActiveLink();
            })
            link.addEventListener('click', (event) => {
                event.preventDefault();
                setActiveLink(linkIndex);
            })
        })
    });
}
