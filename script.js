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
  // connect to src images
  background.src = "background.png"
  merlin.src = "merlin.png";
  cow.src = "cow.png";
  bear.src = "bears.png";
  bunny.src = "bunny.png";
  cowReaction.src = "cow-reaction.png";
  bearReaction.src = "bear-reaction.png";
  bunnyReaction.src = "bunny-reaction.png";

  // starting coords, rotations, view range
  merlin.posX = 200;
  merlin.posY = 175;
  merlin.rot = 0;

  cow.posX = 50;
  cow.posY = 50;
  cow.rot = 0;

  bear.posX = 225;
  bear.posY = 50;
  bear.rot = 0;

  bunny.posX = 400;
  bunny.posY = 50;
  bunny.rot = 0;
}

init();

function drawGallery(){
  var ctx = document.getElementById("gallery").getContext('2d');

  // background
  ctx.drawImage(background, 0, 0);

  // paintings
  ctx.drawImage(cow, cow.posX, cow.posY);
  ctx.drawImage(bear, bear.posX, bear.posY);
  ctx.drawImage(bunny, bunny.posX, bunny.posY);

  // merlin
  ctx.drawImage(merlin, merlin.posX, merlin.posY);
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

// Moving Merlin around
window.addEventListener("keydown", (e) => moveMerlin(e, "down"));
var speed = 10;

function moveMerlin(e, direction){
  switch(e.keyCode){
    case 37: // left arrow key pressed
      if (merlin.posX > -30){
        merlin.posX -= speed;
      }
      break;
    case 38: // up arrow key pressed
      if (merlin.posY > 175){
        merlin.posY -= speed;
      }
      break;
    case 39: // right arrow key pressed
      if (merlin.posX < 460){
        merlin.posX += speed;
      }
      break;
    case 40: // down arrow key pressed
      if (merlin.posY < 270){
        merlin.posY += speed;
      }
      break;
  }

  drawGallery();
  console.log(merlin.posX, merlin.posY);
  viewPainting(merlin.posX, merlin.posY);
}

