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

  // get ready() {
  //   return this.ready;
  // }

  // set ready(val) {
  //   this.ready = val;
  // }

  // creates 2 players; chooses randomly who starts
  createPlayer() {
    const playerActive = Math.floor(Math.random() * 2) === 0;
    let player2 = new Player('blue', 'p2', '#0066FF', !playerActive);
    let player1 = new Player('red', 'p1', '#FF0000', playerActive);
    return [player1, player2];
  }

  // adjusts HTML class active for active player
  playerTurn() {
    this.ready = true;
    const inactivePlayer = this.players.find((player) => !player.active);
    const activePlayer = this.activePlayer;
    document.getElementById(inactivePlayer.id).classList.remove('active');
    document.getElementById(activePlayer.id).classList.add('active');
  }

  // switches player after each click
  switchPlayer() {
    for (let player of this.players) {
      player.active = player.active === true ? false : true;
    }
  }

  // to tally or not to tally
  // winnerTally(message, result) {
  //   const winnerTally = document.querySelector(
  //     `.${this.activePlayer.id}-wins span.win-num`
  //   );
  // }

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
    const owner = target.owner;
    let win = false;

    // vertical wins
    for (let x = 0; x < this.board.cols - 2; x++) {
      for (let y = 0; y < this.board.rows; y++) {
        if (
          this.board.squares[x][y].owner === owner &&
          this.board.squares[x + 1][y].owner === owner &&
          this.board.squares[x + 2][y].owner === owner
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
          this.board.squares[x][y + 2].owner === owner
        ) {
          console.log('horizontal win');
          win = true;
          return win;
        }
      }
    }

    // //diagonal wins
    // if (
    //   this.board.squares[0][0].owner === owner &&
    //   this.board.squares[1][1].owner === owner &&
    //   this.board.squares[2][2].owner === owner
    // ) {
    //   console.log('diagonal 1 win');
    //   win = true;
    //   return win;
    // }
    // if (
    //   this.board.squares[0][2].owner === owner &&
    //   this.board.squares[1][1].owner === owner &&
    //   this.board.squares[2][0].owner === owner
    // ) {
    //   console.log('diagonal 2 win');
    //   win = true;
    //   return win;
    // }
    return win;
  }

  updateGameState(token, targetSquare) {
    this.turns++;

    //mark the space and establish the token has been played
    targetSquare.mark(token);
    // token.played = true;

    //check for a win or draw
    const gameOver = this.checkWin(targetSquare);
    const draw = this.checkDraw();
    if (gameOver) {
      this.win = true;
      document.querySelector(
        'h2'
      ).innerHTML = `${this.activePlayer.name} wins!`;
    } else if (draw) {
      document.querySelector('h2').innerHTML = `${"It's a draw!"}`;
    } else {
      this.switchPlayer();
      this.playerTurn();
    }
  }

  // color square with player assigned color
  handleClick(e) {
    if (this.ready) {
      if (e.target.classList.contains('taken')) {
        return;
      } else if (!e.target.classList.contains('square')) {
        return;
      }

      //make game state false while game is updated
      this.ready = false;

      // mark the targeted DOM space
      this.activePlayer.id == 'p1'
        ? e.target.classList.add('red')
        : e.target.classList.add('blue');

      e.target.classList.add('taken');

      //update the game state
      const squareID = e.target.id;
      const token = this.activePlayer.activeColor;
      const targetSquare = this.board.findSquare(squareID);
      this.updateGameState(token, targetSquare);
    }
  }

  startGame() {
    this.board.renderHTMLBoard();
    this.playerTurn();
  }
}
