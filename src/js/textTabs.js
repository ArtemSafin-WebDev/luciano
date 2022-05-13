import { IS_MOBILE } from "./utils";

export default function textTabs() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-text-tabs'));

    elements.forEach(element => {

        element.classList.remove('js-tabs');
        const links = Array.from(element.querySelectorAll('.text-tabs__btn'));
        const items = Array.from(element.querySelectorAll('.text-tabs__item'));

        let itemsParent = null;

        if (items.length) {
            itemsParent = items[0].parentElement;
        }

        links.forEach((link, linkIndex) => {
            link.classList.remove('js-tabs-btn');
            link.classList.add('js-accordion-btn');
            link.parentElement.classList.add('js-accordion');
            items[linkIndex].classList.remove('js-tabs-item');
            items[linkIndex].classList.add('js-accordion-content');
            link.parentElement.appendChild(items[linkIndex]);
        });

        if (itemsParent) {
            itemsParent.remove();
        }


    })
}