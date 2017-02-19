window.onload = function () {
  Init();
}

var game;
var sqr;
var circles = [];




function Init() {
  game = new Play5Canvas();
  setInterval(SpawnCircle, 1000);

}

function MouseClick() {

  var mouseX = event.clientX;
  var mouseY = event.clientY;
  console.log("click at x: " + mouseX + " y: " + mouseY);

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
  for(var i = circles.length - 1; i >= 0; i--) {

    if(circles[i].y < 0) {
        circles.splice(i, 1);
    } else {
      circles[i].Move(0, -1);
    }
  }
}


function Draw() {
  game.ClearScreen('blue');

  for(var i = 0; i < circles.length; i++) {
    circles[i].Draw();
  }
}
