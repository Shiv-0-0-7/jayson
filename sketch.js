var path;
function preload(){
  //pre-load images
 bombimg=loadImage("bomb.png");
 coinimg=loadImage("coin.png");
 pathimg=loadImage("path.png");
 boy=loadAnimation("Runner-1.png","Runner-2.png")
 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
 path=createSprite(200,200);
path.addImage(pathimg);
path.velocityY=4;
path.scale=1.2;
 runner1 = createSprite(200,200);
 runner1.addAnimation("running",boy)
 runner1.scale=0.1
}

function draw() {
  background("black");
  path.velocityY=4;
  runner1.x=mouseX
  if(path.y> 400 ){
    path.y = height/2;
    
}
// Moving background

drawSprites()


}