const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dt,dt1,crushpaper,gr;

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

	dt= new Dus(500,610,20,150)
	dt1= new Dus(700,610,20,150)
	dt2= new Dus(600,680,218,20)

	
	crushpaper= new Paper(100,680,50);
    
  gr = new Dus(400,690,800,10)
}


function draw() {
  background(0);

  Engine.update(engine)

  dt.display();
  dt1.display();
  dt2.display();
  crushpaper.display();
  gr.display();

  drawSprites();
}


function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(crushpaper.body,crushpaper.body.position,{x:75,y:-105});
  
  }
}

