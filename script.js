'use strict';

const hamburger = document.querySelector('.hamburger__outline');
const bar = document.querySelector('.hamburger__bar');
const nav = document.querySelector('.header__menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('header__menu--moveIn');
    
    if (bar.classList.contains('hamburger__bar--hidden')){ // on click where X ( bards crossed)
        setTimeout(function(){
            bar.classList.remove('hamburger__bar--hidden'); }, 100);
    }
    else {
        bar.classList.add('hamburger__bar--hidden'); // on first click
    }
});

