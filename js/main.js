"use strict";

const playBtn = document.querySelector('.js_play_btn');
const initialBettingAMount = 50;  
const bettingAmount = document.querySelector('.js_betting_amount').value;
const message = document.querySelector('.js_message');

function getRandomNumber(max) {
    console.log(Math.ceil(Math.random() * max)); //para comprobar qué número sale
    return Math.ceil(Math.random() * max);
    ;
  }

function compareNumbers(){
const aleatNum = getRandomNumber(6);
const bettingNum = parseInt(document.querySelector('.js_betting_number').value);
console.log(bettingNum);
if (aleatNum === bettingNum) {
    console.log("es truthy");
    return true; //no funciona
} else {
    console.log("es falsy");
    return false; //no funciona
}
}

function calculateRemainingAmount () {
  
    const numberComparison = compareNumbers();
    if (numberComparison === true) {

    }
}

function paintHtml(){

}


function handleClick (event){
    event.preventDefault();
    compareNumbers (); 
    calculateRemainingAmount ();
    paintHtml ();  
    
}

playBtn.addEventListener('click', handleClick);