const game = new Game();

document.getElementById('start').addEventListener('click', function () {
  game.startGame();
});

document.querySelector('section.gameBoard').addEventListener('click', (e) => {
  game.handleClick(e);
});

document.getElementById('restart').addEventListener('click', function () {
  game.startGame();
});
