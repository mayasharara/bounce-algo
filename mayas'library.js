function isTouching(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    return true;
  }
  else {
    return false;
  }
  }
  
  function bounceOff (object1,object2){
  if (isTouching(object1,object2)){
    object1.velocityX=object1.velocityX+2*-object1.velocityX;
    object2.velocityX=object2.velocityX+2*-object2.velocityX;;
  }
  
  }