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
        const square = new Square(x, y); //still working on it
        col.push(square);
      }

      squares.push(col);
    }

    return squares;
  }

  // svgs go here if we feel like it
}
