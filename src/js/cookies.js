export default function cookies() {
    const cookies = document.querySelector('.cookies');
    const closeBtn = document.querySelector('.cookies__close');

    if (cookies) {
        if (localStorage.getItem('cookies-accepted') !== 'yes') {
            cookies.classList.add('shown');
        }
        closeBtn.addEventListener('click', event => {
            event.preventDefault();
            cookies.classList.remove('shown');
            localStorage.setItem('cookies-accepted', 'yes');
        });
    }
}