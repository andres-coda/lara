//let tabla;
let juego;
this.blocks = [];
//let blocks = [];

function setup() {
  createCanvas(900, 600);
  juego= new Juego();
  //for (let i = 0; i < 10; i++) {
  //  blocks.push(new Block(i*40, 0));
  //}
}


function draw() {
  background(0);
  juego.dibujar();
  //for (let i = 0; i < blocks.length; i++) {
  //   blocks[i].show();
  //}
}
