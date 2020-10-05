
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var stick1;
var stick2;
var stick3;
var stick4;
var stick5;
var stick6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
var ball1 = createSprite(200,200,20,20);
var ball2 = createSprite(300,200,20,20);
var ball3 = createSprite(400,200,20,20);
var ball4 = createSprite(500,200,20,20);
var ball5 = createSprite(600,200,20,20);
var ball6 = createSprite(700,200,20,20);

var stick1 = createSprite(200,100,5,200);
var stick2 = createSprite(300,100,5,200);
var stick3 = createSprite(400,100,5,200);
var stick4 = createSprite(500,100,5,200);
var stick5 = createSprite(600,100,5,200);
var stick6 = createSprite(700,100,5,200);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  if(keyWentDown("space")){
	  ball6.velocityX=1;
	  ball5.velocityX=1;
  ball6.collider(ball5);
  }
  drawSprites();
 
}



