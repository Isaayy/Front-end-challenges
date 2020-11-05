'use strict';

const submit = document.querySelector('.btn');

const name = document.querySelector('.input-name');
const surname = document.querySelector('.input-surname');
const email = document.querySelector('.input-email');
const phone = document.querySelector('.input-phone');

const items = document.querySelectorAll('#input');


const isValid = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].value){
      let error = document.getElementById(`${array[i].className}-p`);
      const letters = /^[A-Za-z]+$/;
      let inputLength = array[i].value.length;
      switch (array[i].className){
        case 'input-name':
        case 'input-surname':   
          if(!letters.test(array[i].value)){ // invalid input
            error.textContent = 'Invalid data';
            error.classList.remove('p-hidden');
          }else
          error.classList.add('p-hidden');
          break;

        case 'input-email':
          if(!array[i].value.includes('.') || !array[i].value.includes('@') || !letters.test(array[i].value[0]) || !letters.test(array[i].value[inputLength-1])  ){ // check if includes @ or . and check if first/last index is a letter
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




submit.addEventListener('click',function() {

});


// if(items[i].value){
//   console.log(this.className);
//   alert('aa');
//   switch (className){
    
//     case 'input-name input':
//       alert('o tak');
//       break;
//     case 'input-surname input':
//       alert('oooo tak');
//       break;
//   }
// }