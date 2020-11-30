'use strict';

// ########################################################
// ########################################################
// ########################################################
// MAIN FUNCTIONALITY

const questionNumber = document.querySelector('.question-number');

let quizType;
let currentQuestionNuber = 1;
let goodAnswers = 0;

const displayCurrentQuestionNumber = () => {
  questionNumber.textContent = `${currentQuestionNuber}/5`;
};

displayCurrentQuestionNumber();

// ########################################################
// ########################################################
// ########################################################
// START QUIZ - DISPLAYING QUESTIONS AND ANSWERS

const htmlBtn = document.querySelector('.quiz-type__html');
const cssBtn = document.querySelector('.quiz-type__css');
const jsBtn = document.querySelector('.quiz-type__js');

const menu = document.querySelector('.menu');
const questionsBox = document.querySelector('.questions-box');
const resultsBox = document.querySelector('.result-box');

htmlBtn.addEventListener('click', () => {
  startQuiz('html');
});

cssBtn.addEventListener('click', () => {
  startQuiz('css');
});

jsBtn.addEventListener('click', () => {
  startQuiz('js');
});

const startQuiz = (type) => {
  quizType = type;
  setAnswersColor();
  menu.classList.add('swipeLeft');
  questionsBox.classList.add('swipeFromRight');
  draftQuestion(); // ! draft different questions for different quizes
};

// different background color for different technology
const setAnswersColor = () => {
  let answerBgc;
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

// ########################################################
// ########################################################
// ########################################################
// END QUIZ - HIDE QUESTIONS AND ANSWERS, SHOW RESULT

const hideQuestionsBox = () => {
  questionsBox.classList.toggle('display-none');
};

const showResultsBox = () => {
  resultsBox.classList.toggle('display-none');
};

const endGame = () => {
  hideQuestionsBox();
  showResultsBox();
};

// ############################
// DRAFTING QUESTIONS
// TODO DIFFERENT QUESIONS DRAFTING FOR DIFFEREN QUIZES

const answers = document.querySelector('.questions-box__answers');
const question = document.querySelector('.question');

let htmlQuestions = {
  questions: [
    'HTML stands for?',
    'How is document type initialized in HTML5?',
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
  goodAnswer: [
    'Hyper Text Markup Language',
    '<!DOCTYPE HTML>',
    '<b>',
    '<ul>',
    '6',
    'href',
    '<html>',
  ],
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomNumber;
let answeredQuestions = [];

const draftQuestion = () => {
  if (quizType === 'html') {
    // random number
    randomNumber = getRandomInt(7);
    if (!answeredQuestions.includes(randomNumber)) {
      question.textContent = htmlQuestions.questions[randomNumber];
      answers.children[0].textContent = htmlQuestions.a[randomNumber];
      answers.children[1].textContent = htmlQuestions.b[randomNumber];
      answers.children[2].textContent = htmlQuestions.c[randomNumber];
      answers.children[3].textContent = htmlQuestions.d[randomNumber];
      answeredQuestions.push(randomNumber);
    } else {
      draftQuestion('html');
    }
  }
};

// ############################
// CHECK IN ANSWER IS GOOD OR NOT

const isGoodAnswer = (answer) => {
  if (answer.textContent === htmlQuestions.goodAnswer[randomNumber])
    return true;
  return false;
};

for (let i = 0; i < answers.children.length; i++) {
  answers.children[i].addEventListener('click', () => {
    if (isGoodAnswer(answers.children[i])) {
      goodAnswers++;
    }
    if (currentQuestionNuber === 5) endGame();
    else {
      currentQuestionNuber++;
      displayCurrentQuestionNumber();
      draftQuestion();
    }
  });
}

// TODO
// DIFFERENT COLOR FOR JS - CHECK CONTRAST
