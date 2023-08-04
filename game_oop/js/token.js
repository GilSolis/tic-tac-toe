// thank you treehouse

class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.played = false;
  }

  //Use the ID of the Token object to get the DOM representation
  get htmlToken() {
    return document.getElementById(this.id);
  }
}
