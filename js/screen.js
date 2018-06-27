const titleScreen = document.querySelector('#title-modal');
const scoreScreen = document.querySelector('#score-modal');
const playBtn = document.querySelector('#play-game');
const playAgain = document.querySelector('#play-again');

playBtn.addEventListener('click', function () {
    titleScreen.classList.add('hide-modal');
});

playAgain.addEventListener('click', function () {
    scoreScreen.classList.add('hide-modal');
});