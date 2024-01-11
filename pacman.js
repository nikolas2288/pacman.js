class Pacman {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.direction = DIRECTION_RIGHT;
  }
  moveProcess() {
    this.changeDirectionIfPossible();
    this.moveForword();
    if (this.checkCollision()) {
      this.moveBackwords();
    }
  }
  eat() {}
  moveBackwords() {}
  moveForwords() {
    switch (this.direction) {
    }
  }
  checkCollision() {}
  checkGhostCollision() {}
  changeDirectionIfPossible() {}
  changeAnimation() {}
  draw() {}
}
