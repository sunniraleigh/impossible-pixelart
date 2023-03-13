// painting class
  // painting is an image on the canvas
  // needs to be loaded in at x,y coords
  // needs to be deleted and moved
  // might need a parent object when moved??

// room class

// animal class
  // currently merlin
  // moves and stuff

// define objects
const merlin = new Image();
const cow = new Image();
const bear = new Image();
const bunny = new Image();
const background = new Image();

function init(){
  background.src = "background.png"
  merlin.src = "merlin.png";
  cow.src = "cow.png";
  bear.src = "bears.png";
  bunny.src = "bunny.png";
}
// Load objects into canvas
// retreive canvas id
function drawScene(){
  var ctx = document.getElementById("gallery").getContext('2d');

  // loads other elements into the room except for merlin
  clearCanvas();

  // load merlin
  ctx.drawImage(merlin, 200, 175);
}

function clearCanvas(){
  var ctx = document.getElementById("gallery").getContext('2d');

  // draw background
  ctx.drawImage(background, 0, 0);
  
  // draw art work into canvas
  // cow jumps over the moon painting
  ctx.drawImage(cow, 50, 50);

  // three bears painting
  ctx.drawImage(bear, 225, 50);

  // gone fishing painting
  ctx.drawImage(bunny, 400, 50);
}

function drawMerlin(posX, posY){
  var ctx = document.getElementById("gallery").getContext('2d');

  // draw merlin in canvas
  ctx.drawImage(merlin, posX, posY)
}

window.addEventListener("keydown", (e) => moveMerlin(e, "down"), false)
var posX = 200;
var posY = 175;
var speed = 10

function moveMerlin(e, direction){
  switch(e.keyCode){
    case 37: // left arrow key pressed
      if (posX > -30){
        posX -= speed;
      }
      break;
    case 38: // up arrow key pressed
      if (posY > 175){
        posY -= speed;
      }
      break;
    case 39: // right arrow key pressed
      if (posX < 460){
        posX += speed;
      }
      break;
    case 40: // down arrow key pressed
      if (posY < 270){
        posY += speed;
      }
      break;
  }

  clearCanvas();
  drawMerlin(posX, posY);
  console.log(posX, posY);
}

init();



