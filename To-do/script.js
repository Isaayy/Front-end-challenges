'use strict';
// #######################################
// DATE & TIME

const timeBox = document.querySelector('.timestamp__time');
const dateBox = document.querySelector('.timestamp__date');

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

  // now.getDay() - returns 0-6
  let weekDay = weekDays[now.getDay()];
  let day = now.getDate();
  let month = months[now.getMonth()];

  dateBox.textContent = `${weekDay}, ${day} ${month}`;
};

setDate();

// #######################################
// SWITCHING BETWEEN LISTS
const listsContainer = document.querySelector('.lists');
let lists = document.querySelectorAll('.list');
let activeList = lists[0];

// Add eventListener to lists
const setUpListsListeners = () => {
  lists = document.querySelectorAll('.list');

  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', () => {
      if (!lists[i]) return;
      if (!lists[i].classList.contains('active')) switchList(lists[i]); // listener only for non active lists
    });
  }
};
// call to setUp 3 primary lists
setUpListsListeners();

const switchList = (list) => {
  if (typeof activeList !== 'undefined') {
    // for more than 1 list
    // 'turn off' active list
    activeList.classList.toggle('active');
    document.querySelector(`#${activeList.children[1].value}`).classList.toggle('show');
  }
  // switch list by 'turning on' list from param
  activeList = list;
  activeList.classList.toggle('active');
  document.querySelector(`#${activeList.children[1].value}`).classList.toggle('show'); // display to'do items for this list
};

// #######################################
// MODAL

// parent in this case is a list in which we click settings - prevents opening multiple modals
let optionsParent;

const openModal = (parent) => {
  // create 3 different elements for each event - icon change, rename, delete
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
  optionsParent = parent;
  activateModalButtons();
};

const closeModal = (parent) => {
  const modal = document.querySelector('.list-modal');
  if (!modal) return;
  parent.removeChild(modal);
  optionsParent = false;
};

// function that checks if we click in either option circular icon or it's container
// if it's already opened and we click outside it - closeModal()
// if yes then openModal()
window.addEventListener('click', function (e) {
  if (optionsParent) closeModal(optionsParent);
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
    renameList(currentList);
  });

  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    // remove lists on which we click delete button
    listsContainer.removeChild(activeList);
    document.querySelector(`#${activeList.children[1].value}`).classList.add('hide');
    lists = document.querySelectorAll('.list');

    // activate first list
    activeList = lists[0];
    if (!activeList) return; // return when there is no more lists
    activeList.classList.toggle('active');
    document.querySelector(`#${activeList.children[1].value}`).classList.toggle('show');

    // refresh listeners for lists
    setUpListsListeners();
  });
};

const renameList = (currentList) => {
  // place cursor in list name (focus input)
  currentList.readOnly = false;
  currentList.focus();
  currentList.select();

  // rename it on either enter key or blur
  const tmpName = currentList.value;
  currentList.addEventListener('blur', () => {
    if (!document.querySelector(`#${tmpName}`)) return; // prevent executing both events
    currentList.readOnly = true;
    document.querySelector(`#${tmpName}`).id = currentList.value;
  });

  currentList.addEventListener('keyup', () => {
    if (event.keyCode === 13) {
      if (!document.querySelector(`#${tmpName}`)) return;
      currentList.readOnly = true;
      document.querySelector(`#${tmpName}`).id = currentList.value;
    }
  });
};

// #######################################
// ADD NEW LIST

const addListBtn = document.querySelector('.add-list');
const main = document.querySelector('.main');
let newListsNumber = 1;
addListBtn.addEventListener('click', () => {
  // create new list
  const newList = document.createElement('div');
  newList.className = 'list';

  newList.innerHTML = `
  <img src="img/alert.svg" alt="alert" class="list__img" />
  <input class="list__title" value="New-${newListsNumber}" readonly />
  <div class="list__options">
    <div class="option"></div>
    <div class="option"></div>
  </div>`;

  listsContainer.appendChild(newList);

  // create new todo for current list
  const newTodo = document.createElement('div');
  newTodo.className = 'todo';
  newTodo.id = newList.children[1].value;
  newTodo.textContent = 'new list todo';

  main.appendChild(newTodo);

  setUpListsListeners();
  renameList(newList.children[1]);
  newListsNumber++;
});

// #######################################
// ITEMS - DISPLAY TRASH AND RENAME ICON ON HOVER

const items = document.querySelectorAll('.item');
let currentItem;

for (const item of items) {
  item.addEventListener('mouseover', () => {
    item.children[1].classList.remove('hide');
    currentItem = item;
  });
  item.addEventListener('mouseout', () => {
    item.children[1].classList.add('hide');
  });
}

const deleteItemButtons = document.querySelectorAll('.item-delete');

for (const deleteBtn of deleteItemButtons) {
  deleteBtn.addEventListener('click', () => {
    console.log(currentItem);
    currentItem.classList.toggle('hide');
  });
}

// TODO

// - todo items :
// - 2 default for default lists
// - 1 default for new list
//! - todo items works as lists with live rename so : 1 div for green if done (radius 50%), input readonly for live nameing it, and when hover trash icon appears in right corner ( delete option ),
//!   and pen icon for raneme
// new to-do button which works same as new list

// - change primary list icons+
// - list icon change and select when creating
