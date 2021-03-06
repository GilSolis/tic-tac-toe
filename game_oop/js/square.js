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

  renderHTMLSquare() {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', this.id);
    document.querySelector('#gameBoard').appendChild(square);
  }

  /**
   * Updates space to reflect a token has been dropped into it.
   * @param {Object} token - The dropped token
   */
  mark(token) {
    this.token = token;
  }
}
