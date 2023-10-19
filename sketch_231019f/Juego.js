class Juego {
  constructor() {
    this.blocks = [];
    this.tabla = new Tabla();
    
    for (let i = 0; i < 10; i++) {
      this.blocks [i] = (new Block(i*40, 0));
    }
  }

  dibujar() {
    this.tabla.dibujar();
    this.dibujarLadrillos();
  }


  dibujarLadrillos() {
    for (let i = 0; i < blocks.length; i++) {
      this.blocks[i].dibujar(x,y);
    }
  }
}
