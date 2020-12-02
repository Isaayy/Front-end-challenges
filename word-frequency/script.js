'use strict';

const countBtn = document.querySelector('.btn');
const input = document.querySelector('.input');

countBtn.addEventListener('click', () => {
  if (input.value) {
    generateArray(input.value);
  }
});

// ############################################################

const generateArray = (str) => {
  // create array of words from string
  str = str.replace(/\s\s+|\s+$/g, ' ');
  str = str.trim();
  const words = str.split(' ');

  // Word frequency in array of words
  let count = 1;
  let results = [];
  let found;

  for (let i = 0; i < words.length; i++) {
    for (let k = i + 1; k < words.length; k++) {
      if (words[i] === words[k]) {
        count++;
      }
    }
    // check if the word is not already in results
    found = results.some((el) => el.word === words[i]);
    if (!found) results.push({ word: words[i], frequency: count });

    count = 1;
  }
  // sort words by frequency
  results.sort((a, b) => (a.frequency < b.frequency ? 1 : -1));

  generateResult(results);
};

// ############################################################

const table = document.querySelector('.results-table');
const resultsBox = document.querySelector('.results');

const generateResult = (result) => {
  resultsBox.classList.toggle('hidden');
  for (let i = 0; i < result.length; i++) {
    table.innerHTML += `<tr><td>${i + 1}</td><td>${result[i].word}</td><td>${
      result[i].frequency
    }</td></tr>`;
  }
};

// ############################################################

const showMoreBtn = document.querySelector('.show-more');

showMoreBtn.addEventListener('click', () => {
  table.classList.toggle('showMore');
});
