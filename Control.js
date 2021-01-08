function keyPressed() {
    if (keyCode === LEFT_ARROW) {
  
      helicopterSprite.x=helicopterSprite.x-20;    
      translation={x:-20,y:0}
      Matter.Body.translate(packageBody, translation)
  
    } else if (keyCode === RIGHT_ARROW) {
      helicopterSprite.x=helicopterSprite.x+20;
      translation={x:20,y:0}
      Matter.Body.translate(packageBody, translation)
    }
    else if (keyCode === DOWN_ARROW) {
      Matter.Body.setStatic(packageBody,false);
      
    }
  }