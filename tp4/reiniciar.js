function reiniciarJuego() {
  // Reiniciar todas las variables y el estado del juego
  puntuacion = 0;
  ladrillos = [];
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
pelotaX = width / 2;
pelotaY = height - 30;
estado = "play";
}
