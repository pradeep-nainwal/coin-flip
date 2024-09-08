const result = document.querySelector('.result');
const score = document.querySelector('.score');
const coinContainer = document.getElementById('coinContainer');
const coin = document.getElementById('coin');

let headsCount = 0;
let tailsCount = 0;

function flipCoin() {
  flipSound.play();
  coin.classList.add('flip');

  setTimeout(() => {
    const random = Math.random();
    if (random < 0.5) {
      result.innerHTML = 'Head';
      coin.src = 'image/head.png';
      headsCount++;
    } else {
      result.innerHTML = 'Tail';
      coin.src = 'image/tails.png';
      tailsCount++;
    }

    score.innerHTML = `Heads: ${headsCount} | Tails: ${tailsCount}`;
    coin.classList.remove('flip');
  }, 500);
}

function resetGame() {
  result.innerHTML = '';
  headsCount = 0;
  tailsCount = 0;
  score.innerHTML = `Heads: 0 | Tails: 0`;
}

document.getElementById('flipButton').addEventListener('click', flipCoin);
document.getElementById('resetButton').addEventListener('click', resetGame);