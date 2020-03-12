class drawing {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.rows = 600;
    this.cols = 600;
    this.init = this.boardInit();
    this.board = this.createBoard();
    this.fruit = new fruit();
  }
  createBoard() {
    let nCols = Math.floor(this.rows / 30);
    let nRows = Math.floor(this.cols / 30);

    for (let i = 0; i < nRows * 2; i++) {
      // console.log(i);
      for (let j = 0; j < nCols * 2; j++) {
        if ((i + j) % 2 == 0) {
          // console.log((i + j) % 2 == 0);
          this.ctx.fillStyle = 'rgb(36, 36, 36)';
        } else {
          this.ctx.fillStyle = 'rgb(36, 36, 36)';
        }
        // Formula: (X,Y, Width, Height)
        this.ctx.fillRect(
          i * nRows,
          j * nCols,
          nRows * (i + 20),
          nCols * (j + 20)
        );
      }
    }
  }
  boardInit() {
    this.canvas.width = this.rows;
    this.canvas.height = this.cols;
  }
}

class fruit {
  constructor() {
    this.spawn = this.spawnFruit();
  }
  spawnFruit() {
    this.mWidth = document.getElementById('canvas').width;
    this.mHeight = document.getElementById('canvas').height;
    this.ctx = canvas.getContext('2d');
    this.gridX = Math.floor(this.mWidth / 20);
    this.gridY = Math.floor(this.mWidth / 20);

    this.foodX = Math.floor(Math.random() * (this.mWidth - 20));
    this.foodY = Math.floor(Math.random() * (this.mHeight - 20));
    // console.log(this.gridX + '    ' + this.gridY);
    // console.log(this.mWidth + '    ' + this.mHeight);
    // console.log(this.foodX + '  ' + this.foodY);
    this.ctx.fillStyle = 'rgb(255, 0, 0)';
    this.ctx.fillRect(this.foodX, this.foodY, 20, 20);
  }
}
const draw = new drawing();
