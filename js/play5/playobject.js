function PlayObject() {
  this.x = x;
  this.y = y;

  this.MoveTo = function(x, y) {
    this.x = x;
    this.y = y;
  }

  this.Move = function(x, y) {
    this.x += x;
    this.y += y;
  }

}
