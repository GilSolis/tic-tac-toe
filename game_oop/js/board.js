class Board {
  constructor() {
    this.rows = 3;
    this.columns = 3;
    this.squares = this.createSquares();
  }

  //generates 2D array of spaces
  createSquares() {
    const squares = [];

    for (let x = 0; x < this.columns; x++) {
      const col = [];
      for (let y = 0; y < this.rows; y++) {
        const square = new Square(x, y);
        col.push(square);
      }
      squares.push(col);
    }
    return squares;
  }

  // create game board using the square array of objects
  renderHTMLBoard() {
    for (let column of this.squares) {
      for (let square of column) {
        square.renderHTMLSquare();
      }
    }
  }

  // Get an individual space object
  findSquare(squareID) {
    let targetSquare;
    for (let column of this.squares) {
      for (let square of column) {
        if (square.id == squareID) {
          targetSquare = square;
        }
      }
    }
    return targetSquare;
  }
}
