"use strict";
const playBtn = document.querySelector('.js_play_btn');
const restartBtn = document.querySelector('.js_restart_btn');
const message = document.querySelector('.js_message');
const balance = document.querySelector('.js_balance');
let initialAmount = 50;
balance.innerHTML= `${initialAmount}`;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    ;
  }

function play(aleatNum, bettingNum){
const bettingAmount = parseInt(document.querySelector('.js_betting_amount').value);
console.log(aleatNum, bettingNum, bettingAmount, initialAmount);

if (initialAmount < bettingAmount) {
    message.innerHTML = "No dispones de tanto saldo... Reajusta tu apuesta!"
    return initialAmount;
}
if (bettingNum === 0) {
    message.innerHTML = "No has elegido número... Reajusta tu apuesta!"
    return initialAmount;
}

if (initialAmount > 0 && initialAmount < 200) {

    console.log(initialAmount);
    if (aleatNum === bettingNum) {
        message.innerHTML = "Has ganado el doble de lo apostado";
        initialAmount = initialAmount + (bettingAmount*2);
        console.log(`ganas! ahora tienes ${initialAmount}`);
    } else {
        message.innerHTML = "Has perdido lo apostado";
        initialAmount = initialAmount - bettingAmount;
        console.log(`pierdes! ahora tienes ${initialAmount}`);
    }
    balance.innerHTML= `${initialAmount}`;
}

if (initialAmount <= 0){
    message.innerHTML = "¡HAS PERDIDO! ¿Quieres volver a intentarlo?"
    playBtn.classList.add ('collapsed');
    restartBtn.classList.remove('collapsed');
}
if (initialAmount >= 200) {
    message.innerHTML = "¡HAS GANADO! ¿Quieres volver a jugar?"
    playBtn.classList.add ('collapsed');
    restartBtn.classList.remove('collapsed');
}
return initialAmount;
}


function handleClickPlay (event){
    event.preventDefault();
    const aleatNum = getRandomNumber(6);
    const bettingNum = parseInt(document.querySelector('.js_betting_number').value);
    initialAmount = play (aleatNum, bettingNum); 
    
   /*  paintHtml ();  */ 
   /*  calculateAmounts (); */
}

function handleClickRestart (event) {
    event.preventDefault();
    initialAmount = 50;
    balance.innerHTML= `${initialAmount}`;
    playBtn.classList.remove ('collapsed');
    restartBtn.classList.add('collapsed');
    
}

playBtn.addEventListener('click', handleClickPlay);

restartBtn.addEventListener('click', handleClickRestart);