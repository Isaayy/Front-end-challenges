'use strict';

let canPlay = true;
let money = 500;
let playerBet = 0;
let playerScore = 0;
let dealerScore = 0;

const balance = document.querySelector('.balance');
const balanceMenu = document.querySelector('.balance-menu');

// #######################################
// #######################################
// BET

// Bet ammount
const betAmountButtonsBox = document.querySelector('.bet-amount-buttons');
const sumBetAmountBox = document.querySelector('.player-bet');

betAmountButtonsBox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    const currentBetValue = e.target.textContent;

    if (!money) {
      showModal();
      return;
    }

    if (currentBetValue === 'All in') playerBet = money;
    else {
      if (playerBet + Number(currentBetValue) > money) playerBet = money;
      else playerBet += Number(currentBetValue);
    }
    sumBetAmountBox.textContent = `${playerBet}$`;
  }
  e.stopPropagation();
});

// Custom bet value
const customBet = document.querySelector('.custom-bet-amount');

customBet.addEventListener('blur', () => {
  if (customBet.value > 0) {
    if (customBet.value > money) playerBet = money;
    else playerBet = customBet.value;
    sumBetAmountBox.textContent = `${playerBet}$`;
  } else alert('Bet must be greater than 0');
});

// Place bet
const placeBetBtn = document.querySelector('.bet-btn');
const betBox = document.querySelector('.bet');

const menuFront = document.querySelector('.menu__side--front');
const menuBack = document.querySelector('.menu__side--back');
const placedBetBox = document.querySelector('.placed-bet');

placeBetBtn.addEventListener('click', () => {
  if (playerBet) {
    betBox.textContent = playerBet;
    placedBetBox.classList.toggle('hidden');
    let audio = new Audio('img/drop.mp3');
    audio.play();

    // draw cards
    drawCard('player', playerScore);
    drawCard('dealer', dealerScore);
    drawCard('player', playerScore);
    drawCard();
    // setTimeout(drawCard.bind(null,'dealer',dealerScore),2000);
    // setTimeout(drawCard.bind(null,'player',playerScore),2000);

    // switch menu
    menuFront.classList.add('swipe-front');
    menuBack.classList.add('swipe-back');
  } else showModal();
});

// Clear bet
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
  playerBet = 0;
  sumBetAmountBox.textContent = playerBet;
  customBet.value = '';
});

// #######################################
// #######################################
// Draw cards

const playerCardsBox = document.querySelector('.player-cards');
const dealerCardsBox = document.querySelector('.dealer-cards');

let dealerCardsValues = [];
let playerCardsValues = [];

let drawnCards = [];

const drawCard = (currentPlayer, score) => {
  if (!canPlay) return;

  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  const suits = ['C', 'D', 'H', 'S'];

  const randomValuesIndex = Math.floor(Math.random() * values.length);
  const randomSuitsIndex = Math.floor(Math.random() * suits.length);

  const drawnValue = values[randomValuesIndex];
  const drawnSuit = suits[randomSuitsIndex];

  if (drawnCards.includes(drawnValue + drawnSuit)) {
    drawCard(currentPlayer, score);
    return;
  }
  drawnCards.push(drawnValue + drawnSuit);
  if (typeof drawnValue === 'number') {
    score += drawnValue;
  } else {
    if (drawnValue === 'A') {
      if (score <= 10) score += 11;
      else score += 1;
    } else score += 10;
  }
  // value 1 or 11 for Ace
  if (currentPlayer === 'player') {
    if (score > 21 && playerCardsValues.includes('A')) playerScore -= 10;

    playerCardsBox.innerHTML += `<img src="img/${
      drawnValue + drawnSuit
    }.png" alt="card" class="card slide-in">`;
    playerScore = score;
    document.querySelector('.player-score').textContent = score;
    playerCardsValues.push(drawnValue);
    if (score > 21) {
      canPlay = false;
      checkScore();
    }
  } else if (currentPlayer === 'dealer') {
    if (score > 21 && dealerCardsValues.includes('A')) dealerScore -= 10;

    dealerCardsBox.innerHTML += `<img src="img/${
      drawnValue + drawnSuit
    }.png" alt="card">`;
    dealerScore = score;
    document.querySelector('.dealer-score').textContent = score;
    dealerCardsValues.push(drawnValue);
    if (score > 21) checkScore();
  } else dealerCardsBox.innerHTML += `<img src="img/gray_back.png" alt="card">`;
};

