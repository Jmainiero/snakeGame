class snake {
  constructor(maxWidth, maxHeight, x, y) {
    this.defaultSize = 3;
    this.x = x;
    this.y = y;
    this.nextX;
    this.nextY;
    snakeTrail: this.snakeTrail = new Array();
    this.render();
  }

  buildSnake() {
    console.log(this.snakeTrail);
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = 'rgb(0, 255, 255)';
    this.x += this.nextX;
    this.y += this.nextY;

    console.log(this.x + ' this is y: ' + this.y);
    this.snakeTrail.push({ x: this.x, y: this.y });
    // while (this.snakeTrail.length > this.defaultSize) {
    //   this.snakeTrail.shift();
    // }

    for (var i = 0; i < this.snakeTrail.length; i++) {
      this.ctx.fillRect(
        this.snakeTrail[i].x * 20,
        this.snakeTrail[i].y * 20,
        20,
        20
      );
    }
  }
  render() {
    console.log(this.snakeTrail);
    setInterval(function() {
      console.log('Calling');
      this.buildSnake;
    }, 1000);
  }
}
