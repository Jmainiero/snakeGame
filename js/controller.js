class controller {
  contructor() {
    console.log('running');
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    console.log(this.canvas);
    this.canvas = new canvas(this.canvas, this.ctx);
  }
}
