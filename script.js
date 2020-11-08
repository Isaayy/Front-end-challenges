'use strict';

const inputs = document.querySelectorAll('.input');

const validators = {
  name: /^[a-z]+$/i,
  surname: /^[a-z]+$/i,
  email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  phone: /^\d{5,}$/,
};

for (const input of inputs){
  input.addEventListener('blur',(event) => {
    isValid(input);
  });
}

const isValid = input => {
  console.log(validators[input.name]);
  const isBad = validators[input.name].test(input.value);
  input.nextElementSibling.classList.toggle('p-hidden', isBad);
}
  

// OLD VERSION

// const submit = document.querySelector('.btn');
// const name = document.querySelector('.input-name');
// const surname = document.querySelector('.input-surname');
// const email = document.querySelector('.input-email');
// const phone = document.querySelector('.input-phone');
// const items = document.querySelectorAll('#input');


// const isValid = function(item) {
//   for (let i = 0; i < item.length; i++) {
//     if (item[i].value){ // Check if contains value

//       let error = document.getElementById(`${item[i].className}-p`);
//       const letters = /^[A-Za-z]+$/;
//       const numbers = /^\d+$/;
//       let inputLength = item[i].value.length;

//       switch (item[i].className){
//         case 'input-name':
//         case 'input-surname':   
//           if(!letters.test(item[i].value)){ // Invalid input 
//             error.textContent = 'Invalid data';
//             error.classList.remove('p-hidden');
//           }else
//           error.classList.add('p-hidden');
//           break;

//         case 'input-email':
//           if(!item[i].value.includes('.') || !item[i].value.includes('@') || !letters.test(item[i].value[inputLength-1])  ){ // check if includes (@ or .) and check if the last index is a letter
//             error.textContent = 'Invalid data';
//             error.classList.remove('p-hidden');
//           }else
//           error.classList.add('p-hidden');
//           break;
//         case 'input-phone':
//           if(!numbers.test(item[i].value) ||  inputLength<5){  // Invalid input 
//             error.textContent = 'Invalid data';
//             error.classList.remove('p-hidden');
//           }else
//           error.classList.add('p-hidden');
//           break;
//       }

//     }
//   }
// }

// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener('click',function(){
//       // Check if the input is valid
//       isValid(items);
//     });
// }
