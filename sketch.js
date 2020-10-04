//isTouching algorithm
var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(300, 200, 30, 80);
 movingRect= createSprite(600, 200, 80, 30);

 fixedRect.debug = true;
 movingRect.debug = true;

 fixedRect.shapeColor = "purple";
 movingRect.shapeColor = "purple";

}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  
  drawSprites();
}

function isTouching(){
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2&&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2&&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "purple";
 movingRect.shapeColor = "purple";
  }

}
