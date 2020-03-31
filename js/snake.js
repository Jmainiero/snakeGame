class snake {
  constructor(x, y) {
    this.defaultSize = 3;
    this.x = x;
    this.y = y;
    this.nextX = 0;
    this.nextY = 0;
    this.snakeTrail = new Array();
  }
  buildSnake() {
    this.segmentX = this.segmentY = 0;
    this.ctx = canvas.getContext('2d');
    var snakeImage = new Image();
    snakeImage.src = 'img/snake-graphics.png';
    this.x += this.nextX;
    this.y += this.nextY;
    // console.log(this.x + ' this is y' + this.y);
    this.snakeTrail.push({ x: this.x, y: this.y });
    while (this.snakeTrail.length > this.defaultSize) {
      this.snakeTrail.shift();
    }

    for (var i = 0; i < this.snakeTrail.length; i++) {
      if (i == this.snakeTrail.length - 1) {
        // this.ctx.fillStyle = 'rgb(0, 255, 0)';
        //Head
        if (this.nextX == 1) {
          //Right
          this.segmentX = 256;
          this.segmentY = 0;
        } else if (this.nextX == -1) {
          //Left
          this.segmentX = 192;
          this.segmentY = 64;
        }
        if (this.nextY == 1) {
          //UP
          this.segmentY = 64;
          this.segmentX = 256;
        } else if (this.nextY == -1) {
          //Down
          this.segmentY = 0;
          this.segmentX = 192;
        }
      } else if (i == 0) {
        //Tail
        if (this.snakeTrail[i + 1].y > this.snakeTrail[i].y) {
          // console.log('going up');
          // Up
          this.segmentY = 192;
          this.segmentX = 256;
        } else if (this.snakeTrail[i + 1].x > this.snakeTrail[i].x) {
          // console.log('going right');
          // Right
          this.segmentY = 128;
          this.segmentX = 256;
        } else if (this.snakeTrail[i + 1].y < this.snakeTrail[i].y) {
          // console.log('going down');
          // Down
          this.segmentY = 128;
          this.segmentX = 192;
        } else if (this.snakeTrail[i + 1].x < this.snakeTrail[i].x) {
          // console.log('going left');
          // Left
          this.segmentY = 192;
          this.segmentX = 192;
        }
      } else {
        //Horizontal Left-Right
        if (
          (this.snakeTrail[i - 1].x < this.snakeTrail[i].x &&
            this.snakeTrail[i + 1].x > this.snakeTrail[i].x) ||
          (this.snakeTrail[i + 1].x < this.snakeTrail[i].x &&
            this.snakeTrail[i - 1].x > this.snakeTrail[i].x)
        ) {
          // Horizontal Left-Right
          this.segmentY = 0;
          this.segmentX = 64;
        } else if (
          (this.snakeTrail[i - 1].x < this.snakeTrail[i].x &&
            this.snakeTrail[i + 1].y > this.snakeTrail[i].y) ||
          (this.snakeTrail[i + 1].x < this.snakeTrail[i].x &&
            this.snakeTrail[i - 1].y > this.snakeTrail[i].y)
        ) {
          // Angle Left-Down
          this.segmentY = 0;
          this.segmentX = 128;
        } else if (
          (this.snakeTrail[i - 1].y < this.snakeTrail[i].y &&
            this.snakeTrail[i + 1].y > this.snakeTrail[i].y) ||
          (this.snakeTrail[i + 1].y < this.snakeTrail[i].y &&
            this.snakeTrail[i - 1].y > this.snakeTrail[i].y)
        ) {
          // Vertical Up-Down
          this.segmentY = 64;
          this.segmentX = 128;
        } else if (
          (this.snakeTrail[i - 1].y < this.snakeTrail[i].y &&
            this.snakeTrail[i + 1].x < this.snakeTrail[i].x) ||
          (this.snakeTrail[i + 1].y < this.snakeTrail[i].y &&
            this.snakeTrail[i - 1].x < this.snakeTrail[i].x)
        ) {
          // Angle Top-Left
          this.segmentY = 128;
          this.segmentX = 128;
        } else if (
          (this.snakeTrail[i - 1].x > this.snakeTrail[i].x &&
            this.snakeTrail[i + 1].y < this.snakeTrail[i].y) ||
          (this.snakeTrail[i + 1].x > this.snakeTrail[i].x &&
            this.snakeTrail[i - 1].y < this.snakeTrail[i].y)
        ) {
          // Angle Right-Up
          this.segmentY = 64;
          this.segmentX = 0;
        } else if (
          (this.snakeTrail[i - 1].y > this.snakeTrail[i].y &&
            this.snakeTrail[i + 1].x > this.snakeTrail[i].x) ||
          (this.snakeTrail[i + 1].y > this.snakeTrail[i].y &&
            this.snakeTrail[i - 1].x > this.snakeTrail[i].x)
        ) {
          // Angle Down-Right
          this.segmentY = 0;
          this.segmentX = 0;
        }

        //Body
        // if (this.nextX == 1 || this.nextX == -1) {
        //   //Right
        //   this.segmentY = 0;
        //   this.segmentX = 64;
        // }
        // // else if (this.nextX == -1) {
        // //   //Left
        // //   this.segmentX = 192;
        // //   this.segmentY = 192;
        // // }
        // if (this.nextY == 1 || this.nextY == -1) {
        //   //UP
        //   this.segmentY = 64;
        //   this.segmentX = 128;
        // }
        // else if (this.nextY == -1) {
        //   //Down
        //   this.segmentY = 128;
        //   this.segmentX = 192;
        // }
      }
      // this.ctx.fillRect(
      //   this.snakeTrail[i].x * 20,
      //   this.snakeTrail[i].y * 20,
      //   20,
      //   20
      // );
      // console.log(snakeImage);

      this.ctx.drawImage(
        snakeImage,
        this.segmentX,
        this.segmentY,
        64,
        64,
        this.snakeTrail[i].x * 20,
        this.snakeTrail[i].y * 20,
        20,
        20
      );
    }
  }
}
