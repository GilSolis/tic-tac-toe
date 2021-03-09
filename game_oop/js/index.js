const game = new Game();

document.getElementById('start').addEventListener('click', function () {
  game.startGame();
});

document.querySelector('section.gameBoard').addEventListener('click', (e) => {

  game.handleClick(e);
});

document.getElementById('restart').addEventListener('click', function () {
  function deleteChild() {
    var e = document.querySelector("section.gameBoard");
    //e.firstElementChild can be used. 
    var child = e.lastElementChild;
    while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
    }
  }
  deleteChild()
  document.querySelector('h2').innerHTML = ''
  Game.win = false;
  Game.turns = 0;
  Game.ready = false
  game.startGame();
});
