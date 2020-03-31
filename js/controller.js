class controller {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.rows = 600;
    this.cols = 600;
    this.pnt = 20;
    this.snake = new snake(this.cols, this.rows, 0, 0);
    this.fruit = new fruit(this.cols, this.rows);
    this.init = this.boardInit();
    this.board = this.createBoard();
  }

  moveSnake(evt) {
    switch (evt.keyCode) {
      case 37:
        this.snake.nextX = -1;
        this.snake.nextY = 0;
        break;
      case 38:
        this.snake.nextX = 0;
        this.snake.nextY = -1;
        break;
      case 39:
        this.snake.nextX = 1;
        this.snake.nextY = 0;
        break;
      case 40:
        this.snake.nextX = 0;
        this.snake.nextY = 1;
        break;
    }
    // this.snake.buildSnake();
  }

  checkSnake() {
    if (this.snake.x < 0) {
      this.snake.x = this.cols / this.pnt - 1;
    }
    if (this.snake.x > this.cols / this.pnt - 1) {
      this.snake.x = 0;
    }

    if (this.snake.y < 0) {
      this.snake.y = this.rows / this.pnt - 1;
    }
    if (this.snake.y > this.rows / this.pnt - 1) {
      this.snake.y = 0;
    }

    console
      .log
      // 'Snake x,y : ' + this.snake.x * this.pnt + ' ' + this.snake.y * this.pnt
      ();
    // console.log('Fruit x,y : ' + this.fruit.foodX + ' ' + this.fruit.foodY);
    if (
      this.snake.x * this.pnt == this.fruit.foodX &&
      this.snake.y * this.pnt == this.fruit.foodY
    ) {
      console.log('ate apple');
      this.fruit.randomSpawn();
      this.snake.defaultSize++;
      console.log(this.snake.defaultSize);
    }
  }

  createBoard() {
    // this.ctx.fillStyle = 'black';
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    var img = new Image();
    img.src = 'img/terrain.png';
    var pattern = this.ctx.createPattern(img, 'repeat');
    this.ctx.fillStyle = pattern;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.snake.buildSnake();
    this.fruit.spawnFruit();
    this.checkSnake();
  }
  boardInit() {
    this.canvas.width = this.rows;
    this.canvas.height = this.cols;
  }
}

window.onload = function() {
  const startGame = new controller();

  document.addEventListener('keydown', function(evt) {
    startGame.moveSnake(evt);
  });
  setInterval(function() {
    startGame.createBoard();
  }, 1000 / 5);
};
