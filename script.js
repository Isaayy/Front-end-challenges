'use strict';

const cta = document.querySelector('.cta');
const header = document.querySelector('.header__heading');
const description = document.querySelector('.description');
const lifesBox = document.querySelector('.header__lifes');
const input = document.querySelector('.menu__input');
const guess = document.querySelector('.menu__btn')

// ###############################
// change layout
cta.addEventListener('click', () =>{
   
    description.style.transition = 'all 1s';
    description.style.opacity = "0";
    
    header.style.transition = 'all 1s';
    header.style.transform="translateX(-150%)";

    lifesBox.style.opacity = "1";
    input.style.opacity = "1";
    guess.style.opacity = "1";

    cta.style.display = 'none';
})

// ###############################
// keyword generator

const keyword = 'key';
let wordsLeft = keyword.length;

const keywordBox = document.querySelector('.keyword');
for(let i = 0 ; i<keyword.length ; i++){
    keywordBox.innerHTML += `<div class=keyword__letter-${i}></div>`;
}

// ###############################
// game starts

const inputValidation = (str) => {
    const lettersOnly = /^[a-z]+$/i;
    const valid = lettersOnly.test(str) ? true : false; // checking both empty and non number
    return valid;
}

let lifes = 5;
let game = true;


// ###############################
// game ends

const endGame = winOrLose => {
    input.classList.toggle('hidden');
    input.nextElementSibling.classList.toggle('hidden');

    if (winOrLose === 'win'){
        input.nextElementSibling.textContent = "You win";
        input.nextElementSibling.style.color = "green";
    }
    else {
        input.nextElementSibling.textContent = "You lost";
        input.nextElementSibling.style.color = "red";
    }

    guess.textContent = 'Play again'
    game = false;
}


// ###############################
// game

guess.addEventListener('click',() =>{
    if (inputValidation(input.value) && game){
        if (input.value.length <= 1){;
            if (keyword.includes(input.value)){
                const index = keyword.indexOf(input.value);
                document.querySelector(`.keyword__letter-${index}`).textContent = input.value;
                input.value = '';
                wordsLeft--;

                if (wordsLeft == 0){ // Winning game
                    endGame('win');
                }
            }
            else{
                lifes--;
                if (lifes == 0 ){ // Losing game
                    endGame('lose');
                }
                let life = document.querySelector(`.icon-${lifes+1}`);
                life.style.fill = "#333333";
            }
        }
        else { // TODO : WHOLE WORDS INPUT
            alert('b');
        }    
    }
})


// TODO :
// ? play again button ( reset settings )
// ? generating random number then index of array containing keywords from file? 