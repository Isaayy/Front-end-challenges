'use strict';

const cta = document.querySelector('.cta');
const header = document.querySelector('.header__heading');
const description = document.querySelector('.description');
const input = document.querySelector('.menu__input');
const guesses = document.querySelector('#letters-used');
const guess = document.querySelector('.menu__btn');

// ###############################
// change layout
cta.addEventListener('click', () => {
  document.querySelector('main').classList.add('started');
  cta.style.display = 'none';
});

// ###############################
// keyword generator

let keyword;
let lettersLeft;
const keywordBox = document.querySelector('.keyword');

const generateKeyword = () => {
  // TODO in future add more keywords in a better way
  const keywords = [
    'ability',
    'able',
    'about',
    'above',
    'accept',
    'according',
    'account',
    'across',
    'act',
    'action',
    'activity',
    'actually',
  ];

  const randomNumber = Math.floor(Math.random() * keywords.length);

  keyword = keywords[randomNumber];
  lettersLeft = keyword.length;

  for (let i = 0; i < keyword.length; i++) {
    keywordBox.innerHTML += `<div class=keyword__letter-${i}></div>`;
  }
};
generateKeyword();

// ###############################
// game starts

let lifes = 5;
let game = true;

// ###############################
// game ends

const endGame = (winOrLose) => {
  input.classList.toggle('hidden');
  input.nextElementSibling.classList.toggle('hidden');

  if (winOrLose === 'win') {
    input.nextElementSibling.textContent = 'You won';
    input.nextElementSibling.style.color = 'green';
  } else {
    input.nextElementSibling.textContent = 'You lost';
    input.nextElementSibling.style.color = 'red';
  }

  guess.textContent = 'Play again';
  game = false;
};

const resetGame = () => {
  guess.textContent = 'Try!';
  game = true;
  input.value = '';
  input.classList.toggle('hidden');
  input.nextElementSibling.classList.toggle('hidden');
  lifes = 5;
  for (let i = 0; i < lifes; i++) {
    let life = document.querySelector(`.icon-${i + 1}`);
    life.style.fill = '#8F0045';
  }
  keywordBox.textContent = '';
  guesses.textContent = '';
  generateKeyword();
};

// ###############################
// index finder

const allIndexes = (letter) => {
  // for keywords with more than 1 letter ex. apple
  let arr = [];
  for (let i = 0; i < keyword.length; i++) {
    if (keyword[i] === letter) {
      arr.push(i);
    }
  }
  return arr;
};

// ###############################
// game

let usedLetters = [];

guess.addEventListener('click', () => {
  if (!game) {
    resetGame();
    return;
  }

  if (usedLetters.includes(input.value)) {
    alert('You already tried this letter');
    return;
  }

  if (keyword.includes(input.value)) {
    const indexArray = allIndexes(input.value);
    for (let i = 0; i < indexArray.length; i++) {
      document.querySelector(`.keyword__letter-${indexArray[i]}`).textContent =
        input.value;
    }
    guesses.textContent += ` ${input.value},`;
    usedLetters.push(input.value);
    input.value = '';
    lettersLeft -= indexArray.length;

    if (lettersLeft === 0) {
      // Winning game
      endGame('win');
    }
  } else {
    lifes--;
    guesses.textContent += ` ${input.value},`;
    if (lifes === 0) {
      // Losing game
      endGame('lose');
    }
    let life = document.querySelector(`.icon-${lifes + 1}`);
    life.style.fill = '#333333';
  }
});

// Before :

// Validation in JS

// const isInputValid = (str) => {
//     const lettersOnly = /^[a-z]+$/i;
//     return lettersOnly.test(str);
// }

// const isInputValid = (str) => /^[a-z]+$/i.test(str);

// guess.addEventListener('click',() =>{
//     if (isInputValid(input.value) && game && !usedLetters.includes(input.value)){
//         if (input.value.length <= 1){ // single letter input
//             if (keyword.includes(input.value)){
//                 const indexArray = allIndexes(input.value);
//                 for (let i = 0; i < indexArray.length; i++) {
//                     document.querySelector(`.keyword__letter-${indexArray[i]}`).textContent = input.value;
//                 }
//                 usedLetters.push(input.value);
//                 input.value = '';
//                 lettersLeft-=indexArray.length;

//                 if (lettersLeft == 0){ // Winning game
//                     endGame('win');
//                 }
//             }
//             else{
//                 lifes--;
//                 if (lifes == 0 ){ // Losing game
//                     endGame('lose');
//                 }
//                 let life = document.querySelector(`.icon-${lifes+1}`);
//                 life.style.fill = "#333333";
//             }
//         }
//         else { // word input
//             if (input.value == keyword){
//                 for (let i = 0 ; i < keyword.length ; i++){
//                     document.querySelector(`.keyword__letter-${i}`).textContent = keyword[i];
//                 }
//                 endGame('win');
//             }
//             else {
//                 lifes--;
//                 let life = document.querySelector(`.icon-${lifes+1}`);
//                 life.style.fill = "#333333";
//             }
//         }
//     }
//     else if (!game) { // Play again
//         guess.textContent = 'Try!'
//         game = true;
//         input.value = '';
//         input.classList.toggle('hidden');
//         input.nextElementSibling.classList.toggle('hidden');
//         lifes = 5 ;
//         for (let i = 0; i < lifes; i++) {
//             let life = document.querySelector(`.icon-${i+1}`);
//             life.style.fill = "#8F0045";
//         }
//         keywordBox.textContent = '';
//         generateKeyword();
//     }
// })
