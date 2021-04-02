var sound,Ssound;
var space,spaceImg;
var spaceShip,spaceShipImg;
var astroide1,astroide1Img,astroide1G;
var astroide2,astroide2Img,astroide2G;
var bullet,bulletImg,bulletG;
var score;



function preload(){
  

  spaceImg = loadImage("space.jpg");
  
  astroide1Img = loadImage("astroide.png");
  astroide2Img = loadImage("ufo1.png");
  
  spaceShipImg=loadImage("sp.png");
  
  bulletImg=loadImage("lava_2.png");
  
  Ssound = loadSound("space.mp3");
  
  sound = loadSound("fall.mp3");
  
  GOImg = loadImage("GO.png")
  
}


function setup() {
  createCanvas(800, 800);
  
  space= createSprite(400,400,210,10);
  space.addImage(spaceImg);
  space.scale = 0.5;
  space.velocityX =-6;
  
  astroide1G = new Group();
  astroide2G = new Group();
  bulletG = new Group();


  spaceShip = createSprite(70,300,2,2);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;
  
  gameover = createSprite(400,400,3,3);
  gameover.addImage(GOImg);
  gameover.scale = 0.8; 
  gameover.visible = false

  score = 0;
  

}

function draw() {

  background(0,0,0);
 
    
    if(keyDown("space")){
      bullet.visible = true;
      bullet.velocityX=3;
      Ssound.play();
   
         
    }
  
 if(bulletG.isTouching(astroide2G)){
    astroide2G.destroyEach ();
    bulletG.destroyEach();
    score = score+4;
   
    
  }
  if(bulletG.isTouching(astroide1G)){
    astroide1G.destroyEach ();
    bulletG.destroyEach();
    score = score+2;
    }
  
  if(spaceShip.isTouching(astroide1G)){
   astroide1G.destroyEach();
    spaceShip. visible = false;
    space.visible = false;
    gameover.visible = true
    astroide1G.setVelocityXEach(0);
     astroide1G.setLifetimeEach(-1);
     
    }
  
   if(spaceShip.isTouching(astroide2G)){
    astroide2G.destroyEach();
     spaceShip.visible = false;
     space.visible = false;
     gameover.visible = true
     astroide2G.setVelocityXEach(0);
     astroide2G.setLifetimeEach(-1);
    
    }
  
    if(space.x<0 ){
      space.x = width/2;
      space.velocityX = -(4 + 3* score/40)
  }
  
  spaceShip.y = World.mouseY;
  
  
  Astroide1();
  Astroide2();
  Bullet();

  
drawSprites();
  
  
  textSize(30)
  fill("red");
  text("Score :"+score,500,50);
}



function Astroide1() {
  if (World.frameCount % 80 === 0) {
  var astroide1= createSprite(800,200,3,2);
  astroide1.y = Math.round(random(600,400));
  astroide1.velocityX =-6;
  astroide1.lifetime = 800;
  astroide1.addImage(astroide1Img);
  astroide1.scale = 0.3;
    astroide1G.add(astroide1);
 
  
  }
}

function Astroide2() {
  if (World.frameCount % 100 === 0) {
  var astroide2=createSprite(800,200,2,3);
  astroide2.y = Math.round(random(1,500));
  astroide2.velocityX =-6;
  astroide2.lifetime = 800;
  astroide2.addImage(astroide2Img);
  astroide2.scale = 0.3;
    astroide2G.add(astroide2);
 }
}

function Bullet(){
  bullet = createSprite (100,320,5,1) ;
  bullet.addImage(bulletImg);
  bullet.scale = 0.1;
  bullet.velocityX = 0; 
  bullet.y = spaceShip.y;
  
  bullet.visible = false;
  bulletG.add(bullet);
}

