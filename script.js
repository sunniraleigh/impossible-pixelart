// game play sript

// define objects
const merlin = new Image();
const cow = new Image();
const bear = new Image();
const bunny = new Image();

function init(){
  merlin.src = "merlin.png";
  cow.src = "cow.png";
  bear.src = "bears.png";
  bunny.src = "bunny.png";
}
// Load objects into canvas
// retreive canvas id
function drawScene(){
  var canvas = document.getElementById("gallery");
  var ctx = canvas.getContext('2d');

  // loads other elements into the room except for merlin
  clearCanvas();

  // load merlin
  ctx.drawImage(merlin, 270, 255);
}

function clearCanvas(){
  var canvas = document.getElementById("gallery");
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "Maroon";
  ctx.fillRect(0, 300, canvas.width, canvas.height/2)
  
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
    case 37: // left arrow key pressed
      if (posX > 0){
        posX -= 2;
      }
      break;
    case 38: // up arrow key pressed
      if (posY > 63){
        posY -= 2;
      }
      break;
    case 39: // right arrow key pressed
      if (posX < 175){
        posX += 2;
      }
      break;
    case 40: // down arrow key pressed
      if (posY < 110){
        posY += 2;
      }
      break;
  }
  e.preventDefault();
  clearCanvas();
  drawMerlin(posX, posY);
  console.log(posX, posY);
}

init();



