const header = document.querySelector('[data-header]');
const burger = document.querySelector('[data-burger]');
const phoneMenu = document.querySelector('[data-phone-menu]');
const phoneLinks = document.querySelectorAll('[data-phone-link]');

if (window.innerWidth <= 768) {
    header.classList.add("scrolled");
}
window.addEventListener('scroll', () => setScrolledClassOnHeader(header));
burger.addEventListener('click', () => toggleBurgerMenu(burger));
/** À changer car fonction dirigeant vers l'ancre demandé par la nav */
phoneLinks.forEach(link => {
    link.addEventListener('click', () => toggleBurgerMenu(burger));
});

/**
 * Set the class 'scrolled' on the header
 * @param {HTMLElement} header 
 */
function setScrolledClassOnHeader(header) {
    scrollClass = 'scrolled';
    if (window.scrollY > 0) {
        header.classList.add(scrollClass);
    } else {
        header.classList.remove(scrollClass);
    }
}

/**
 * Toggle the Burger menu (Close/Open)
 * @param {HTMLElement} burger 
 */
function toggleBurgerMenu(burger) {
    burger.classList.toggle('active');
    phoneMenu.classList.toggle('active');
}
