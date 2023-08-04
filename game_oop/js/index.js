let game = null

document.getElementById('start').addEventListener('click', function () {
  document.querySelector("section.gameBoard").innerHTML = ''
  document.querySelector('h2').innerHTML = ''
  game = new Game()
  game.startGame();
});

document.querySelector('section.gameBoard').addEventListener('click', (e) => {

  game.handleClick(e);
});

