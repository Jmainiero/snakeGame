class controller {
  constructor() {
    console.log('This is controller');
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.rows = 600;
    this.cols = 600;
    this.newCanvas = new drawing(this.canvas, this.ctx, this.rows, this.cols);
    this.fruit = new fruit(this.cols, this.rows);
    this.snake = new snake(this.cols, this.rows);
  }
}
// const startGame = new controller();
const startGame = new controller();
