'use strict';

const block = document.querySelector('.words');
const inputBox = document.querySelector('.input');

let wordIds;
let wordsBlock = [];
let currentWord;
let wpm = 1;
let accuracy = 1;
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
    // TODO TIMER RESET
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
    if (currentWord === wordsInBlock - 1) {
      console.log(accuracy);
      console.log(wpm);
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

// TODO TIMER
