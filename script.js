// game play sript

// define objects
const merlin = new Image();
const cow = new Image();
const bear = new Image();
const bunny = new Image();

function init(){
  merlin.src = "merlin-001-25x40.png";
  cow.src = "cow-jumps-moon-sm.png";
  bear.src = "three-bears-sm.png";
  bunny.src = "bunny-gone-fishing-sm.png";
}
// Load objects into canvas
// retreive canvas id
function drawScene(){
  var canvas = document.getElementById("gallery");
  var ctx = canvas.getContext('2d');

  clearCanvas();

  // load merlin
  ctx.drawImage(merlin, 90, 85);
}

function clearCanvas(){
  var canvas = document.getElementById("gallery");
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "Maroon";
  ctx.fillRect(0, 100, canvas.width, canvas.height/2)
  
  // draw art work into canvas
  // cow jumps over the moon painting
  ctx.drawImage(cow, 40, 50);

  // three bears painting
  ctx.drawImage(bear, 85, 50);

  // gone fishing painting
  ctx.drawImage(bunny, 130, 50);
}

function drawMerlin(posX, posY){
  var ctx = document.getElementById("gallery").getContext('2d');

  // draw merlin in canvas
  ctx.drawImage(merlin, posX, posY)
}

window.addEventListener("keydown", (e) => moveMerlin(e, "down"), false)
var posX = 90;
var posY = 85;

function moveMerlin(e, direction){
  switch(e.keyCode){
    case 37:
      // left key pressed
      posX -= 2;
      break;
    case 38:
      // up key pressed
      posY -= 2;
      break;
    case 39:
      // right key pressed
      posX += 2;
      break;
    case 40:
      // down key pressed
      posY += 2;
      break;
  }
  e.preventDefault();
  clearCanvas();
  drawMerlin(posX, posY);
  console.log(posX, posY);
}

init();



