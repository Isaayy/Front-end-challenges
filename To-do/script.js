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
let lists = document.querySelectorAll('.list');
let activeList = lists[0];

const setLists = () => {
  lists = document.querySelectorAll('.list');

  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', () => {
      switchList(lists[i]);
    });
  }
};

setLists();

const switchList = (list) => {
  activeList.classList.toggle('active');
  document.querySelector(`#${activeList.children[1].value}`).classList.toggle('show');
  activeList = list;
  activeList.classList.toggle('active');
  document.querySelector(`#${activeList.children[1].value}`).classList.toggle('show');
};

// #######################################
// MODAL

let OptionsParent;

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

  OptionsParent = parent;

  activateModalButtons();
};

const closeModal = (parent) => {
  const modal = document.querySelector('.list-modal');
  parent.removeChild(modal);
  OptionsParent = false;
};

window.addEventListener('click', function (e) {
  if (OptionsParent) closeModal(OptionsParent);
  if (e.target.classList.contains('list__options')) openModal(e.target);
  if (e.target.classList.contains('option')) openModal(e.target);
});

// #######################################
// MODAL - RENAME, CHANGE ICON & DELETE

const activateModalButtons = () => {
  const renameBtn = document.querySelector('.rename');
  const deleteBtn = document.querySelector('.delete');

  const currentList = activeList.children[1];

  renameBtn.addEventListener('click', () => {
    rename(currentList);
  });

  deleteBtn.addEventListener('click', () => {
    activeList.classList.add('hide');
    document.querySelector(`.${activeList.children[1].textContent}`).classList.add('hide');
  });
};

const rename = (currentList) => {
  currentList.readOnly = false;
  currentList.focus();
  currentList.select();

  const tmpName = currentList.value;
  console.log('tmpName inside rename : ', tmpName);
  console.log('currentList.value inside rename : ', currentList.value);
  // ! CALL ONE OF THEM - ATM BOTH ARE CALLED
  currentList.addEventListener('blur', () => {
    currentList.readOnly = true;
    document.querySelector(`#${tmpName}`).id = currentList.value;
  });

  currentList.addEventListener('keyup', () => {
    if (event.keyCode === 13) {
      currentList.readOnly = true;
      document.querySelector(`#${tmpName}`).id = currentList.value;
    }
  });
};

// #######################################
// ADD NEW LIST

const addListBtn = document.querySelector('.add-list');
const listsContainer = document.querySelector('.lists');
const main = document.querySelector('.main');

addListBtn.addEventListener('click', () => {
  // new list
  const newList = document.createElement('div');
  newList.className = 'list';

  newList.innerHTML = `
  <img src="img/alert.svg" alt="alert" class="list__img" />
  <input class="list__title" value="New" readonly />
  <div class="list__options">
    <div class="option"></div>
    <div class="option"></div>
  </div>`;

  listsContainer.appendChild(newList);
  console.log(newList.children[1]);
  console.log(newList.children[1].value);

  // new todo's for current list
  const newTodo = document.createElement('div');
  newTodo.className = 'todo';
  newTodo.id = newList.children[1].value;
  newTodo.textContent = 'new list todo';

  main.appendChild(newTodo);
  console.log(newTodo);

  setLists();
  rename(newList.children[1]);
  console.log(newList.children[1].value);
});

// TODO
