'use strict';

const cta = document.querySelector('.cta');
const header = document.querySelector('.header__heading');
const description = document.querySelector('.description');
const lifes = document.querySelector('.header__lifes');
const input = document.querySelector('.menu__input');
const guess = document.querySelector('.menu__btn')

cta.addEventListener('click', () =>{
    // change layout
    description.style.transition = 'all 1s';
    description.style.opacity = "0";
    
    header.style.transition = 'all 1s';
    header.style.transform="translateX(-150%)";

    lifes.style.opacity = "1";
    input.style.opacity = "1";
    guess.style.opacity = "1";

    cta.style.display = 'none';
})