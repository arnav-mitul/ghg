
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dt,dt1,crushpaper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
//	ground = Bodies.rectangle(width/2, 650, width, 10 ,{restitution:0.5, isStatic:true});
//	 World.add(world, ground);
	 
	dt= new Box(500,680,20,200)
	dt1= new Box(700,680,20,200)
	dt2= new Box(600,690,200,20)

	
	crushpaper= new PA(100,680,20);
    
    

	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  dt.display();
  dt1.display();
  dt2.display();
  crushpaper.display();







  drawSprites();

  



 
}



