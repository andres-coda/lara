class Juego {
  constructor() {
    this.blocks = [];
    this.tabla = new Tabla();
    
    for (let i = 0; i < 20; i++) {
      this.blocks[i] = (new Block(i*40, 20));
    }
  }  
  
  
  dibujar() {
    this.tabla.dibujar();
    this.dibujarLadrillos();
  }
  dibujarLadrillos() {
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].dibujar();
    }
  }
}
