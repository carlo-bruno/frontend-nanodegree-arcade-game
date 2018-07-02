const titleScreen = document.querySelector('#title-modal'),
      overScreen = document.querySelector('#game-over-modal'),
      board = document.querySelector('#game-board'),
      scoreSpan = document.querySelector('#score'),
      hearts = document.querySelectorAll('.fa-heart'),
      finalScore = document.querySelector('.final-score');


const playBtn = document.querySelector('#play-game'),
      playAgain = document.querySelector('#play-again');

playBtn.addEventListener('click', function () {
    titleScreen.classList.add('hide-modal');
    board.classList.remove('hide-modal');
});

playAgain.addEventListener('click', function () {
    board.classList.remove('hide-modal');
    overScreen.classList.add('hide-modal');
});

const gameOver = function() {
    board.classList.add('hide-modal');
    overScreen.classList.toggle('hide-modal');
    finalScore.innerHTML = player.score;
};
