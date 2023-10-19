class Tabla {
  constructor() {
    this.x = width/2;
    this.y = height-20;
    this.w = 180;
    this.h = 20;
  }

  dibujar() {
    rectMode(CENTER);
    fill(0, 105, 132);
    rect(this.x, this.y, this.w, this.h);
    this.x = mouseX;
  }
}
