
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof1;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new bob (200,600);
	bobObject2 = new bob (300,600);
	bobObject3 = new bob (400,600);
	bobObject4 = new bob (500,600);
	bobObject5 = new bob (600,600);

	roof1 = new roof (400,100, 600, 20);

	rope1 = new rope (bobObject1.body,roof1.body)
	rope2 = new rope (bobObject2.body,roof1.body)
	rope3 = new rope (bobObject3.body,roof1.body)
	rope4 = new rope (bobObject4.body,roof1.body)
	rope5 = new rope (bobObject5.body,roof1.body)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(222);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



