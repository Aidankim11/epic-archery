const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerbase=new PlayerBase(300,500,180,150)
computerbase=new ComputerBase(1000,500,180,150)
player=new Player(300,350,50,180)
computer=new Computer(1000,350,50,180)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerbase.display()
   player.display()
   computerbase.display()
  computer.display()
   //display Player and computerplayer


}
