var bullet,wall
var speed,weight



function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed
  bullet.shapeColor='white'
  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(deformation>10){
    wall.shapeColor='red';
  }
  
  if(deformation<10){
    wall.shapeColor='green';
  }
}

  drawSprites();

}
function hasCollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallleftedge=wall1.x
  if(bulletRightEdge>=wallleftedge){
return true
  }
  return false
}

