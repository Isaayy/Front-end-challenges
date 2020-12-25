'use strict'

let money = 500;
let playerBet = 0 ;

// #######################################
// #######################################
// BET

// Bet ammount 
const addBetAmount = document.querySelectorAll('.bet-amount');
const sumBetAmountBox = document.querySelector('.player-bet');
const placeBet = document.querySelector('.bet-btn');
const betBox = document.querySelector('.bet');

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
    
    
        // switch menu
        menuFront.classList.add('swipe-front');
        menuBack.classList.add('swipe-back');
    }
    else {
        alert('In order to play you have to place a bet')
    }
})

// Clear bet
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    playerBet = 0 ;
    sumBetAmountBox.textContent = playerBet;
})


// #######################################
// #######################################
// Draw cards
