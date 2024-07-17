'use strict';

// Get secrete number and score
let SecreteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;

document.querySelector('.score').textContent = score;

const check = document.querySelector('.check');
const messageElement = document.querySelector('.message');

// game logic
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector('.score').textContent = score;

  if (!guess) {
    messageElement.textContent = 'input a Number';
  } else if (guess === SecreteNumber) {
    messageElement.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = SecreteNumber;

    document.querySelector('.highscore').textContent = score;
  } else if (score > 0) {
    if (guess > SecreteNumber) {
      messageElement.textContent = 'To high, try again';
    } else if (guess < SecreteNumber) {
      messageElement.textContent = 'To low, try again';
    }
    console.log(`score : ${score}`);
    score--;
    document.querySelector('.score').textContent = score;
    console.log(`score after failed guess: ${score}`);
  }
  if (score === 0) {
    messageElement.textContent = 'You lost the game';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').textContent = SecreteNumber;

    console.log(`final score: ${score}`);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  SecreteNumber = Math.trunc(Math.random() * 20 + 1);
  score = 5;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
