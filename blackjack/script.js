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
            sumBetAmountBox.textContent = playerBet;
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

        playerBet = 0;
        sumBetAmountBox.textContent = playerBet;
        
        // draw cards
        drawCard('player',playerScore);
        // drawCard('dealer',dealerScore);
        // drawCard('player',playerScore);
        setTimeout(drawCard.bind(null,'dealer',dealerScore),2000);
        setTimeout(drawCard.bind(null,'player',playerScore),2000);

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

let playerScoreBox = document.querySelector('.player-score');
let dealerScoreBox = document.querySelector('.dealer-score');

const drawCard = (currentPlayer,score) => {
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
    if (currentPlayer == 'player'){
        playerCardsBox.innerHTML += `<img src="img/${drawnValue+drawnSuit}.png" alt="card" class="card slide-in">`
        playerScoreBox.innerHTML = "5";
        playerScore = score;
       
    }
        
    else{
        console.log(dealerScoreBox,dealerScoreBox.textContent);
        dealerCardsBox.innerHTML += `<img src="img/${drawnValue+drawnSuit}.png" alt="card">`
        dealerScoreBox.textContent = "5";
        dealerScore = score;
    }
}
console.log(dealerScoreBox,dealerScoreBox.textContent);
// TODO :
// fix / add slide-in when drawing cards
// textContent - display value of cards

