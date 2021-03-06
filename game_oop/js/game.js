class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayer();
    this.win = false;
    this.turns = 0;
    this.ready = false;
  }

  // set player to active
  get activePlayer() {
    return this.players.find((player) => player.active);
  }

  get ready() {
    return this.ready;
  }

  set ready(val) {
    this.ready = val;
  }

  // creates 2 players; chooses randomly who starts
  createPlayer() {
    const playerActive = Math.floor(Math.random() * 2) === 0;
    // let player2; (might not need it)
    player2 = new Player('Blue', 2, '#3688C3', !playerActive);
    player1 = new Player('Red', 1, '#FF0000', playerActive);
  }

  // adjusts HTML class active for active player
  playerTurn() {
    this.ready = true;
    const activePlayer = this.activePlayer;
    const inactivePlayer = this.players.find((player) => player.active);
    document.getElementById(activePlayer.id).classList.add('active');
    document.getElementById(inactivePlayer.id).classList.remove('active');
  }

  // switches player after each click
  switchPlayer() {
    for (let player in this.players) {
      player.active = player.active === true ? false : true;
    }
  }

  // winner winner chicken dinner
  gameOver(message, result) {
    const finish = document.getElementById('finish');
    const winnerTally = document.querySelector(
      `.${this.activePlayer.id}-wins span.win-num`
    );
    finish.classList.remove(
      'screen-win-tie',
      'screen-win-one',
      'screen-win-two'
    );
    let screenStyle;
    document.getElementById('board').style.display = 'none';

    if (result === 'draw') {
      screenStyle = 'screen-win-tie';
      finish.style.backgroundColor = '#54D17A';
    } else {
      screenStyle =
        this.activePlayer.id == 'player1' ? 'screen-win-one' : 'screen-win-two';
      finish.style.backgroundColor = this.activePlayer.color;
      winnerTally.textContent = parseInt(winnerTally.textContent) + 1;
    }

    finish.style.display = 'block';
    finish.classList.add(screenStyle);
    document.querySelector('p.message').textContent = message;
  }

  // after 9 turns && no winner, then call a draw
  checkDraw() {
    let draw = false;
    if (!this.win && this.turns === 9) {
      draw = true;
    }
    return draw;
  }

  // check vertical, horizontal, and diagonal for wins
  checkWin(target) {
    const owner = target.owner; //which owner?
    let win = false;

    // vertical wins
    for (let x = 0; x < this.board.cols - 2; x++) {
      for (let y = 0; y < this.board.rows; y++) {
        if (
          this.board.squares[x][y].owner === owner &&
          this.board.squares[x + 1][y].owner === owner &&
          this.board.squares[x + 2][y] === owner
        ) {
          win = true;
          return win;
        }
      }
    }

    // horizontal wins
    for (let x = 0; x < this.board.cols; x++) {
      for (let y = 0; y < this.board.rows - 2; y++) {
        if (
          this.board.squares[x][y].owner === owner &&
          this.board.squares[x][y + 1].owner === owner &&
          this.board.squares[x][y + 2] === owner
        ) {
          win = true;
          return win;
        }
      }
    }

    // diagonal wins
    if (
      this.board.spaces[0][0].owner === owner &&
      this.board.spaces[1][1].owner === owner &&
      this.board.spaces[2][2].owner === owner
    ) {
      win = true;
      return win;
    }
    if (
      this.board.spaces[0][2].owner === owner &&
      this.board.spaces[1][1].owner === owner &&
      this.board.spaces[2][0].owner === owner
    ) {
      win = true;
      return win;
    }
    return win;
  }

  updateGameState(token, targetSpace) {
    this.turns++;

    //mark the space and establish the token has been played
    targetSpace.mark(token);
    token.played = true;
    //check for a win or draw
    const gameIsOver = this.checkForWinner(targetSpace);
    const draw = this.checkForDraw();
    if (gameIsOver) {
      this.win = true;
      this.gameOver(`${this.activePlayer.name} wins!`, 'win');
    } else if (draw) {
      this.gameOver("It's a draw!", 'draw');
    } else {
      this.switchPlayers();
      this.playerTurn();
    }
  }

  handleClick(e) {
    if (this.ready) {
      if (
        e.target.classList.contains('box-filled-1') ||
        e.target.classList.contains('box-filled-2')
      ) {
        return;
      }
      if (!e.target.classList.contains('box')) {
        return;
      }
      //make game state false while game is updated
      this.ready = false;

      //mark the targeted DOM space
      const fillClass =
        this.activePlayer.id == 'player1' ? 'box-filled-1' : 'box-filled-2';
      e.target.classList.add(fillClass);

      //update the game state
      const spaceId = e.target.id;
      const token = this.activePlayer.activeToken;
      const targetSpace = this.board.findSpace(spaceId);
      this.updateGameState(token, targetSpace);
    }
  }

  startGame() {
    this.board.renderHTMLBoard();
    this.playerTurn();
  }
}
