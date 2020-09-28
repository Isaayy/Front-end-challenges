let nav_box  = document.getElementById('header__nav-box');
let nav = document.getElementById('header__nav');
let nav_outside = document.getElementById('header__nav-outside');

nav_outside.addEventListener('click',function(){
    nav_box.classList.toggle('header--active');
    nav.classList.toggle('header--transparent');
});


let links = document.getElementsByClassName('header__link');

for ( let i = 0 ; i < links.length ; i++){

    links[i].addEventListener('click',function(){
        nav_box.classList.toggle('header--active');
    });
};



new Glider(document.querySelector('.glider'),{
    slidesToShow: 1.2,
    draggable : true,
    duration: 1.5,
    arrows:{
        prev: '.glider-prev',
        next : '.glider-next'
    },

    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 1000,
          settings: {
            slidesToShow: 2.5,
            draggable : false
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
            } 
        }

    ]
});
