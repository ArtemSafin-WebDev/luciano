import Choices from 'choices.js';

export default function customSelects() {
    function initializeSelects() {
        const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));

        customSelects.forEach((select) => {
            new Choices(select, {
                searchEnabled: false,
                itemSelectText: '',
                shouldSort: false,
                position: select.hasAttribute('data-position') ? select.getAttribute('data-position') : 'top'
            });
        });
    }

    initializeSelects();

    window.initializeSelects = initializeSelects;
    
}
