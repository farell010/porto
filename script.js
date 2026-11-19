
// =================================
// CRISTIAN FAREL PORTFOLIO
// JAVASCRIPT
// =================================


// HAMBURGER MENU

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav-link');


menuToggle.addEventListener('click', () => {

    const isOpen =
        menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute(
        'aria-expanded',
        String(!isOpen)
    );

    nav.classList.toggle('open', !isOpen);

});


// TUTUP MENU SETELAH LINK DIKLIK

navLinks.forEach((link) => {

    link.addEventListener('click', () => {

        nav.classList.remove('open');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

    });

});


// NAVIGASI AKTIF BERDASARKAN SECTION

const sections = document.querySelectorAll(
    'main section[id]'
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            navLinks.forEach((link) => {

                link.classList.toggle(
                    'active',
                    link.getAttribute('href') ===
                    `#${entry.target.id}`
                );

            });

        });

    },
    {
        rootMargin: '-35% 0px -55% 0px'
    }
);


sections.forEach((section) => {

    observer.observe(section);

});


// TAHUN FOOTER OTOMATIS

document.querySelector('#year').textContent =
    new Date().getFullYear();
