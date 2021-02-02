'use strict';

const sendBtn = document.querySelector('.form__btn');
const inputs = document.querySelectorAll('input');

const invalidInput = el => {
  document.querySelector(`#${el.name}-message`).classList.add('u-show');
  el.classList.add('u-border-red');
  el.placeholder = '';
};

const validInput = el => {
  document.querySelector(`#${el.name}-message`).classList.remove('u-show');
  el.classList.remove('u-border-red');
  el.blur();
};

const isValid = e => {
  e.preventDefault();
  for (const input of inputs) {
    if (!input.value) invalidInput(input);
    else validInput(input);
    if (input.name === 'email') {
      const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      if (!re.test(input.value.toLowerCase())) {
        invalidInput(input);
        input.placeholder = 'email@example.com';
      }
    }
  }
};

sendBtn.addEventListener('click', isValid);
