function Primitive(x, y, context) {
  this.x = x;
  this.y = y;

  this.MoveTo = function(x, y) {
    this.x = x;
    this.y = y;
  }

//Move

  this.Move = function(x, y) {
      this.x += x;
      this.y += y;
  }

}


function Circle(x, y, radius, context) {
  this.x = x;
  this.y = y;
  this.radius = radius
  this.context = context;
  this.strokeColour = "white";

  this.Draw = function() {
    this.context.save();
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.context.lineWidth = 5;
    this.context.strokeStyle = this.strokeColour;
    this.context.stroke();
    this.context.restore();
  }
}
Circle.prototype = new Primitive();



function Square(x, y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.context = context;
  this.strokeColour = "white";

  this.Draw = function() {
    this.context.save();
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.strokeStyle = this.strokeColour;
    this.context.stroke();
    this.context.restore();
  }

}
Square.prototype = new Primitive();
