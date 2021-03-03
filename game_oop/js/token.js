class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.marked = false;
  }

  mark() {
    this.marked = true;
  }
}
