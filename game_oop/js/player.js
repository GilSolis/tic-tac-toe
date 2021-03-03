class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.token = this.createTokens(5);
  }

  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }

    return tokens;
  }

  get unusedToken() {
    return this.tokens.filter((token) => !token.marked);
  }

  get activeToken() {
    return this.unusedToken[0];
  }

  /**
   * Check if a player has any undropped tokens left
   * @return {Boolean}
   */
  checkTokens() {
    return this.unusedTokens.length == 0 ? false : true;
  }
}
