'use strict';

const hamburger = document.querySelector('.hamburger__box');
const nav = document.querySelector('.header__list');
const links = document.querySelectorAll('.header__link');

const toggleNav = () => {
  hamburger.firstElementChild.classList.toggle('hamburger__bar--active');
  nav.classList.toggle('header__list--active');
};

hamburger.addEventListener('click', toggleNav);
links.forEach(link => link.addEventListener('click', toggleNav));
