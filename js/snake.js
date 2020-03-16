class snake {
  constructor(x, y) {
    // this.maxWidth = maxWidth;
    // this.maxHeight = maxHeight;
    this.x = x;
    this.y = y;
    this.nX = -1;
    this.nY = -1;
    this.snake = [];
    this.buildSnake();
  }
  buildSnake() {
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = 'rgb(255, 0, 255)';
    this.ctx.fillRect(this.x * 20, this.y * 20, 20, 20);
    // console.log(
    //   Math.random(this.maxWidth) + ' this is y  ' + Math.random(this.maxHeight)
    // );
  }
}
