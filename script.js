// game play sript

// define objects
const merlin = new Image();
const cow = new Image();
const bear = new Image();
const bunny = new Image();
const background = new Image();
const cowReaction = new Image();
const bearReaction = new Image();
const bunnyReaction = new Image();

function init(){
  background.src = "background.png"
  merlin.src = "merlin.png";
  cow.src = "cow.png";
  bear.src = "bears.png";
  bunny.src = "bunny.png";
  cowReaction.src = "cow-reaction.png";
  bearReaction.src = "bear-reaction.png";
  bunnyReaction.src = "bunny-reaction.png";
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
  var canvas = document.getElementById("gallery");
  var ctx = canvas.getContext('2d');

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

function viewPainting(posX, posY){
  var ctx = document.getElementById("gallery").getContext('2d');
  var reactionHeight = posY - 125

  // if merlin coords align with paiting coords in the x axis, then merlin is viewing the paiting
  if (posY <= 200){
    if (posX >= 0 && posX <= 100){ // view cow paiting
      ctx.drawImage(cowReaction, posX + 125, reactionHeight);
    }else if (posX >= 180 && posX <= 310){ // view bear paiting
      ctx.drawImage(bearReaction, posX - 110, reactionHeight);
    }else if (posX >= 330 && posX <= 440){ // view bunny paiting
      ctx.drawImage(bunnyReaction, posX - 100, reactionHeight);
    }
  }
}

function whichPainting(posX, posY){
  if(posY <= 200 ){
    if (posX >= 0 && posX <= 100){ // rotate cow paiting
      console.log("cow");
      return document.getElementById("cow");
    }else if (posX >= 180 && posX <= 310){ // rotate bear paiting
      console.log("bear");
      return document.getElementById("bear");
    }else if (posX >= 330 && posX <= 440){ // rotate bunny paiting
      console.log("bunny");
      return document.getElementById("bunny");
    }
  }
}

function rotatePainting(posX, posY, degrees){
  var ctx = document.getElementById("gallery").getContext("2d");

  // rotate canvas
  ctx.save();
  ctx.rotate(degrees*Math.PI/180);

  if(posY <= 200 ){
    if (posX >= 0 && posX <= 100){ // rotate cow paiting
      console.log("cow");
      ctx.drawImage(cow, 50, 50);
    }else if (posX >= 180 && posX <= 310){ // rotate bear paiting
      console.log("bear");
      ctx.drawImage(bear, 225, 50);
    }else if (posX >= 330 && posX <= 440){ // rotate bunny paiting
      console.log("bunny");
      ctx.drawImage(bunny, 400, 50);
    }
  }  
  // restore context
  ctx.restore();
}

// Responding to events
window.addEventListener("keydown", (e) => updateCanvas(e, "down"));
var merlinPosX = 200;
var merlinPosY = 175;
var merlinSpeed = 10;
var rotationSpeed = 5;

function updateCanvas(e, direction){
  clearCanvas();
  switch(e.keyCode){
    case 37: // left arrow key pressed
      if (merlinPosX > -30){
        merlinPosX -= merlinSpeed;
      }
      break;
    case 38: // up arrow key pressed
      if (merlinPosY > 175){
        merlinPosY -= merlinSpeed;
      }
      break;
    case 39: // right arrow key pressed
      if (merlinPosX < 460){
        merlinPosX += merlinSpeed;
      }
      break;
    case 40: // down arrow key pressed
      if (merlinPosY < 270){
        merlinPosY += merlinSpeed;
      }
      break;
    case 190: // period key pressed
      // rotate painting clock-wise
      rotationSpeed += 5;
      rotatePainting(merlinPosX, merlinPosY, rotationSpeed);
      console.log("rotate clockwise");
      break;
    case 188: // comma key pressed
      // rotate painting counter clock-wise
      rotationSpeed -= 5;
      rotatePainting(merlinPosX, merlinPosY, rotationSpeed);
      console.log("rotate counter clock-wise");
      break;
  }
  drawMerlin(merlinPosX, merlinPosY);
  viewPainting(merlinPosX, merlinPosY);
}

init();



