'use strict';

const countBtn = document.querySelector('.btn');
const input = document.querySelector('.input');

countBtn.addEventListener('click', () => {
  if (input.value) {
    table.innerHTML = '';
    generateResult(input.value);
  }
});

// ############################################################
// GENERATE ARRAY OF FORMATTED WORDS

const generateArray = str => {
  // remove unnecessary whitespace
  str = str.replace(/\s+/g, ' ').trim();

  // remove symbols
  str = str.replace(/[^a-zA-Z ]/g, '');

  // return array of lowercase words
  return str.split(' ').map(el => el.toLowerCase());
};

// ############################################################
// COUNT WORD FREQUENCY

const countWords = str => {
  // Get array of words
  const words = generateArray(str);

  // Count words
  let result = {};
  for (const word of words) {
    result[word] = result[word] + 1 || 1;
  }

  // sort words by frequency
  result = Object.entries(result).sort((a, b) => b[1] - a[1]);

  // return sorted object
  return Object.fromEntries(result);
};

// ############################################################
// Generate result table
const table = document.querySelector('.results-table');
const resultsBox = document.querySelector('.results');

const generateResult = str => {
  // Show table
  resultsBox.classList.remove('hidden');

  // Get sorted object
  const results = countWords(str);

  // Insert data from object into table

  // forEach
  Object.entries(results).forEach((entry, i) => (table.innerHTML += `<tr><td>${i + 1}</td><td>${entry[0]}</td><td>${entry[1]}</td></tr>`));

  // for in
  let i = 1;
  for (const word in results) {
    table.innerHTML += `<tr><td>${i}</td><td>${word}</td><td>${results[word]}</td></tr>`;
    i++;
  }

  // for of
  let i = 1;
  for (const entry of Object.entries(results)) {
    const [value, key] = entry;
    table.innerHTML += `<tr><td>${i}</td><td>${value}</td><td>${key}</td></tr>`;
    i++;
  }
};

// ############################################################
// Display more words
const showMoreBtn = document.querySelector('.show-more');

showMoreBtn.addEventListener('click', () => {
  table.classList.toggle('showMore');
  if (showMoreBtn.textContent === `Show less`) showMoreBtn.innerHTML = `Show more`;
  else showMoreBtn.innerHTML = `Show less`;
});
