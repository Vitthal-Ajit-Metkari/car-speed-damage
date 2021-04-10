var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,600);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  
  wall=createSprite(1500, 200, 60, height/2);

}

function draw() {
  background(35,105,685);  

if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX = 0;
  var deformation= 0.5*weight*speed*speed/22500;

  if(deformation>180)
  {
   car.shapeColor=color(255,0,0);
   wall.shapeColor=color(80,600,30);
  }

  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
    wall.shapeColor=color(380,105,140);
  }

  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
    wall.shapeColor=color(500,100,350);
  }
}

  drawSprites();
}