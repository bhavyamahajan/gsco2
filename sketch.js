var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  speed=random(59,90)
  weight=random(400,1500)
  wall.shapecolor(80,80,80);
}

function draw() {
  background(255,255,255);
  car.velocityX=speed;
  if(car.x - wall.x < car.width/2 + wall.width/2 && car.x - wall.x < car.width/2 + wall.width/2){
    Deformation=0.5*weight*speed*speed/22500  
    }
    if(Deformation<100){
car.shapecolor(0, 255, 0)

    }  
    if(Deformation<100){
      car.shapecolor(	(230, 230, 0))
      
          }  
          if(Deformation=random(100,180)){
            car.shapecolor(	(230, 230, 0))
            
                }  
                if(Deformation>180){
                  car.shapecolor(	(255, 0, 0))
                  
                      }           
  drawSprites();
}