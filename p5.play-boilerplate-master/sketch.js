
var fixedRectangle,mmovingRectangle,fixedRectangle1,fixedRectangle2,fixedRectangle3,rect4;

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 50, 50);
  movingRectangle = createSprite(200, 200, 20, 50);
  fixedRectangle1 = createSprite(500, 200, 50, 50);
  fixedRectangle2 = createSprite(300, 200, 50, 50);
  fixedRectangle3 = createSprite(100, 200, 50, 50);
  rect4 = createSprite(700, 200, 50, 50);

 
  movingRectangle.shapeColor="green";
fixedRectangle.shapeColor="green";
fixedRectangle1.shapeColor="green";
fixedRectangle2.shapeColor="green";
fixedRectangle3.shapeColor="green";

rect4.velocityX=-5;


}

function draw() {
  background("black");  
  

  
 
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;

console.log("width--> " + fixedRectangle.width/2 + movingRectangle.width/2);
  
console.log("mr--> " + movingRectangle.x);
  
console.log("mr - fr -- > " + (movingRectangle.x - fixedRectangle.x))  ; 





if(isTouching(movingRectangle,fixedRectangle1)){

  movingRectangle.shapeColor="blue";
  fixedRectangle1.shapeColor="blue";

}else if(isTouching(movingRectangle,fixedRectangle)){

  movingRectangle.shapeColor="red";
  fixedRectangle.shapeColor="red";


}else if(isTouching(movingRectangle,fixedRectangle2)){

  movingRectangle.shapeColor="orange";
  fixedRectangle2.shapeColor="orange";


}
else if(isTouching(movingRectangle,fixedRectangle3)){

  movingRectangle.shapeColor="yellow";
  fixedRectangle3.shapeColor="yellow";


}else{
  movingRectangle.shapeColor="green";
  fixedRectangle1.shapeColor="green";
  fixedRectangle.shapeColor="green";
  fixedRectangle2.shapeColor="green";
  fixedRectangle3.shapeColor="green";
}

bounceoff(rect4,fixedRectangle1);


drawSprites();
}

function isTouching(object1,object2){
if(object1.x-object2.x <=object1.width/2 + object2.width/2 && 
  object2.x-object1.x <= object1.width/2 + object2.width/2 
  && object1.y-object2.y <= object1.height/2 + object2.height/2 &&
  object2.y-object1.y <= object1.height/2 + object2.height/2){
return true;

}
else{
  return false;
}
}

function bounceoff(object1,object2){
  if(object1.x-object2.x <=object1.width/2 + object2.width/2 && 
    object2.x-object1.x <= object1.width/2 + object2.width/2 
    && object1.y-object2.y <= object1.height/2 + object2.height/2 &&
    object2.y-object1.y <= object1.height/2 + object2.height/2){

      object1.velocityX=object1.velocityX  * (-1);


  return true;
  
  }
  else{
    return false;
  }

}