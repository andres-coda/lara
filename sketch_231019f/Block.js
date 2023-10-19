class Block {
  constructor(x, y) {
    this.x=x;
    this.y=y;
  }
  dibujar() {
    fill(0,100,100);
    rect(this.x, this.y, 40, 20);
  }
}
