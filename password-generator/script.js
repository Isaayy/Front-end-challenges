'use strict';

const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copyBtn');

const length = document.querySelector('.pass-length');
const modal = document.querySelector('.modal');

const output = document.querySelector('.result');

// password components

const uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbols = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '[',
  ']',
  ',',
  '.',
  '/',
  '?',
  '+',
  '=',
  '-',
  '_',
];

let passwordComponents;

// Generate password

let password;
let passwordLength = 0;
let components;

const whichComponents = () => {
  passwordComponents = [];

  const includeLowercase = document.querySelector('.include-lowercase');
  const includeUppercase = document.querySelector('.include-uppercase');
  const includeNumbers = document.querySelector('.include-numbers');
  const includeSymbols = document.querySelector('.include-symbols');

  if (includeLowercase.checked) passwordComponents.push(lowercase);
  if (includeUppercase.checked) passwordComponents.push(uppercase);
  if (includeNumbers.checked) passwordComponents.push(numbers);
  if (includeSymbols.checked) passwordComponents.push(symbols);
};

const generatePassword = () => {
  passwordLength = length.value;
  password = '';
  whichComponents();
  while (passwordLength) {
    let randomIndex = randomNumber(passwordComponents.length);
    let componentLength = passwordComponents[randomIndex].length;
    password += passwordComponents[randomIndex][randomNumber(componentLength)];
    passwordLength--;
  }
  output.textContent = password;
};

const randomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let exclamationMarkToggle;

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

// todo copy to clipboard
