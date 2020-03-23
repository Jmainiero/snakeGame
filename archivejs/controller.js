class controller {
  constructor() {
    // this.canvas = document.getElementById('canvas');
    // this.ctx = canvas.getContext('2d');
    this.rows = 600;
    this.cols = 600;
    this.pnt = 20;
    this.newCanvas = new drawing(this.rows, this.cols);
    this.fruit = new fruit(this.cols, this.rows);
    this.snake = new snake(this.cols, this.rows, 0, 0);
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
    this.snake.buildSnake();
  }
}
window.onload = function() {
  document.addEventListener('keydown', function(evt) {
    startGame.moveSnake(evt);
    const startGame = new controller();
  });
};