// #######################################
// #######################################
// HIT / STAND / DOUBLE / SPLIT / AGAIN

const optionButtons = document.querySelectorAll('.btn-option');
const hitBtn = document.querySelector('.hit');
const standBtn = document.querySelector('.stand');
const doubleBtn = document.querySelector('.double');
const splitBtn = document.querySelector('.split');
const againBtn = document.querySelector('.again');

hitBtn.addEventListener('click', () => {
  if (!canPlay) return;
  drawCard('player', playerScore);
});

standBtn.addEventListener('click', () => {
  if (!canPlay) return;
  stand();
});

doubleBtn.addEventListener('click', () => {
  if (!canPlay) return;
  if (playerBet * 2 > money) {
    showModal('not enough money');
    return;
  }
  playerBet *= 2;
  betBox.textContent = playerBet;
  drawCard('player', playerScore);
  if (playerScore <= 21) stand();
});

againBtn.addEventListener('click', () => {
  againBtn.classList.toggle('hide');
  menuFront.classList.remove('swipe-front');
  menuBack.classList.remove('swipe-back');
  playerBet = 0;
  sumBetAmountBox.textContent = playerBet;
  betBox.textContent = playerBet;
  placedBetBox.classList.toggle('hidden');
  balance.textContent = money;
  customBet.value = '';

  canPlay = true;
  playerCardsBox.innerHTML = '';
  dealerCardsBox.innerHTML = '';
  document.querySelector('.dealer-score').textContent = '';
  document.querySelector('.player-score').textContent = '';
  dealerScore = 0;
  playerScore = 0;

  for (const btn of optionButtons) btn.classList.remove('blur-bgc');

  dealerCardsValues = [];
  playerCardsValues = [];
});

const stand = () => {
  dealerCardsBox.removeChild(dealerCardsBox.lastChild);
  drawCard('dealer', dealerScore);

  while (dealerScore < 17) drawCard('dealer', dealerScore);
  canPlay = false;
  checkScore();
};

// #######################################
// #######################################
// check score

const checkScore = () => {
  for (const btn of optionButtons) btn.classList.add('blur-bgc');

  if (canPlay) return;

  if (playerScore > 21) {
    endGame('lost');
    return;
  }

  if (dealerScore > 21) {
    endGame('won');
    return;
  }

  if (dealerScore > playerScore) endGame('lost');
  else if (dealerScore < playerScore) endGame('won');
  else endGame('draw');
};

const endGame = (result) => {
  if (result === 'won') money += playerBet;

  if (result === 'lost') money -= playerBet;

  balanceMenu.textContent = money;
  againBtn.classList.toggle('hide');
  showModal(result);
};

// #######################################
// #######################################
// modal

const modal = document.querySelector('.modal');
const resultBox = document.querySelector('.game-result');
const closeModalBtn = document.querySelector('.close-modal');

const menuBox = document.querySelector('.menu');
const mainBox = document.querySelector('.main');

const showModal = (eventName) => {
  modal.classList.toggle('hide');
  menuBox.classList.toggle('opacity');
  mainBox.classList.toggle('opacity');

  if (eventName === 'won')
    resultBox.innerHTML = `Congratulations you won <span class="money-result green">${playerBet}$</span>`;
  else if (eventName === 'lost')
    resultBox.innerHTML = `You lost <span class="money-result red">${playerBet}$</span>`;
  else if (eventName === 'draw') resultBox.innerHTML = `It's a draw`;
  else if (eventName === 'not enough money')
    resultBox.textContent = `Unfortunately you don't have enough money`;
  else {
    // not enough money for a bet or no bet at all
    if (money) resultBox.textContent = `You have to bet some money`;
    else resultBox.textContent = `Unfortunately you don't have more money`;
  }
};

closeModalBtn.addEventListener('click', () => {
  menuBox.classList.toggle('opacity');
  mainBox.classList.toggle('opacity');
  modal.classList.toggle('hide');
});
