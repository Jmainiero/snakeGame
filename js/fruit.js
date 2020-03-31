class fruit {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.spawn = this.spawnFruit();
    this.foodX = 0;
    this.foodY = 0;
    this.randomSpawn();
  }
  spawnFruit() {
    this.ctx = canvas.getContext('2d');
    var fruitImg = new Image();
    fruitImg.src = 'img/snake-graphics.png';
    this.ctx.drawImage(
      fruitImg,
      0,
      192,
      64,
      64,
      this.foodX,
      this.foodY,
      20,
      20
    );
    // this.ctx.fillStyle = 'rgb(255, 0, 0)';
    // this.ctx.fillRect(this.foodX, this.foodY, 20, 20);
  }
  randomSpawn() {
    this.foodX = Math.floor((Math.random() * this.width) / 20) * 20;
    this.foodY = Math.floor((Math.random() * this.height) / 20) * 20;
  }
}
