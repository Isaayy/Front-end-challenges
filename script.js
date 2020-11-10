'use strict';

const cta = document.querySelector('.cta');
const header = document.querySelector('h1');
const description = document.querySelector('.description');
cta.addEventListener('click', () =>{
    // change layout
    description.style.transition = 'all 1s';
    description.style.opacity = "0";
    
    header.style.transition = 'all 1s';
    header.style.transform="translateX(-200%)";

})