// https://youtu.be/fRv_nAMudnY?si=m0IjETWpexe5_pDH

let pelotaX, pelotaY; // Posición de la pelota
let pelotaVelX = 5, pelotaVelY = -5; // Velocidad de la pelota
let tablaX; // Posición del paddle
let ladrilloFilas = 4; // Cantidad de filas de ladrillos
let ladrilloColumna = 5; // Cantidad de columnas de ladrillos
let ladrilloWidth, ladrilloHeight; // Tamaño de los ladrillos
let ladrillos = []; // Array para almacenar los ladrillos
let puntuacion = 0; // Puntuación
let estado= "start"
  let imgPelota, imgTabla, imgLadrillo;
let imgFondo;
let imgScore;
let imgPerdiste;

function preload() {
  imgPelota = loadImage('./data/fotopelota.png');
  imgTabla = loadImage('./data/fotoladrillo.png');
  imgLadrillo = loadImage('./data/fotobrick.png');
  imgFondo= loadImage('./data/fondo.jpg');
  imgScore= loadImage('./data/fotoscore.png');
  imgPerdiste= loadImage('./data/perdiste.png');
}

function setup() {
  createCanvas(800, 600);
  estado = "start";

  ladrilloWidth= 160
    ladrilloHeight = 40;
  // Crear los ladrillos
  for (let i = 0; i < ladrilloFilas; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < ladrilloColumna; j++) {
      ladrillos[i][j] = {
      x:
      j * ladrilloWidth,
      y:
      i * ladrilloHeight,
      visible:
      true
    };
  }
}
tablaX = 200; // Posición inicial del paddle
// Posición inicial de la pelota
pelotaX = width / 2;
pelotaY = height - 30;
}

function draw() {
  background(0);

  if (estado === "start") {
    pantallaInicio();
  } else if (estado === "play") {
    iniciar();
    moverPelota();
    colision();
    moverPaddle();
    gane();
  } else if (estado === "win") {
    pantallaWin();
  } else if (estado === "restart") {
    pantallaPerdiste();
  }
}

function keyPressed() {
  if (key === 's' ) {
    if (estado === "start" ) {
      estado = "play";
      iniciar();
    }
  } else if (key === 'r'  && (estado === "restart" || estado === "win")) { // Tecla "R" para reiniciar
    estado = "restart";
    reiniciarJuego();
  }
}
