'use strict';

const countBtn = document.querySelector('.btn');
const input = document.querySelector('.input');

countBtn.addEventListener('click', () => {
  if (input.value) {
    reset();
    generateArray(input.value);
  }
});

// ############################################################
let results = [];

const generateArray = str => {
  // remove unnecessary spaces
  str = str.replaceAll('  ', '').trim();

  // create array of words
  const words = str.split(' ');

  // Word frequency in array of words
  let count = 1;
  let found;

  for (let i = 0; i < words.length; i++) {
    for (let k = i + 1; k < words.length; k++) {
      if (words[i] === words[k]) {
        count++;
      }
    }
    // check if the word is not already in results
    found = results.some(el => el.word === words[i]);
    if (!found) results.push({ word: words[i], frequency: count });

    count = 1;
  }
  // sort words by frequency
  results.sort((a, b) => (a.frequency < b.frequency ? 1 : -1));

  generateResult();
};

// ############################################################

const table = document.querySelector('.results-table');
const resultsBox = document.querySelector('.results');

const generateResult = () => {
  resultsBox.classList.remove('hidden');
  for (let i = 0; i < results.length; i++) {
    table.innerHTML += `<tr><td>${i + 1}</td><td>${results[i].word}</td><td>${results[i].frequency}</td></tr>`;
  }
};

// ############################################################

const showMoreBtn = document.querySelector('.show-more');

showMoreBtn.addEventListener('click', () => {
  table.classList.toggle('showMore');
  if (showMoreBtn.textContent === `Show less`) showMoreBtn.innerHTML = `Show more`;
  else showMoreBtn.innerHTML = `Show less`;
});

// ############################################################

const reset = () => {
  results = [];
  table.innerHTML = '';
};
