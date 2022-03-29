"use strict";
const playBtn = document.querySelector('.js_play_btn');
const message = document.querySelector('.js_message');
const remainingAmount = document.querySelector('.js_remaining_amount');

function getRandomNumber(max) {
     //para comprobar qué número sale
    return Math.ceil(Math.random() * max);
    ;
  }

function compareNumbers(){
const aleatNum = getRandomNumber(6);
const bettingNum = parseInt(document.querySelector('.js_betting_number').value);
console.log(bettingNum);
console.log(aleatNum);
if (aleatNum === bettingNum) {
    message.innerHTML = "Has ganado el doble de lo apostado";
    return true; //no funciona
} else {
    message.innerHTML = "Has perdido lo apostado";
    return false; //no funciona
}
}

function calculateRemainingAmount () {
    const bettingAmount = parseInt(document.querySelector('.js_betting_amount').value);
    console.log (bettingAmount);
    const remainingAmount = parseInt(document.querySelector('.js_remaining_amount').innerHTML);
    let newRemainingAmount = 0;
    console.log (remainingAmount);
    const numberMatch = compareNumbers();
       if (numberMatch === true) {
           console.log (bettingAmount);
            newRemainingAmount = (remainingAmount - bettingAmount)*2;
            return newRemainingAmount;
       } else {
            newRemainingAmount = remainingAmount - bettingAmount*2;
            return newRemainingAmount;
       } 
       remainingAmount.innerHTML = `${newRemainingAmount}`
       
      
    }
/* function paintHtml(){
    const numberMatch = compareNumbers();
    if (numberMatch === true) {
        message.innerHTML = "Has ganado el doble de lo apostado";
    
    } else { 
        
        
    }
} */


function handleClick (event){
    event.preventDefault();
    compareNumbers (); 
   /*  paintHtml ();  */ 
    calculateRemainingAmount ();
}

playBtn.addEventListener('click', handleClick);