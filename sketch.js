var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
 object1 = createSprite(200,100,60,40);
 object1.shapeColor= "green";
 object1.velocityX=3;
object2=createSprite(400,100,50,20);
object2.shapeColor= "green";
 object2.velocityX=-3;
}

function draw() {

  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(object1, object2)){
  object1.shapeColor= "pink";
  object2.shapeColor= "blue";
}
  else{
    object1.shapeColor = "green";
  object2.shapeColor = "green";
  }

  bounceOff(object1, object2);
  drawSprites();
}

