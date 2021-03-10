'use strict';

const hamburgerMenu = document.querySelector('.header__hamburger-outline');
const nav = document.querySelector('.header__links');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.children[0].classList.toggle('rotate');
  nav.classList.toggle('slide-in');
});
