const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    var ball_options={
        restitution: 1.0
    }

    ball1 = Bodies.circle(200,100,30,ball_options);
    World.add(world,ball1);

    ball2 = Bodies.circle(100,100,30,ball_options);
    World.add(world,ball2);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,30,30);
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,30,30);
}