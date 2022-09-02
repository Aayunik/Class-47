let ground;
let lander;
var lander_img;
var bg_img;
var thrust,left,right
var crash,land


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  thrust=loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png")
  left=loadAnimation("left_thruster_1.png","left_thruster_2.png")
  right=loadAnimation("right_thruster_1.png","right_thruster_2.png")
  crash=loadAnimation("crash1.png","crash2.png","crash3.png")
  land=loadAnimation("landing1.png","landing2.png","landing_3.png")
  normal=loadAnimation("normal.png")
  thrust.playing=true
  thrust.looping=false
  left.looping=false
  right.looping=false
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  thrust.frameDelay=5
  left.frameDelay=5
  right.frameDelay=5
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.addAnimation('thrusting',thrust)
  lander.addAnimation('left',left)
  lander.addAnimation('right',right)
lander.addAnimation('normal',normal)
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.position.x+=vx
  drawSprites();
}

function keyPressed(){
  if (keyCode==UP_ARROW){
    lander.changeAnimation('thrusting')
    vy=-1
  }
  if (keyCode==LEFT_ARROW){
    lander.changeAnimation('left')
    vx-=0.2
  }
  if(keyCode==RIGHT_ARROW){
    lander.changeAnimation('right') 
  vx+=0.2
  }
} 
