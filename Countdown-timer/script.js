'use strict';
// #####################################################################
// start - event name and calculating difference between the event and today

const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const eventName = document.querySelector('#event-name');
const eventDate = document.querySelector('#event-date');
const eventTime = document.querySelector('#event-time');
const untilParagraph = document.querySelector('.until');

let isStartClicked = false;

startBtn.addEventListener('click', () => {
  const today = new Date();
  let eventDay = new Date(eventDate.value);

  if (isValid('time')) {
    const splitedTime = eventTime.value.split(':');
    eventDay.setHours(splitedTime[0]);
    eventDay.setMinutes(splitedTime[1]);
  }

  //date in the past
  if (eventDay.getTime() < today.getTime()) {
    const message = document.querySelector('.message');
    message.classList.remove('hidden');

    const messageClose = document.querySelector('.message__close');
    messageClose.addEventListener('click', () => {
      message.classList.add('hidden');
    });

    return;
  }

  if (isValid('name') && isValid() && !isStartClicked) {
    untilParagraph.innerHTML = `<span class='until--until'>until</span> ${eventName.value}`;

    let difference = eventDay - today; //in ms

    const daysLeft = Math.floor(difference / (1000 * 3600 * 24));
    difference -= daysLeft * 1000 * 3600 * 24;

    let hoursLeft, minutesLeft, secondsLeft;

    hoursLeft = Math.floor(difference / (1000 * 3600));
    difference -= hoursLeft * 1000 * 3600;

    minutesLeft = Math.floor(difference / (1000 * 60));
    difference -= minutesLeft * 1000 * 60;

    secondsLeft = Math.floor(difference / 1000);
    difference -= secondsLeft * 1000;

    startTimer({ daysLeft, hoursLeft, minutesLeft, secondsLeft });

    isStartClicked = true;
  }
});

// #####################################################################
// reset

resetBtn.addEventListener('click', () => {
  stopTimer();
  insertTime({ daysLeft: 0, hoursLeft: 0, minutesLeft: 0, secondsLeft: 0 });
  isStartClicked = false;
});

// #####################################################################
// Validation

const isValid = (type) => {
  if (type === 'name') {
    if (eventName.value) return true;
    return false;
  } else if (type === 'time') {
    const timePattern = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
    if (!timePattern.test(eventTime.value)) return false;
    else return true;
  } else {
    // date
    const datePattern = /^(((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))[-/]?[0-9]{4}|02[-/]?29[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
    if (!datePattern.test(eventDate.value)) return false;
    else return true;
  }
};

eventName.addEventListener('blur', () => {
  if (!isValid('name'))
    document.querySelector('#name-invalid').classList.remove('hidden');
  else document.querySelector('#name-invalid').classList.add('hidden');
});

eventDate.addEventListener('blur', () => {
  if (!isValid('date'))
    document.querySelector('#date-invalid').classList.remove('hidden');
  else document.querySelector('#date-invalid').classList.add('hidden');
});

eventTime.addEventListener('blur', () => {
  if (!isValid('time'))
    document.querySelector('#time-invalid').classList.remove('hidden');
  else document.querySelector('#time-invalid').classList.add('hidden');
});

// #####################################################################
// Timer
let interval;

const startTimer = (time) => {
  interval = setInterval(() => {
    if (
      time.daysLeft != 0 ||
      time.hoursLeft != 0 ||
      time.minutesLeft != 0 ||
      time.secondsLeft != 0
    ) {
      if (time.secondsLeft > 0) {
        time.secondsLeft -= 1;
      } else {
        time.secondsLeft = 59;
        if (time.minutesLeft > 0) time.minutesLeft -= 1;
        else {
          time.minutesLeft = 59;
          if (time.hoursLeft > 0) time.hoursLeft -= 1;
          else {
            time.hoursLeft = 23;
            if (time.daysLeft > 0) time.daysLeft -= 1;
          }
        }
      }
    }
    insertTime(time);
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
};

const insertTime = (time) => {
  document.querySelector('.days').textContent =
    time.daysLeft < 10 ? `0${time.daysLeft}` : time.daysLeft;
  document.querySelector('.hours').textContent =
    time.hoursLeft < 10 ? `0${time.hoursLeft}` : time.hoursLeft;
  document.querySelector('.minutes').textContent =
    time.minutesLeft < 10 ? `0${time.minutesLeft}` : time.minutesLeft;
  document.querySelector('.seconds').textContent =
    time.secondsLeft < 10 ? `0${time.secondsLeft}` : time.secondsLeft;
};

// TODO:
// ? Improve algorythmic notation of timer
