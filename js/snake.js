class snake {
  constructor(maxWidth, maxHeight) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.x = this.maxWidth / 30;
    this.y = this.maxHeight / 30;
    this.snake = [];
    this.buildSnake();
    this.movement();
  }
  buildSnake() {
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = 'rgb(255, 0, 255)';
    this.ctx.fillRect(this.x, this.y, 20, 20);
  }
  movement() {
    document.addEventListener('keydown', function(e) {
      // console.log('moving');
      switch (e.keyCode) {
        case 37:
          this.x = -1;
          this.y = 0;
          break;
        case 38:
          this.x = 0;
          this.y = -1;
          break;
        case 39:
          this.x = 1;
          this.y = 0;
          break;
        case 40:
          this.x = 0;
          this.y = 1;
          break;
      }
      snake.buildSnake();
    });
  }
}
