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
    // console.log('Snake x,y : ' + this.snake.x * 20 + ' ' + this.snake.y * 20);
    console.log('Fruit x,y : ' + this.fruit.foodX + ' ' + this.fruit.foodY);
    if (
      this.snake.x * 20 == this.fruit.foodX &&
      this.snake.y * 20 == this.fruit.foodY
    ) {
      console.log('ate apple');
      this.fruit.randomSpawn();
    }
  }

  createBoard() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

    this.ctx.fillStyle = 'black';
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
    this.ctx.fillStyle = 'rgb(255, 0, 0)';
    this.ctx.fillRect(this.foodX, this.foodY, 20, 20);
  }
  randomSpawn() {
    this.foodX = Math.floor((Math.random() * this.width) / 20) * 20;
    this.foodY = Math.floor((Math.random() * this.height) / 20) * 20;
  }
}

window.onload = function() {
  const startGame = new controller();

  document.addEventListener('keydown', function(evt) {
    startGame.moveSnake(evt);
  });
  setInterval(function() {
    startGame.createBoard();
  }, 1000 / 8);
};
