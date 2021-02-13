'use strict';

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const img1 = document.querySelector('.tanya-img');
const img2 = document.querySelector('.john-img');
const desc1 = document.querySelector('.desc--1');
const desc2 = document.querySelector('.desc--2');
const nameJob1 = document.querySelector('.name-job--1');
const nameJob2 = document.querySelector('.name-job--2');

prevBtn.addEventListener('click', () => {
  img1.classList.add('move-1');
  img2.classList.add('move-2');

  desc1.classList.add('opacity-0');
  nameJob1.classList.add('opacity-0');
  setTimeout(() => {
    desc1.classList.add('hide');
    desc2.classList.remove('hide');
    nameJob1.classList.add('hide');
    nameJob2.classList.remove('hide');
  }, 350);
  setTimeout(() => {
    desc2.classList.add('opacity-1');
    nameJob2.classList.add('opacity-1');
  }, 550);
});

nextBtn.addEventListener('click', () => {
  img1.classList.remove('move-1');
  img2.classList.remove('move-2');

  desc2.classList.remove('opacity-1');
  nameJob2.classList.remove('opacity-1');
  setTimeout(() => {
    desc2.classList.add('hide');
    desc1.classList.remove('hide');
    nameJob2.classList.add('hide');
    nameJob1.classList.remove('hide');
  }, 350);
  setTimeout(() => {
    desc1.classList.add('opacity-1');
    nameJob1.classList.add('opacity-1');
  }, 550);
});
