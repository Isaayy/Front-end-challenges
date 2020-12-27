'use strict';

let money = 500;
let playerBet = 0 ;
let playerScore = 0;
let dealerScore = 0;

// #######################################
// #######################################
// BET

// Bet ammount 
const addBetAmount = document.querySelectorAll('.bet-amount');
const sumBetAmountBox = document.querySelector('.player-bet');
const placeBet = document.querySelector('.bet-btn');
const betBox = document.querySelector('.bet');
const customBet = document.querySelector('.custom-bet-amount');
const balance = document.querySelector('.balance');
const balanceMenu = document.querySelector('.balance-menu');

for (const betAmount of addBetAmount){
    betAmount.addEventListener('click',() => {
        if(playerBet<money){
            if(betAmount.textContent === "All in")
                playerBet = money;
            else{
                if (playerBet + Number(betAmount.textContent) > money)
                    playerBet = money;
                else 
                    playerBet += Number(betAmount.textContent);
            }
            sumBetAmountBox.textContent = `${playerBet}$`;
        }
    })
}

// Place bet
const menuFront = document.querySelector('.menu__side--front');
const menuBack = document.querySelector('.menu__side--back');
const placedBetBox = document.querySelector('.placed-bet');


placeBet.addEventListener('click',() =>{
    if (playerBet){
        betBox.textContent = playerBet;
        placedBetBox.classList.toggle('hidden');
        let audio = new Audio('img/drop.mp3');
        audio.play();
        
        // draw cards
        drawCard('player',playerScore);
        drawCard('dealer',dealerScore);
        drawCard('player',playerScore);
        drawCard();
        // setTimeout(drawCard.bind(null,'dealer',dealerScore),2000);
        // setTimeout(drawCard.bind(null,'player',playerScore),2000);

        // switch menu
        menuFront.classList.add('swipe-front');
        menuBack.classList.add('swipe-back');
    }
    else alert('In order to play you have to place a bet')
    
})

// Custom bet value
customBet.addEventListener('blur',() => {
    if (customBet.value > 0){
        if (customBet.value > money)
            playerBet = money;
        else
            playerBet = customBet.value;
        sumBetAmountBox.textContent = playerBet;
    }
    else alert('Bet must be greater than 0')
})

// Clear bet
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    playerBet = 0 ;
    sumBetAmountBox.textContent = playerBet;
    customBet.value = ''
})


// #######################################
// #######################################
// Draw cards

const playerCardsBox = document.querySelector('.player-cards');
const dealerCardsBox = document.querySelector('.dealer-cards');


const drawCard = (currentPlayer,score) => {
    console.log(score);
    if (!canPlay) return

    const values = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    const suits = ['C','D','H','S'];

    const randomValuesIndex = Math.floor(Math.random() * values.length);
    const randomSuitsIndex = Math.floor(Math.random() * suits.length);

    const drawnValue = values[randomValuesIndex];
    const drawnSuit = suits[randomSuitsIndex];

    if (typeof drawnValue == 'number'){
        score += drawnValue;
    }
    else {
        // TODO exception 
        score += 10;
    }

    if (currentPlayer === 'player'){
        playerCardsBox.innerHTML += `<img src="img/${drawnValue+drawnSuit}.png" alt="card" class="card slide-in">`
        playerScore = score;
        document.querySelector('.player-score').textContent = score; // works now 
        checkScore("player");
    }
        
    else if (currentPlayer === 'dealer'){
        dealerCardsBox.innerHTML += `<img src="img/${drawnValue+drawnSuit}.png" alt="card">`
        dealerScore = score;
        document.querySelector('.dealer-score').textContent = score;
    }
    else { // backside
        dealerCardsBox.innerHTML += `<img src="img/gray_back.png" alt="card">"`
    }
   
}

// #######################################
// #######################################
// HIT / STAND / DOUBLE / SPLIT / AGAIN

let canPlay = true;
const optionButtons = document.querySelectorAll('.btn-option');
const hitBtn = document.querySelector('.hit');
const standBtn = document.querySelector('.stand');
const doubleBtn = document.querySelector('.double');
const splitBtn = document.querySelector('.split');
const againBtn = document.querySelector('.again');


hitBtn.addEventListener('click', () => {
    drawCard('player',playerScore);
})

againBtn.addEventListener('click',() => {

    againBtn.classList.toggle('hide');
    menuFront.classList.remove('swipe-front');
    menuBack.classList.remove('swipe-back');
    playerBet = 0
    sumBetAmountBox.textContent = playerBet ;
    betBox.textContent = playerBet;
    placedBetBox.classList.toggle('hidden');
    balance.textContent = money;
    customBet.value = ''

    canPlay = true;
    playerCardsBox.innerHTML = '';
    dealerCardsBox.innerHTML = '';
});


// #######################################
// #######################################
// check score 

const checkScore = (currentPlayer) => {
    if (playerScore>21){ 
        canPlay = false;
        // todo go back to place bet menu

        if (currentPlayer === "player") {
            money -= Number(betBox.textContent);
            balanceMenu.textContent = `${money}$`;
            showModal('lost');
            againBtn.classList.toggle('hide');
        }
        // disable buttons
        for(const btn of optionButtons)
            btn.classList.add('blur-bgc');
    }
}

// #######################################
// #######################################
// modal

const modal = document.querySelector('.modal');
const resultBox = document.querySelector('.game-result');
const closeModalBtn = document.querySelector('.close-modal');

const menuBox = document.querySelector('.menu');
const mainBox = document.querySelector('.main');

const showModal = (result) => {
    menuBox.classList.toggle('opacity');
    mainBox.classList.toggle('opacity');
    if (result === "win"){

    }
    else {
        resultBox.innerHTML = `You lost <span class="money-result red">${playerBet}$</span>`
        modal.classList.toggle('hide');
    }
} 

closeModalBtn.addEventListener('click',() => {
    menuBox.classList.toggle('opacity');
    mainBox.classList.toggle('opacity');
    modal.classList.toggle('hide');
})

// TODO :
// fix / add slide-in when drawing cards
// unique cards

