class controller {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.rows = 600;
    this.cols = 600;
    this.pnt = 20;
    this.newCanvas = new drawing(this.canvas, this.ctx, this.rows, this.cols);
    this.fruit = new fruit(this.cols, this.rows);
    this.snake = new snake(0, 0);
  }
  moveSnake(evt) {
    switch (evt.keyCode) {
      case 37:
        this.snake.x += -1;
        this.snake.y += 0;
        break;
      case 38:
        this.snake.x += 0;
        this.snake.y += -1;
        break;
      case 39:
        this.snake.x += 1;
        this.snake.y += 0;
        break;
      case 40:
        this.snake.x += 0;
        this.snake.y += 1;
        break;
    }
    this.snake.buildSnake();
    console.log(evt.keyCode);
  }
}
// const startGame = new controller();
const startGame = new controller();
console.log(startGame.snake);

document.addEventListener('keydown', function(evt) {
  startGame.moveSnake(evt);
});
