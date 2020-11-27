'use strict';

const htmlBtn = document.querySelector('.quiz-type__html');
const cssBtn = document.querySelector('.quiz-type__css');
const jsBtn = document.querySelector('.quiz-type__js');

const menu = document.querySelector('.menu');
const questionsBox = document.querySelector('.questions-box');

htmlBtn.addEventListener('click', () => {
  hideMenu();
  showQuestionsBox();
});

const hideMenu = () => {
  menu.classList.add('swipeLeft');
};

const showQuestionsBox = () => {
  questionsBox.classList.add('swipeRight');
};
