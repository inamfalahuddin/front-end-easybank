const navButton = document.querySelector('.nav__menu');
const navLinkks = document.querySelector('.nav__links');
const overlay   = document.querySelector('.nav__background__overlay');
const nav       = document.querySelector('nav');

navButton.addEventListener('click', () => {
    navLinkks.classList.toggle('open');
    navButton.classList.toggle('open');

    if(overlay.classList.contains('overlay-in')){
        overlay.classList.toggle('overlay-out');
    } else {
        overlay.classList.remove('overlay-out');
        overlay.classList.toggle('overlay-in');
    }
});


window.addEventListener('scroll', () => {
    nav.classList.toggle('shadow', window.scrollY > 10)
});