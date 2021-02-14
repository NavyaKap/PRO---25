const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj;
var groundObject;
var world;
var dustbinObj;
var paper
var paper2;
var paper3;
var paper4;
var paper5;
var groundObject;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world  = engine.world;

	paper   = new Paper(200,450,70);
    paper2  = new Paper(250,225,70) ;    
    paper3  = new Paper(300,400,70);
    paper4  = new Paper(350,250,70);
	paper5  = new Paper(400,300,70);

	groundObject = new ground(width/2,670,width,20);
	dustbinObj   = new dustbin(1200,650);



	var render = Render.create({
		element    :document.body,
		engine     : engine,
		options    : {
		width      : 1600,
		height     : 700,
		wireframes : false
		}
	})	
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display(); 
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:78,y:-85});
        Matter.Body.applyForce(paper2.body, paper2.body.position,{x:78,y:-95});
	    Matter.Body.applyForce(paper3.body, paper3.body.position,{x:78,y:-105});
        Matter.Body.applyForce(paper4.body, paper4.body.position,{x:78,y:-110});
        Matter.Body.applyForce(paper5.body, paper5.body.position,{x:78,y:-135});

	
	}
}

