var PLAY = 1;
var END = 2;
var gameState = PLAY;

var sound

var tower, Timage
var door,Dimage,doorGroup
var climber, Cimage,climberGroup
var ghost, Gimage, GJimage

function preload(){
sound = loadSound("spooky.wav");
    Timage = loadImage("tower.png");
Dimage = loadImage("door.png");
Cimage = loadImage("climber.png");
Gimage = loadImage("ghost-standing.png");
//GJimage = loadAnimation("ghost-standing.png, ghost-jumping.png");
}
function setup(){
createCanvas(600,600);
//sound.play();
tower = createSprite(300,300,20,600);
tower.velocityY = 1
tower.addImage(Timage);
ghost = createSprite(300,300,10,10);
ghost.addImage(Gimage);
ghost.scale = 0.3;
doorGroup = createGroup();
climberGroup = createGroup();
}
function draw(){
background ("white");

if(gameState === PLAY){

if(tower.y>600){
tower.y = 300;
}
if(keyDown("right")){
ghost.x = ghost.x+3
}
if(keyDown("left")){
    ghost.x = ghost.x-3
    }
    if(keyDown("space")){
        ghost.velocityY = -10
    }
    ghost.velocityY = ghost.velocityY+1
spawnDoors();
if(ghost.y>600){
gameState=END
}
drawSprites();
}
if(gameState===END){
background("black");
fill ("red");
textSize(30);
text("GAME OVER",200,300);
}
}
function spawnDoors(){
    if(frameCount%200===0){
    door = createSprite(200,-30,10,10);
    door.velocityY = 1;
   door.x = Math.round(random(120,400));
   door.addImage(Dimage);
door.lifetime = 600
doorGroup.add(door);
ghost.depth = door.depth+1

climber = createSprite(200,-30,10,10);
climber.velocityY = 1;
climber.x = door.x;
climber.addImage(Cimage);
climber.lifetime = 600
climberGroup.add(climber);
climber.y = door.y+50;
}
}