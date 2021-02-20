'use strict';

const headerNav = document.querySelector('.header-nav');
const footerNav = document.querySelector('.footer-nav');

const changeOpacity = function (e) {
  if (e.target.classList.contains('link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.link');

    siblings.forEach(sibling => {
      if (sibling !== link) sibling.style.opacity = this;
    });
  }
};

footerNav.addEventListener('mouseover', changeOpacity.bind(0.5));
footerNav.addEventListener('mouseout', changeOpacity.bind(1));
headerNav.addEventListener('mouseover', changeOpacity.bind(0.5));
headerNav.addEventListener('mouseout', changeOpacity.bind(1));
