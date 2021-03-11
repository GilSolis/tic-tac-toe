class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `square-${x}-${y}`;
    this.token = null;
  }

  get htmlSquare() {
    return document.getElementById(this.id);
  }

  get owner() {
    if (this.token === null) {
      return null;
    } else {
      return this.token.owner.name;
    }
  }

  // this creates the squares that together creates the board
  renderHTMLSquare() {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', this.id);
    document.querySelector('section.gameBoard').appendChild(square);
  }

  // Updates space to reflect a token has been dropped into it.
  mark(token) {
    this.token = token;
  }
}
