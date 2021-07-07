const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var ground;
var stand1,stand2;
var polygon;


var block1,block2,block3,block4,
block4,block6,block7,block8,
block9,block10,block11,block12,
block13,block14,block15,block16;

var block17,block18,block19,block20,
block21,block22,block23,block24,
block25,block26;


function preload() {
   
}
function setup(){
    
    engine = Engine.create();
    world = engine.world;

    createCanvas(2000,800);

    ground = new Grounds(730,600,1500,20);
    
    stand1= new Grounds(980,255,270,10);
    stand2= new Grounds(503,455,340,10);

    //blocks for stand2
    //row 4
    block1 = new Block(385,425,40,40);

    block2 = new Block(426,425,40,40);
    block3 = new Block(467,425,40,40);
    block4 = new Block(508,425,40,40);
    block5 = new Block(549,425,40,40);
    block6 = new Block(590,425,40,40);
    block7 = new Block(631,425,40,40);
   
    // row 3
    block8 = new Block(426,384,40,40);
   
    block9 = new Block(467,384,40,40);
    block10 = new Block(508,384,40,40);
    block11 = new Block(549,384,40,40);
    block12 = new Block(590,384,40,40);

    //row 2
    block13 = new Block(467,343,40,40);
    block14 = new Block(508,343,40,40);
    block15 = new Block(549,343,40,40);

    //row1
    block16 = new Block(508,302,40,40);




     //blocks for stand1
    //row 3
    block17 = new Block(900,225,40,40);
    block18 = new Block(941,225,40,40);
    block19 = new Block(982,225,40,40);
    block20 = new Block(1023,225,40,40);
    block21 = new Block(1064,225,40,40);
    
   
    // row 2
    block22 = new Block(941,184,40,40);
    block23 = new Block(982,184,40,40);
    block24 = new Block(1023,184,40,40);

    //row 1
    block25 = new Block(982,142,40,40);

    
    polygon = new Polygon(20,20);
    

    slingShot = new Slingshot(polygon.body,{x:150,y:200});

}

function draw(){
    background(0);
Engine.update(engine);
    fill(225);
    textSize(30);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks !!!",145,40);
    
    

ground.display();

stand1.display();
stand2.display();

fill("blue");
block1.display();
block2.display(); 
block3.display(); 
block4.display(); 
block5.display(); 
block6.display(); 
block7.display(); 

fill("pink");
block8.display();
block9.display();
block10.display();
block11.display(); 
block12.display();

fill("orange");
block13.display(); 
block14.display(); 
block15.display();

fill("lightBlue");
block16.display();
block21.display();
block17.display();
block18.display();
block19.display();
block20.display();

fill("green")
block22.display();
block23.display();

block24.display();

fill("pink");
block25.display();


polygon.display();

slingShot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}