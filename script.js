// define objects
const merlin = new Image();
const cow = new Image();
const bear = new Image();
const bunny = new Image();
const background = new Image();
const cowReaction = new Image();
const bearReaction = new Image();
const bunnyReaction = new Image();

// define other vars
var speed = 10;

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
  drawPainting(ctx, cow);
  drawPainting(ctx, bear);
  drawPainting(ctx, bunny);

  // merlin
  ctx.drawImage(merlin, merlin.posX, merlin.posY);
}

function drawPainting(ctx, painting){
  // save context
  ctx.save();

  // transform canvas
  ctx.translate(painting.posX + (painting.naturalWidth/2), painting.posY + (painting.naturalHeight/2));
  // rotate canvas
  ctx.rotate(painting.rot*Math.PI/180);
  // draw image
  ctx.drawImage(painting, -painting.naturalWidth/2, -painting.naturalHeight/2);

  // restore context
  ctx.restore()
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

function rotatePainting(posX, posY, clockwise){
  let painting;
  var rotSpeed = 5;

  // determine which painting merlin is in front of
  if(posY <= 200 ){
    if (posX >= 0 && posX <= 100){ // rotate cow paiting
      console.log("cow");
      painting = cow;
    }else if (posX >= 180 && posX <= 310){ // rotate bear paiting
      console.log("bear");
      painting = bear;
    }else if (posX >= 330 && posX <= 440){ // rotate bunny paiting
      console.log("bunny");
      painting = bunny;
    }
  }

  if(clockwise){
    painting.rot += rotSpeed;
  }else{
    painting.rot -= rotSpeed;
  }
}

// Moving Merlin around
window.addEventListener("keydown", (e) => updateGallery(e, "down"));

function updateGallery(e, direction){
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
    case 190: // period key pressed
      // rotate painting clock-wise
      rotatePainting(merlin.posX, merlin.posY, true);
      console.log("rotate clockwise");
      break;
    case 188: // comma key pressed
      // rotate painting counter clock-wise
      rotatePainting(merlin.posX, merlin.posY, false);
      console.log("rotate counter clock-wise");
      break;
  }

  drawGallery();
  console.log(merlin.posX, merlin.posY);
  viewPainting(merlin.posX, merlin.posY);
}

