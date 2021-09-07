var backgroundImg;
var snow,snow2;

function preload(){
  backgroundImg = loadImage("images/snow3.jpg");
}

function setup() {
  createCanvas(1300,700);
  createSprite(400, 200, 50, 50);

   snow = new Snow(random(10,1200),10,50,50);
   snow.velocityY = 2;

   snow2 = new Snow2(random(10,1200),10,50,50);
   snow2.velocityY = 2;

}

function draw() {
  background(backgroundImg); 
  
  snow.display();
  snow2.display();

  drawSprites();
}