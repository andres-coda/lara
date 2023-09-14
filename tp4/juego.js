function iniciar() {
  // Mostrar la puntuación
  image(imgScore, -200, 100, 500, 500)
    fill(0);
  textSize(24);
  text(" " + puntuacion, 50, 350);

  // Dibujar ladrillos
  for (let i = 0; i < ladrilloFilas; i++) {
    for (let j = 0; j < ladrilloColumna; j++) {
      if (ladrillos[i][j].visible) {
        image(imgLadrillo, ladrillos[i][j].x, ladrillos[i][j].y, ladrilloWidth, ladrilloHeight);
      }
    }
  }

  // Dibujar el paddle
  image(imgTabla, tablaX, height - 40, 300, 40);

  // Dibujar la pelota
  image(imgPelota, pelotaX, pelotaY, 20, 20);
}

function moverPelota() {
  // Mover la pelota
  pelotaX += pelotaVelX;
  pelotaY += pelotaVelY;

  // Colisiones con los bordes
  if (pelotaX > width || pelotaX < 0) {
    pelotaVelX *= -1;
  }
  if (pelotaY < 0) {
    pelotaVelY *= -1;
  }

  if (pelotaY > height) {
    estado = "restart";
  }
}

function colision() {
  // Colisión con el paddle
  if (pelotaY >= height - 10 && pelotaX >= tablaX && pelotaX <= tablaX + 200) {
    pelotaVelY *= -1;
  }

  // Colisiones con los ladrillos
  for (let i = 0; i < ladrilloFilas; i++) {
    for (let j = 0; j < ladrilloColumna; j++) {
      let ladrillo = ladrillos[i][j];
      if (ladrillo.visible) {
        if (
          pelotaX + 10 >= ladrillo.x &&
          pelotaX - 10 <= ladrillo.x + ladrilloWidth &&
          pelotaY + 10 >= ladrillo.y &&
          pelotaY - 10 <= ladrillo.y + ladrilloHeight
          ) {
          pelotaVelY *= -1;
          ladrillo.visible = false;
          puntuacion++; // Incrementar el contador cuando se rompe un ladrillo
        }
      }
    }
  }
}

function moverPaddle() {
   //Mover el paddle con el mouse
    tablaX = constrain(mouseX - 200, 0, width - 200);
}

function gane() {
  if (puntuacion==20) {
    estado="win"
  }
}
