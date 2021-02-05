'use strict';

const icon = document.querySelector('.icon');
const modal = document.querySelector('.modal');

icon.addEventListener('mouseover', () => {
  modal.classList.add('u-show');
});

icon.addEventListener('mouseout', () => {
  modal.classList.remove('u-show');
});
