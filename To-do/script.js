'use strict';
// #######################################
// DATE & TIME

const timeBox = document.querySelector('.time-box');
const dateBox = document.querySelector('.date-box');

let now, hours, minutes;
const clock = () => {
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();

  hours < 10 ? (hours = `0${hours}`) : hours;
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;

  timeBox.textContent = `${hours}:${minutes}`;
};
setInterval(clock, 1000);

const setDate = () => {
  now = new Date();
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];

  let weekDay = weekDays[now.getDay()];
  let day = now.getDate();
  let month = months[now.getMonth()];

  dateBox.textContent = `${weekDay}, ${day} ${month}`;
};

setDate();

// #######################################
// SWITCH LIST

const lists = document.querySelectorAll('.list');
let activeList = lists[0];

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener('click', () => {
    switchList(lists[i]);
  });
}

const switchList = (list) => {
  activeList.classList.toggle('active');
  document.querySelector(`.${activeList.children[1].textContent}`).classList.toggle('show');
  activeList = list;
  activeList.classList.toggle('active');
  document.querySelector(`.${activeList.children[1].textContent}`).classList.toggle('show');
};

// #######################################
// MODAL - DELETE LIST & CHANGE ICON

let parentNode;

const openModal = (parent) => {
  const modal = document.createElement('div');
  modal.className = 'list-modal';

  const rename = document.createElement('p');
  rename.className = 'rename';
  rename.textContent = 'Rename';
  modal.appendChild(rename);

  const changeIcon = document.createElement('p');
  changeIcon.className = 'change-icon';
  changeIcon.textContent = 'Change icon';
  modal.appendChild(changeIcon);

  const deleteList = document.createElement('p');
  deleteList.className = 'delete';
  deleteList.textContent = 'Delete';
  modal.appendChild(deleteList);

  parent.appendChild(modal);

  parentNode = parent;
};

const closeModal = (parent) => {
  const modal = document.querySelector('.list-modal');
  console.log(modal);
  console.log(parent);
  parent.removeChild(modal);
  parentNode = false;
};

window.addEventListener('click', function (e) {
  if (parentNode) closeModal(parentNode);
  if (e.target.classList.contains('list__options')) openModal(e.target);
});
