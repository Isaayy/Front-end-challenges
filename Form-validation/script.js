'use strict';

const inputs = document.querySelectorAll('.input');
const formBtn = document.querySelector('.btn');

const validators = {
  name: /^[a-z]+$/i,
  surname: /^[a-z]+$/i,
  message: /^[a-z]+$/i,
  email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  phone: /^\d{5,}$/,
};

// Check if input is valid
const isValid = input => {
  return validators[input.name].test(input.value);
};

// Display message - create and append invalid message
const displayErrorMessage = el => {
  const message = `<p class="p-hidden">Invalid ${el.name}</p>`;
  const parent = el.closest('div');
  parent.insertAdjacentHTML('beforeend', message);

  el.nextElementSibling.classList.toggle('p-hidden', isValid(el));
};

for (const input of inputs) {
  input.addEventListener('blur', () => {
    // Change border and display message
    input.classList.toggle('input--invalid', !isValid(input));
    displayErrorMessage(input);
  });
}

formBtn.addEventListener('click', e => {
  e.preventDefault();
});
