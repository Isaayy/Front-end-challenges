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

const text = document.querySelectorAll(".features__description");

// const mediaQueries = {
//     tablet : '(max-width: 768px)',
//     mobile : '(max-width: 576px)'
// }

const applyMedia = x => {
    if(x.matches){
        for(let item of text)
            item.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, massa orci viverra aliquet egestas cras. Lectus urna nulla dui morbi tortor, egestas a aliquam.';
    }
    else {
        for(let item of text)
        item.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, massa orci viverra aliquet egestas cras. Lectus urna nulla dui morbi tortor, egestas a aliquam. Sed lectus sodales eget vitae potenti non adipiscing malesuada nulla. Integer quam habitant tellus sed eget mauris in libero.';
    }
}

let media = window.matchMedia('(max-width: 768px)');
applyMedia(media ) // Call listener function at run time
media .addListener(applyMedia) // Attach listener function on state changes






