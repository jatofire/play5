
function Play5Canvas(width = -1, height = -1) {
  this.canvas;
  this.context;
  this.isFullScreen = false;


  if(width <= 0  || height <= 0) {

    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

      this.width = x;
      this.height = y;
      this.isFullScreen = true;

  } else {
    this.width = width;
    this.height = height;
  }

  this.canvas = document.createElement('canvas');
  document.body.append(this.canvas);
  this.canvas.width  = this.width;
  this.canvas.height = this.height;

  this.canvas.addEventListener("click", MouseClick);


  if(this.isFullScreen) {
    this.canvas.setAttribute("style", "position: absolute; top: 0; left: 0;");
  }

  this.context = this.canvas.getContext("2d");
  setInterval(GameLoop, 1000/60);

  this.ClearScreen = function (color) {
    this.context.beginPath();
    this.context.rect(0, 0, this.width, this.height);
    this.context.fillStyle = color;
    this.context.fill();
  }

}

// Static Methods

Play5Canvas.RandomInt = function (min, max) {
    return Math.floor((Math.random() * max) + min);
}

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


function GameLoop() {
  Update();
  Draw();
}
