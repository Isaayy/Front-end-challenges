'use strict';

const block = document.querySelector('.words');
const inputBox = document.querySelector('.input');

let wordIds;
let wordsBlock = [];
let currentWord;
let wpm = 0;
let accuracy = 0;
const wordsInBlock = 25;

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
// Generate keywords

const generateOutput = () => {
  let randomNumber;
  for (let i = 0; i < wordsInBlock; i++) {
    randomNumber = Math.floor(Math.random() * keywords.length);
    wordsBlock.push(keywords[randomNumber]);
    block.innerHTML += `<p class='word-ids' id='word-id${i}'>${keywords[randomNumber]}</p>`;
  }
  wordIds = document.querySelectorAll('.word-ids');
  currentWord = 0;
  wordIds[currentWord].classList.toggle('highlight');
};

generateOutput();

// ######################################################################
// Reset

const reset = (type) => {
  if (type === 'complete') {
    wpm = 1;
    accuracy = 1;
    secondsLeft = 59;
    inputBox.disabled = false;
    clearInterval(timer);
    results.classList.add('hidden');
  }
  block.textContent = '';
  wordsBlock = [];
  inputBox.value = '';
  generateOutput();
};

// ######################################################################
// Game

inputBox.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    if (secondsLeft === 59) setInterval(timer, 1000);
    if (currentWord === wordsInBlock - 1) {
      reset();
    } else {
      if (inputBox.value.trim() === wordsBlock[currentWord]) {
        wordIds[currentWord].classList.toggle('mark-green');
        accuracy++;
      } else wordIds[currentWord].classList.toggle('mark-red');

      wordIds[currentWord].classList.toggle('highlight');
      currentWord++;
      wordIds[currentWord].classList.toggle('highlight');
      inputBox.value = '';
      wpm++;
    }
  }
});

// ######################################################################
// Restart

const restartBtn = document.querySelector('.restart');

restartBtn.addEventListener('click', () => {
  reset('complete');
});

// ######################################################################
// Timer

const timerBox = document.querySelector('.timer');

const results = document.querySelector('.results');
const wpmBox = document.querySelector('.wpm');
const accuracyBox = document.querySelector('.accuracy');

let interval;
let secondsLeft = 59;

const timer = () => {
  if (secondsLeft > 0) {
    if (secondsLeft >= 10) timerBox.textContent = `0:${secondsLeft}`;
    else timerBox.textContent = `0:0${secondsLeft}`;
    secondsLeft--;
  } else {
    clearInterval((secondsLeft = 0));
    wpmBox.textContent = wpm;
    accuracyBox.textContent = `${parseInt((accuracy / wpm) * 100)}%`;
    inputBox.disabled = true;
    results.classList.remove('hidden');
  }
};
