'use strict';

const block = document.querySelector('.words');
const inputBox = document.querySelector('.input');

// ######################################################################
// Global variables

let words; // array of generated words
let wordsBlock = [];
let currentWord;
let characters = 0; // characters you typed in used to calculate Gross WMP
let errors = 0; // words you incorrectly typed used to calculate Net WPM
let correct = 0;
const wordsInBlock = 25;
let secondsLeft = 59;

// Array of keywords used in game
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
  'behavior',
  'behind',
  'believe',
  'benefit',
  'best',
  'better',
  'between',
  'beyond',
  'big',
  'bill',
  'billion',
  'bit',
  'black',
  'blood',
  'blue',
  'board',
  'body',
  'book',
  'born',
  'both',
  'box',
  'boy',
  'break',
  'case',
  'catch',
  'cause',
  'cell',
  'center',
  'central',
  'century',
  'certain',
  'certainly',
  'chair',
  'challenge',
  'chance',
  'change',
  'character',
  'charge',
  'check',
  'child',
  'choice',
  'choose',
  'church',
  'citizen',
  'city',
  'civil',
  'claim',
  'class',
  'clear',
  'clearly',
  'close',
  'coach',
  'cold',
  'collection',
  'college',
  'color',
  'come',
  'commercial',
  'common',
  'community',
  'eight',
  'either',
  'election',
  'else',
  'employee',
  'end',
  'energy',
  'enjoy',
  'enough',
  'enter',
  'entire',
  'environment',
  'environmental',
  'especially',
  'establish',
  'even',
  'evening',
  'event',
  'ever',
  'every',
  'everybody',
  'everyone',
  'everything',
  'evidence',
  'exactly',
  'example',
  'executive',
  'exist',
  'expect',
  'experience',
  'expert',
  'explain',
  'eye',
  'face',
  'fact',
  'factor',
  'fail',
  'fall',
  'family',
  'far',
  'fast',
  'father',
  'fear',
  'federal',
  'feel',
  'feeling',
  'few',
  'field',
  'fight',
  'figure',
  'fill',
  'film',
  'final',
  'finally',
  'financial',
  'find',
  'fine',
  'finger',
  'finish',
  'fire',
  'firm',
  'first',
  'fish',
  'five',
  'floor',
  'fly',
  'focus',
  'follow',
  'food',
  'foot',
  'for',
  'force',
  'foreign',
  'forget',
  'form',
  'former',
  'forward',
  'four',
  'free',
  'friend',
  'from',
  'front',
  'full',
  'fund',
  'future',
  'game',
  'garden',
  'gas',
  'general',
  'generation',
  'get',
  'girl',
  'give',
  'glass',
  'go',
  'goal',
  'good',
  'government',
  'great',
  'green',
  'ground',
  'group',
  'grow',
  'growth',
  'guess',
  'gun',
  'guy',
  'hair',
];

// ######################################################################
// Generate block of keywords

const generateWords = () => {
  let randomNumber;
  for (let i = 0; i < wordsInBlock; i++) {
    // Get random number
    randomNumber = Math.floor(Math.random() * keywords.length);

    // Push random keyword into wordsBlock
    wordsBlock.push(keywords[randomNumber]);

    // Display generated keyword
    block.insertAdjacentHTML('beforeend', `<p class='word-ids' id='word-id${i}'>${keywords[randomNumber]}</p>`);
  }
  // Highlight current word
  words = document.querySelectorAll('.word-ids');
  currentWord = 0;
  words[currentWord].classList.toggle('highlight');
};

generateWords();

// ######################################################################
// Game

inputBox.addEventListener('keyup', event => {
  // Remove whitespace from inputed word
  inputBox.value = inputBox.value.trim();

  // Check and move to the next word after hitting space
  if (event.code === 'Space' && inputBox.value) {
    // Start timer
    if (secondsLeft === 59) setInterval(timer, 1000);

    // If all words from current block - as block we understand the block of 25(wordsInBlock) keywords to be inputed
    // have been typed then it's clearing the input and generating new block of keywords
    if (currentWord === wordsInBlock - 1) {
      clear();
    } else {
      // Correct word has been typed
      if (inputBox.value === wordsBlock[currentWord]) {
        words[currentWord].classList.toggle('mark-green');
        correct++;
      } else {
        words[currentWord].classList.toggle('mark-red'); // Incorrect word has been typed
        errors++;
      }
      // Switch current word
      words[currentWord].classList.toggle('highlight');
      currentWord++;
      words[currentWord].classList.toggle('highlight');

      characters += inputBox.value.length;
      inputBox.value = '';
    }
  }
});

// ######################################################################
// Clear

const clear = () => {
  block.textContent = '';
  wordsBlock = [];
  inputBox.value = '';
  generateWords();
};

// ######################################################################
// Restart game

const restartBtn = document.querySelector('.restart');

restartBtn.addEventListener('click', () => {
  accuracy = 1;
  secondsLeft = 59;
  inputBox.disabled = false;
  clearInterval(timer);
  results.classList.add('hidden');
  clear();
});

// ######################################################################
// Timer

const timerBox = document.querySelector('.timer');

const results = document.querySelector('.results');
const wpmBox = document.querySelector('.wpm');
const accuracyBox = document.querySelector('.accuracy');

let interval;

const timer = () => {
  if (secondsLeft > 0) {
    timerBox.textContent = `0:${String(secondsLeft).padStart(2, 0)}`;
    secondsLeft--;
  } else {
    // Time's over
    clearInterval((secondsLeft = 0));

    // Calculate and display Net WMP
    wpmBox.textContent = (characters / 5 - errors) / 1;

    // Calculate and display accuracy
    accuracyBox.textContent = `${parseInt((correct / (correct + errors)) * 100)}%`;

    inputBox.disabled = true;

    // Display wpm and accuracy box
    results.classList.remove('hidden');
  }
};
