'use strict';

const cta = document.querySelector('.cta');
const header = document.querySelector('.header__heading');
const description = document.querySelector('.description');
const input = document.querySelector('.menu__input');
const guesses = document.querySelector('#letters-used');
const guess = document.querySelector('.menu__btn');

// ###############################
// change layout when user press START button

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
  // Array of keywords
  // const keywords = ['ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 'act', 'action', 'activity', 'actually'];
  const keywords = ['acctually'];

  // Get random number from 0 - keywords length
  const randomNumber = Math.floor(Math.random() * keywords.length);

  // Get random keyword
  keyword = keywords[randomNumber];
  lettersLeft = keyword.length;

  // Display letters( as _ ) of keyword
  for (let i = 0; i < keyword.length; i++) keywordBox.insertAdjacentHTML('beforeend', `<div class=keyword__letter-${i}></div>`);
};
generateKeyword();

// ###############################
// starting conditions

let lifes = 5;
let game = true;

// ###############################
// index finder - returns all indexes of inputed - letter for like apple

const allIndexes = letter => {
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

const gameFunctionality = () => {
  // If empty input
  if (!input.value) return;

  // Check if user is able to play
  if (!game) {
    resetGame();
    return;
  }

  // Check if inputed letter wasn't guessed before
  if (usedLetters.includes(input.value)) {
    alert('You already tried this letter');
    input.value = '';
    return;
  }

  // Correct guess
  if (keyword.includes(input.value)) {
    // Get all indexes of guessed letter
    const indexesOfGuessedLetter = allIndexes(input.value);

    // Display guessed letter
    for (const index of indexesOfGuessedLetter) document.querySelector(`.keyword__letter-${index}`).textContent = input.value;

    lettersLeft -= indexesOfGuessedLetter.length;

    // Winning game
    if (lettersLeft === 0) {
      endGame('You won');
    }
  }

  // Incorrect guess
  else {
    lifes--;

    if (lifes === 0) {
      // Losing game
      endGame('You lost');
    }
    let life = document.querySelector(`.icon-${lifes + 1}`);
    life.style.fill = '#333333';
  }

  // Display and save guessed letter in previous guesses box
  guesses.textContent += ` ${input.value},`;
  usedLetters.push(input.value);

  // Clear input
  input.value = '';
};

guess.addEventListener('click', gameFunctionality);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') gameFunctionality();
});

// ###############################
// end game

const endGame = message => {
  input.classList.toggle('hidden');
  input.nextElementSibling.classList.toggle('hidden');

  input.nextElementSibling.textContent = message;
  input.nextElementSibling.style.color = message === 'You won' ? 'green' : 'red';

  guess.textContent = 'Play again';
  game = false;
};

// ###############################
// reset game

const resetGame = () => {
  guess.textContent = 'Try!';
  game = true;
  input.value = '';
  usedLetters = [];
  input.classList.toggle('hidden');
  input.nextElementSibling.classList.toggle('hidden');
  lifes = 5;
  document.querySelectorAll('.header__icon').forEach(icon => (icon.style.fill = '#8F0045'));
  keywordBox.textContent = '';
  guesses.textContent = 'Previous guesses: ';
  generateKeyword();
};
