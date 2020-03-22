const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let snakeTrail = new Array();
let nextX = (nextY = 0);
let x = (y = 10);
const defaultSize = 3;
var tailSize = defaultSize;
const foodX = Math.floor(Math.random() * (canvas.width - 20));
const foodY = Math.floor(Math.random() * (canvas.height - 20));

function spawnFruit() {
  gridX = Math.floor(canvas.width / 20);
  gridY = Math.floor(canvas.height / 20);

  ctx.fillStyle = 'rgb(255, 0, 0)';
  ctx.fillRect(foodX, foodY, 20, 20);
}

function movement(evt) {
  switch (evt.keyCode) {
    case 37:
      nextX = -1;
      nextY = 0;
      break;
    case 38:
      nextX = 0;
      nextY = -1;
      break;
    case 39:
      nextX = 1;
      nextY = 0;
      break;
    case 40:
      nextX = 0;
      nextY = 1;
      break;
  }
}

function snake() {
  x += nextX;
  y += nextY;

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  this.spawnFruit();
  if (x < 0) {
    x = 30 - 1;
  }
  if (x > 30 - 1) {
    x = 0;
  }
  if (y < 0) {
    y = 30 - 1;
  }
  if (y > 30 - 1) {
    y = 0;
  }
  ctx.fillStyle = 'rgb(0, 0, 255)';

  for (var i = 0; i < snakeTrail.length; i++) {
    ctx.fillRect(snakeTrail[i].x * 20, snakeTrail[i].y * 20, 20, 20);
  }

  snakeTrail.push({ x: x, y: y });
  while (snakeTrail.length > tailSize) {
    snakeTrail.shift();
  }
}

window.onload = function() {
  document.addEventListener('keydown', function(evt) {
    movement(evt);
  });
  setInterval(function() {
    this.snake();
  }, 1000 / 8);
};
