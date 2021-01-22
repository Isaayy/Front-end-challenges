'use strict';

const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copyBtn');

const length = document.querySelector('.pass-length');
const modal = document.querySelector('.modal');

const output = document.querySelector('.result');

// password components
const passwordComponets = new Map([
  ['upperCase', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']],
  ['lowerCase', ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']],
  ['numbers', ['1', '2', '3', '4', '5', '6', '7', '8', '9']],
  ['symbols', ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', ',', '.', '/', '?', '+', '=', '-', '_']],
]);

// Generate password
let password;
let passwordLength = 0;

let componentsSelected;
const whichComponents = () => {
  componentsSelected = [];

  const includeLowercase = document.querySelector('.include-lowercase');
  const includeUppercase = document.querySelector('.include-uppercase');
  const includeNumbers = document.querySelector('.include-numbers');
  const includeSymbols = document.querySelector('.include-symbols');

  if (includeLowercase.checked) componentsSelected.push('lowerCase');
  if (includeUppercase.checked) componentsSelected.push('upperCase');
  if (includeNumbers.checked) componentsSelected.push('numbers');
  if (includeSymbols.checked) componentsSelected.push('symbols');
};

const generatePassword = () => {
  passwordLength = length.value;
  password = '';
  whichComponents();
  while (passwordLength) {
    // get random character
    let randomIndex = randomNumber(componentsSelected.length); // random index of componentsSelected array
    let componentName = componentsSelected[randomIndex]; // use random index to get random component name
    let componentLength = passwordComponets.get(componentName).length; // length of characters inside component

    password += passwordComponets.get(componentName)[randomNumber(componentLength)];
    passwordLength--;
  }
  output.textContent = password;
};

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

copyBtn.addEventListener('click', () => {
  const el = document.createElement('textarea');
  el.textContent = password;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
});
