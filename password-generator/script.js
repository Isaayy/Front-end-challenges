'use strict';

const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copyBtn');
const length = document.querySelector('.pass-length');
const modal = document.querySelector('.modal');
const output = document.querySelector('.result');

// password components
const passwordComponets = new Map([
  ['lowerCase', ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']],
  ['upperCase', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']],
  ['numbers', ['1', '2', '3', '4', '5', '6', '7', '8', '9']],
  ['symbols', ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', ',', '.', '/', '?', '+', '=', '-', '_']],
]);

// determine which componets were selected
let componentsSelected;
const whichComponents = () => {
  componentsSelected = [];
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) componentsSelected.push(checkbox.dataset.type);
  });
};

// Generate password
let password;
let passwordLength;

const generatePassword = () => {
  passwordLength = length.value; // get length of the password provided by user
  password = ''; // reset password if generated again
  whichComponents();
  while (passwordLength) {
    // get random character
    let randomIndex = randomNumber(componentsSelected.length); // random index of componentsSelected array
    let componentName = componentsSelected[randomIndex]; // use random index to get random component name
    let componentLength = passwordComponets.get(componentName).length; // length of characters inside component

    // add that character to password
    password += passwordComponets.get(componentName)[randomNumber(componentLength)];

    passwordLength--;
  }
  // display final password
  output.textContent = password;
};

// Generate random number
const randomNumber = max => Math.floor(Math.random() * Math.floor(max));

let exclamationMarkToggle; // if input is invalid
generateBtn.addEventListener('click', () => {
  if (length.value) {
    generatePassword();
    clearInterval(exclamationMarkToggle);
    modal.classList.add('hidden');
  } else {
    if (!exclamationMarkToggle) {
      exclamationMarkToggle = setInterval(() => {
        modal.classList.toggle('hidden');
      }, 500);
    }
  }
});

// Copy password to clipboard
copyBtn.addEventListener('click', () => {
  const el = document.createElement('textarea');
  el.textContent = password;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
});
