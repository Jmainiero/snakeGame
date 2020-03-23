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

  createBoard() {
    console.log('calling');
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    // let nCols = Math.floor(this.rows / 30);
    // let nRows = Math.floor(this.cols / 30);
    // for (let i = 0; i < nRows * 2; i++) {
    //   for (let j = 0; j < nCols * 2; j++) {
    //     if ((i + j) % 2 == 0) {
    //       // console.log((i + j) % 2 == 0);
    //       this.ctx.fillStyle = 'rgb(36, 36, 36)';
    //     } else {
    //       this.ctx.fillStyle = 'rgb(36, 36, 36)';
    //     }
    //     // Formula: (X,Y, Width, Height)
    //     this.ctx.fillRect(
    //       i * nRows,
    //       j * nCols,
    //       nRows * (i + 20),
    //       nCols * (j + 20)
    //     );
    //   }
    // }

    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.snake.buildSnake();
    this.fruit.spawnFruit();
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
  }
  spawnFruit() {
    // this.mWidth = document.getElementById('canvas').width;
    // this.mHeight = document.getElementById('canvas').height;
    this.ctx = canvas.getContext('2d');
    this.gridX = Math.floor(this.width / 20);
    this.gridY = Math.floor(this.height / 20);

    this.foodX = Math.floor(Math.random() * (this.width - 20));
    this.foodY = Math.floor(Math.random() * (this.height - 20));
    // console.log(this.gridX + '    ' + this.gridY);
    // console.log(this.width + '    ' + this.height);
    // console.log(this.foodX + '  ' + this.foodY);
    this.ctx.fillStyle = 'rgb(255, 0, 0)';
    this.ctx.fillRect(this.foodX, this.foodY, 20, 20);
  }
}

window.onload = function() {
  const startGame = new controller();
  console.log(startGame.snake.x);
  console.log(startGame.snake.y);
  console.log(startGame.snake.snakeTrail);
  console.log(startGame.snake.nextX);
  console.log(startGame.snake.nextY);
  document.addEventListener('keydown', function(evt) {
    startGame.moveSnake(evt);
  });
  setInterval(function() {
    startGame.createBoard();
  }, 1000 / 8);
};
