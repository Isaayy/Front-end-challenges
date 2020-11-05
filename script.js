'use strict';

const submit = document.querySelector('.btn');
const name = document.querySelector('.input-name');
const surname = document.querySelector('.input-surname');
const email = document.querySelector('.input-email');
const phone = document.querySelector('.input-phone');
const items = document.querySelectorAll('#input');


const isValid = function(item) {
  for (let i = 0; i < item.length; i++) {
    if (item[i].value){ // Check if contains value

      let error = document.getElementById(`${item[i].className}-p`);
      const letters = /^[A-Za-z]+$/;
      const numbers = /^\d+$/;
      let inputLength = item[i].value.length;

      switch (item[i].className){
        case 'input-name':
        case 'input-surname':   
          if(!letters.test(item[i].value)){ // Invalid input 
            error.textContent = 'Invalid data';
            error.classList.remove('p-hidden');
          }else
          error.classList.add('p-hidden');
          break;

        case 'input-email':
          if(!item[i].value.includes('.') || !item[i].value.includes('@') || !letters.test(item[i].value[inputLength-1])  ){ // check if includes (@ or .) and check if the last index is a letter
            error.textContent = 'Invalid data';
            error.classList.remove('p-hidden');
          }else
          error.classList.add('p-hidden');
          break;
        case 'input-phone':
          if(!numbers.test(item[i].value) ||  inputLength<5){  // Invalid input 
            error.textContent = 'Invalid data';
            error.classList.remove('p-hidden');
          }else
          error.classList.add('p-hidden');
          break;
      }

    }
  }
}

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click',function(){
      // Check if the input is valid
      isValid(items);
    });
}
