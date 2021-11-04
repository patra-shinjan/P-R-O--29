const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Polygon,slingShot ;
var backgroundImg,Support;

function preload() {
    backgroundImg = loadImage("Captdugre.JPG");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    Support = new Support1(600,1000,800,15);
    Support = new Support2(600,1000,500,15);
    Polygon = new Polygon(200,90,30,30)

    

    
    slingshot = new SlingShot(Polygon.body,{x:100, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    Support1.display();
    Support2.display();
    Polygon.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
