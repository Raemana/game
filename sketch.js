var square,square1,square2;
var arrow1, arrow1Img,arrow2,arrow2Img,arrow3Img;
var circle,circle1,circle2,circle3;
var logImg,log2Img;
var log,log2,log3,log4,log5;
var player;
var playerImg;
function preload(){
arrow1Img = loadImage("ARROW.png")
arrow2Img = loadImage("ARROW2.png")
arrow3Img = loadImage("ARROW3.png")
logImg = loadImage("log.png")
log2Img = loadImage("log2.png")
//playerImg = loadImage("GraveRobber.png")
}
function setup(){
  createCanvas(1000,600)
square = createSprite(100,50,100,100);
square.shapeColor = "red"
arrow1 = createSprite(100,50,30,30)
arrow1.addImage(arrow1Img);
arrow1.scale = 0.5;
circle = createSprite(250,100,80,60);
circle.shapeColor = "blue"
circle1 = createSprite(375,50,80,60);
circle1.shapeColor = "blue"
circle2 = createSprite(500,100,80,60);
circle2.shapeColor = "blue"
circle3 = createSprite(625,50,80,60);
circle3.shapeColor = "blue"
square1 = createSprite(745,50,100,100);
square1.shapeColor = "red"
arrow2 = createSprite(745,50,30,30)
arrow2.addImage("A2",arrow2Img);
arrow2.scale = 0.5;
log2 = createSprite(745,209,40,100)
log2.addImage("L2",log2Img);
log = createSprite(655,299,40,100)
log.addImage("L1",logImg);
log3 = createSprite(544,384,40,100)
log3.addImage("L2",log2Img);
log4 = createSprite(433,474,40,100)
log4.addImage("L1",logImg);
log5 = createSprite(300,474,40,100)
log5.addImage("L1",logImg);
square2 = createSprite(125,474,100,100);
square2.shapeColor = "red"
arrow3 = createSprite(125,474,30,30)
arrow3.addImage("A3",arrow3Img);
arrow3.scale = 0.5;
player = createSprite(100,50,20,35);
//player.addImage(playerImg);
}
function draw(){
  background(0);
  drawSprites();
if (keyDown(UP_ARROW)) {
  player.velocityY = -2
  player.velocityY = player.velocityY + 0.5
  }
}
