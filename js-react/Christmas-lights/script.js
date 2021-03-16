'use strict';

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const bulbs = document.querySelectorAll('.bulb');
const blueBulbs = document.querySelectorAll('.bulb--blue');
const redBulbs = document.querySelectorAll('.bulb--red');

const decreaseSpeed = document.querySelector('.decrease');
const increaseSpeed = document.querySelector('.increase');

// ######################
// Start and stop intervals

let interval1, interval2;
let speed = 1000;

const setIntervals = () => {
  interval1 = setInterval(blueBlink, speed);
  interval2 = setInterval(redBlink, 2 * speed);
};

const stopIntervals = () => {
  clearInterval(interval1);
  clearInterval(interval2);
};

startBtn.addEventListener('click', () => {
  setIntervals();
});

stopBtn.addEventListener('click', () => {
  stopIntervals();
  for (const bulb of bulbs) {
    bulb.style.boxShadow = 'none';
  }
});

// ######################
// Lights blinking
const blueBlink = () => {
  for (const bulb of redBulbs) {
    bulb.style.boxShadow = 'none';
  }
  console.log(speed);

  for (const bulb of blueBulbs) {
    bulb.style.boxShadow = '0 0 1rem #34d1bf';
  }
};

const redBlink = () => {
  for (const bulb of redBulbs) {
    bulb.style.boxShadow = '0 0 1rem #d1345b';
  }

  for (const bulb of blueBulbs) {
    bulb.style.boxShadow = 'none';
  }
};

// ######################
// Increase / decrease speed of blinking

increaseSpeed.addEventListener('click', () => {
  if (speed >= 400) {
    speed -= 200;
    clearInterval(interval1);
    clearInterval(interval2);
    setIntervals();
  }
});

decreaseSpeed.addEventListener('click', () => {
  if (speed <= 1600) {
    speed += 200;
    clearInterval(interval1);
    clearInterval(interval2);
    setIntervals();
  }
});
