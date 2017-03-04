window.onload = function () {
  Init();
}

var game;
var sqr;
var circles = [];
var socket;
var ships = [];



function Init() {
  game = new Play5Canvas();
  socket = io.connect('http://192.168.0.12:3000');
  socket.on("init", function(data) {
    console.log(data);
  });

  socket.on("update", function(data) {
    console.log(data);
  });
}

function MouseClick() {

  var mouseX = event.clientX;
  var mouseY = event.clientY;
  console.log("click at x: " + mouseX + " y: " + mouseY);
  socket.emit("click send", mouseX);
  //Play5Canvas.ScheduleTask(SpawnCircle, 1);
  for(var i = circles.length - 1; i >= 0; i--) {
    var distX = circles[i].x - mouseX;
    var distY = circles[i].y - mouseY;
    var dist = Math.sqrt( (distX * distX) + (distY * distY) );
    if(dist < circles[i].radius){
      circles.splice(i, 1);
    }
  }


}

function SpawnCircle() {
  x = Play5Canvas.RandomInt(0, game.width);
  y = game.height + 10;
  var temp = new Circle(x, y, Play5Canvas.RandomInt(10, 25), game.context);

  circles.push(temp);
}


function Update() {

}


function Draw() {
  game.ClearScreen('blue');

  for(var i = 0; i < circles.length; i++) {
    circles[i].Draw();
  }
}
