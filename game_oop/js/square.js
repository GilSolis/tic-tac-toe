class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `square-${x}-${y}`;
    this.token = null;
  }

  get owner() {
    if (this.token === null) {
      return null;
    } else {
      return this.token.owner;
    }
  }

  // draw SVG space goes here if we decide to go with it

  /**
   * Updates space to reflect a token has been dropped into it.
   * @param {Object} token - The dropped token
   */
  mark(token) {
    this.token = token;
  }
}
