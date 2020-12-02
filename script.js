'use strict';

const hamburgerMenu = document.querySelector('.header__hamburger-outline');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.children[0].classList.toggle('rotate');
});
