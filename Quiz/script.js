'use strict';

// ############################
// DRAFTING QUESTIONS

const answers = document.querySelector('.questions-box__answers');
const question = document.querySelector('.question');

let htmlQuestions = {
  question: [
    'HTML stands for?',
    'How is document type initialized in HTML5.?',
    'Which of the following HTML Elements is used for making any text bold ?',
    'Which of the following HTML element is used for creating an unordered list?',
    'How many heading tags are there in HTML5?',
    'Which of the following attributes is used to add link to any element?',
    'Web pages starts with which ofthe following tag?',
  ],
  a: [
    'Hyper Text Markup Language',
    '</DOCTYPE HTML>',
    '<p>',
    '<ui>',
    '2',
    'link',
    '<html>',
  ],
  b: [
    'High Text Markup Language',
    '</DOCTYPE>',
    '<i>',
    '<b>',
    '3',
    'href',
    '<Title>',
  ],
  c: [
    'Hyper Tabular Markup Language',
    '<!DOCTYPE HTML>',
    '<li>',
    '<em>',
    '6',
    'ref',
    '<body>',
  ],
  d: ['	None of these', '</DOCTYPE html>', '<b>', '<ul>', '5', 'src', '<form>'],
  goodAnswer: ['a', 'c', 'd', 'd', 'c', 'b', 'a'],
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomNumber;
let answeredQuestions = [];

const draftQuestions = (quiz) => {
  if (quiz === 'html') {
    // random number
    randomNumber = getRandomInt(7);
    if (!answeredQuestions.includes(randomNumber)) {
      question.textContent = htmlQuestions.question[randomNumber];
      answers.children[0].textContent = htmlQuestions.a[randomNumber];
      answers.children[1].textContent = htmlQuestions.b[randomNumber];
      answers.children[2].textContent = htmlQuestions.c[randomNumber];
      answers.children[3].textContent = htmlQuestions.d[randomNumber];
      answeredQuestions.push(randomNumber);
    } else {
      draftQuestions('html');
    }
  }
};

// ############################
// DISPLAYING QUESTIONS AND ANSWERS

const htmlBtn = document.querySelector('.quiz-type__html');
const cssBtn = document.querySelector('.quiz-type__css');
const jsBtn = document.querySelector('.quiz-type__js');

const menu = document.querySelector('.menu');
const questionsBox = document.querySelector('.questions-box');

htmlBtn.addEventListener('click', () => {
  displayQuestions('html');
  hideMenu();
  showQuestionsBox();
  draftQuestions('html');
});

cssBtn.addEventListener('click', () => {
  displayQuestions('css');
  hideMenu();
  showQuestionsBox();
});

jsBtn.addEventListener('click', () => {
  displayQuestions();
  hideMenu();
  showQuestionsBox();
});

const hideMenu = () => {
  menu.classList.add('swipeLeft');
};

const showQuestionsBox = () => {
  questionsBox.classList.add('swipeRight');
};

const displayQuestions = (quizType) => {
  let answerBgc; // different background color for different technology
  if (quizType === 'html') {
    answerBgc = 'pink-red';
  } else if (quizType === 'css') {
    answerBgc = 'teal';
  } else {
    answerBgc = 'orange';
  }
  for (let i = 0; i < answers.children.length; i++) {
    answers.children[i].classList.add(`${answerBgc}`);
  }
};

// TODO
// DIFFERENT COLOR FOR JS - CHECK CONTRAST
// on answer Click add event listener to check if the answer is correct , call draft question <- reapeat until questionNumber <= 5
