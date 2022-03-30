'use strict';
const playBtn = document.querySelector('.js_play_btn');
const restartBtn = document.querySelector('.js_restart_btn');
const message = document.querySelector('.js_message');
const balance = document.querySelector('.js_balance');
let balanceAmount = 50;
balance.innerHTML = `${balanceAmount}`;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function endGame() {
  if (balanceAmount <= 0) {
    message.innerHTML = '¡HAS PERDIDO! ¿Quieres volver a intentarlo?';
    playBtn.classList.add('collapsed');
    restartBtn.classList.remove('collapsed');
  }
  if (balanceAmount >= 200) {
    message.innerHTML = '¡HAS GANADO! ¿Quieres volver a jugar?';
    playBtn.classList.add('collapsed');
    restartBtn.classList.remove('collapsed');
  }
}

function play(aleatNum, bettingNum, bettingAmount) {
  if (aleatNum === bettingNum) {
    message.innerHTML = 'Has ganado el doble de lo apostado';
    balanceAmount = balanceAmount + bettingAmount * 2;
    console.log(`ganas! ahora tienes ${balanceAmount}`);
  } else {
    message.innerHTML = 'Has perdido lo apostado';
    balanceAmount = balanceAmount - bettingAmount;
    console.log(`pierdes! ahora tienes ${balanceAmount}`);
  }
  balance.innerHTML = `${balanceAmount}`;
  endGame();
}

function checkAmounts(aleatNum, bettingNum, bettingAmount) {
  console.log(aleatNum, bettingNum, bettingAmount, balanceAmount);

  if (balanceAmount < bettingAmount) {
    message.innerHTML = 'No dispones de tanto saldo... Reajusta tu apuesta!';
    return false;
  } else if (bettingNum === 0) {
    message.innerHTML = 'No has elegido número... Reajusta tu apuesta!';
    return false;
  } else if (
    bettingAmount === 0 ||
    isNaN(bettingAmount) ||
    Math.sign(bettingAmount) === -1
  ) {
    message.innerHTML = '¿Cuánto quieres apostar?... Reajusta tu apuesta!';
    return false;
  } else if (balanceAmount < 0 && balanceAmount > 200) {
    return false;
  } else {
    return true;
  }
}

function handleClickPlay(event) {
  event.preventDefault();
  const aleatNum = getRandomNumber(6);
  const bettingAmount = parseInt(
    document.querySelector('.js_betting_amount').value
  );
  const bettingNum = parseInt(
    document.querySelector('.js_betting_number').value
  );
  const correctAmounts = checkAmounts(aleatNum, bettingNum, bettingAmount);
  if (correctAmounts === true) {
    play(aleatNum, bettingNum, bettingAmount);
  }
}

function handleClickRestart(event) {
  event.preventDefault();
  balanceAmount = 50;
  balance.innerHTML = `${balanceAmount}`;
  playBtn.classList.remove('collapsed');
  restartBtn.classList.add('collapsed');
}

playBtn.addEventListener('click', handleClickPlay);

restartBtn.addEventListener('click', handleClickRestart);
