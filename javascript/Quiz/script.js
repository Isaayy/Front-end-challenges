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
const quizTitle = document.querySelector('.quiz-title');

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
  quizTitle.textContent = quizType;
  setAnswersColor();
  menu.classList.add('swipeLeft');
  questionsBox.classList.add('swipeFromRight');
  draftQuestion();
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

const resultScore = document.querySelector('.correct-answers');

const hideQuestionsBox = () => {
  questionsBox.classList.toggle('display-none');
};

const showResultsBox = () => {
  resultsBox.classList.toggle('display-none');
};

const endGame = () => {
  hideQuestionsBox();
  showResultsBox();
  if (goodAnswers >= 3)
    resultScore.textContent = `Well done you answered ${goodAnswers}/5 correctly`;
  else
    resultScore.textContent = `You need to work a little because you answered ${goodAnswers}/5 questions correctly`;
};

// ########################################################
// ########################################################
// ########################################################
// DRAFTING QUESTIONS

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
    'Web pages starts with which of the following tag?',
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

let cssQuestions = {
  questions: [
    'What property do you use to create spacing between HTML elements?',
    'What is the property used to set the class’s text color?',
    'CSS stands for?',
    'What property would you use to create space between the element’s border and inner content?',
    'What property do you use to set the background color?',
    'how do you give it a particular style when the user hovers over the element?',
    'How to set the style for a specific HTML element with an id of “special”?',
  ],
  a: [
    'margin',
    'text-color',
    'Cascading Style Sheets',
    'margin',
    'color',
    ':onHover',
    '#special{ }',
  ],
  b: [
    'spacing',
    'text',
    'Canvas Styling System',
    'spacing',
    'background-color',
    ':hover',
    '.special{ }',
  ],
  c: [
    'padding',
    'color',
    'Cascade Style System',
    'padding',
    'background',
    ':mouseOver',
    'id.special{ }',
  ],
  d: [
    'border',
    'font-color',
    'Cascading Style System',
    'border',
    'bg-color',
    ':active',
    'element.id.special{ }',
  ],
  goodAnswer: [
    'margin',
    'color',
    'Cascading Style Sheets',
    'padding',
    'background-color',
    ':hover',
    '#special{ }',
  ],
};

let jsQuestions = {
  questions: [
    'To insert a JavaScript into an HTML page, which tag is used?',
    'How to append a value to an array of Java Script?',
    'Which of the following function of String object executes the search for a match between a regular expression and a specified string?',
    'Which built-in method calls a function for each element in the array?',
    'How can we check the length of an array?',
    'How to log text in console?',
    'Which variable definition is correct',
  ],
  a: [
    `<script='java'>`,
    'arr[arr.length] = value',
    'concat()',
    'for',
    'length(arr)',
    'console.log()',
    'var 1a',
  ],
  b: [
    '<javascript>',
    'arr[arr.length-1] = value',
    'includes()',
    'loop',
    'arr.length',
    'clog()',
    'let 1a',
  ],
  c: [
    '<script>',
    'arr[arr.length+1] = new Arrays()',
    'match()',
    'while',
    'arr.length()',
    'console.text()',
    'let a1',
  ],
  d: [
    '<js>',
    'arr[arr.length*1] = value',
    'test',
    'forEach',
    'arr(length)',
    'print()',
    'int a ',
  ],
  goodAnswer: [
    '<script>',
    'arr[arr.length] = value',
    'match()',
    'forEach',
    'arr.length',
    'console.log()',
    'let a1',
  ],
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomNumber;
let answeredQuestions = [];

const draftQuestion = () => {
  randomNumber = getRandomInt(7);
  if (quizType === 'html') {
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
  } else if (quizType === 'css') {
    if (!answeredQuestions.includes(randomNumber)) {
      question.textContent = cssQuestions.questions[randomNumber];
      answers.children[0].textContent = cssQuestions.a[randomNumber];
      answers.children[1].textContent = cssQuestions.b[randomNumber];
      answers.children[2].textContent = cssQuestions.c[randomNumber];
      answers.children[3].textContent = cssQuestions.d[randomNumber];
      answeredQuestions.push(randomNumber);
    } else {
      draftQuestion('css');
    }
  } else {
    if (!answeredQuestions.includes(randomNumber)) {
      question.textContent = jsQuestions.questions[randomNumber];
      answers.children[0].textContent = jsQuestions.a[randomNumber];
      answers.children[1].textContent = jsQuestions.b[randomNumber];
      answers.children[2].textContent = jsQuestions.c[randomNumber];
      answers.children[3].textContent = jsQuestions.d[randomNumber];
      answeredQuestions.push(randomNumber);
    } else {
      draftQuestion('js');
    }
  }
};

// ########################################################
// ########################################################
// ########################################################
// CHECK IN ANSWER IS GOOD OR NOT

const isGoodAnswer = (answer) => {
  if (quizType === 'html') {
    if (answer.textContent === htmlQuestions.goodAnswer[randomNumber])
      return true;
    return false;
  } else if (quizType === 'css') {
    if (answer.textContent === cssQuestions.goodAnswer[randomNumber])
      return true;
    return false;
  }
  if (answer.textContent === jsQuestions.goodAnswer[randomNumber]) return true;
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
