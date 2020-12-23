
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,100,400,30);

bob1=new Bob(200,200,20);
bob2=new Bob(250,200,20);
bob3=new Bob(300,200,20);
bob4=new Bob(350,200,20);
bob5=new Bob(400,200,20);

rope1=new Rope(bob1.body,roof.body,bobDiameter=2,0)

	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	rectMode(CENTER);
  
 roof.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
  

 
}



