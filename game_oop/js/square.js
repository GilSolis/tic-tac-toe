class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `square-${x}-${y}`;
    this.color = null;
  }

  get htmlSquare() {
    return document.getElementById(this.id);
  }

  get owner() {
    if (this.color === null) {
      return null;
    } else {
      return this.color.owner.name;
    }
  }

  renderHTMLSquare() {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', this.id);
    document.querySelector('section.gameBoard').appendChild(square);
  }

  /**
   * Updates space to reflect a token has been dropped into it.
   * @param {Object} color - The dropped token
   */
  mark(color) {
    this.color = color;
  }
}
