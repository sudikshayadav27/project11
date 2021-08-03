var ship,shipImage,sea,seaImage
function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage= loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400)
  sea.addImage(seaImage)
  sea.scale =1
  sea.velocityX=-3
  // create ship
  ship = createSprite(100,260,10,10)
  ship.addAnimation("floating",shipImage)
  ship.scale =0.3
}

function draw() {
  background("blue");

  if(sea.x <0){
    sea.x = sea.width/4
  }
 drawSprites()
}