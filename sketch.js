







var bullet , wall ;
var speed , weight , thickness ;


function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22 ,83);
  
  bullet = createSprite(50, 200, 75, 5);
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);
  

  
}

function draw() {
  background(80,80,80); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX=0;
  
  var damage=0.5 * weight * speed* speed/ (thickness * thickness * thickness);
  console.log(damage);
  

  if (damage > 10) {
    wall.shapeColor = color(255,0,0);
  }
  if (damage < 10) {
    wall.shapeColor = color(0,255,0);
  }
  }
  drawSprites();  
}