function pantallaInicio() {
  image(imgFondo, 0, 0, 800, 600)
    fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Breakout Game", width / 2, 250);
  textSize(16);
  text("Rompe todos los ladrillos, acompañate del paddle, muevelo con el mousse Presiona S para comenzar", width / 2, 280);
}

function pantallaWin() {
  image(imgFondo, 0, 0, 800, 600)
    fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Ganaste!", width / 2, height / 2 - 20);
  textSize(16);
  text("Juego Atari Breakout, version realizado por Del Federico Lara", width / 2, 450);
  text("Presiona R para reiniciar", width / 2, 500);
}

function pantallaPerdiste() {
   image(imgPerdiste, 0, 0, 800, 600)
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Perdiste", width / 2, height / 2 - 20);
  textSize(16);
  text("Presiona R para reiniciar", width / 2, height / 2 + 20);
}
