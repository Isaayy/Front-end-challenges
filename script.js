let nav = document.getElementById('header__menu');

let bar = document.getElementById('hamburger-bar');

nav.addEventListener('click',function(){
    nav.classList.toggle('header--active');
});


let list = document.getElementsByClassName('nav-link');

for (let i = 0 ; i < list.length ; i++){
    list[i].addEventListener('click',function(){
        nav.classList.toggle('header--active');
    })
}

