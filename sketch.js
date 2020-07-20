
var car, wall;
var speed, weight;



function setup() {
  createCanvas(800,400);
  

  car = createSprite(50, 200, 50, 50);

  wall = createSprite(800, 200, 60, height/2)

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;

  deformation = (0.5 * weight * speed * speed)/22500;
}

function draw() {
  background(255,255,255);  
if (car.collide(wall)){


  if (deformation < 100){
    car.shapeColor = "green";
  }
  else if (deformation >= 100 && deformation <= 180){
    car.shapeColor = "yellow";
  }
  else{
    car.shapeColor = "red";
  }
}
  drawSprites();
  

  
}