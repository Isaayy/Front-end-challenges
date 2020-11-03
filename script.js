'use strict';

const hamburger = document.querySelector('.hamburger__outline');
const bar = document.querySelector('.hamburger__bar');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger--active');
    
    if (bar.classList.contains('hamburger__bar--hidden')){
        setTimeout(function(){
            bar.classList.remove('hamburger__bar--hidden'); }, 100);
    }
    else {
        bar.classList.add('hamburger__bar--hidden');
    }
});

