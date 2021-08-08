var rabbit;
var carrot;
var obsone;
var obstwo;
var obsthree;
var obsfour;
var obsfive;
var obssix;
var obsseven;
var obseight;
var obsnine;
var obsten;
var obseleven;
var obstwelve;
var move1;
var move2;
var edges;
var bg;
var bunny;
var cimg;
var simg;
var background;

function preload()
{
  bg=loadImage("./bg.png");
  bunny=loadImage("./bunny.png");
  cimg=loadImage("./carrot.png");
  simg=loadImage("./snake.png");
}

function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
 rabbit=createSprite(40,550,30,30);
 carrot=createSprite(550,40,30,30);
  obsone=createSprite(500,280,100,10);
  obstwo=createSprite(300,280,100,10);
  obsthree=createSprite(195,350,100,10);
  obsfour=createSprite(300,420,100,10);
  obsfive=createSprite(390,480,100,10);
  obssix=createSprite(195,480,100,10);
  obsseven=createSprite(90,420,100,10);
  obseight=createSprite(500,420,100,10);
  obsnine=createSprite(390,350,100,10);
  obsten=createSprite(90,280,100,10);
  obseleven=createSprite(195,200,100,10);
  obstwelve=createSprite(390,200,100,10);
  move1=createSprite(500,520,100,10)
  move2=createSprite(100,150,100,10)
  move1.velocityX=5;
  move2.velocityX=-5;
  obsone.shapeColor="red";
  obstwo.shapeColor="red";
  obsthree.shapeColor="red";
  obsfour.shapeColor="red";
  obsfive.shapeColor="red";
  obssix.shapeColor="red";
  obsseven.shapeColor="red";
  obseight.shapeColor="red";
  obsnine.shapeColor="red";
  obsten.shapeColor="red";
  obseleven.shapeColor="red";
  obstwelve.shapeColor="red";
  move1.shapeColor="red";
  move2.shapeColor="red";
  snakegroup=new Group()
}

function draw()
{
  background(bg)
  rabbit.addImage(bunny);
  rabbit.scale=(0.2);
  carrot.addImage(cimg);
  carrot.scale=(0.2);
 rabbit.bounceOff(edges[0]);
 rabbit.bounceOff(edges[1]);
 rabbit.bounceOff(edges[2]);
 rabbit.bounceOff(edges[3]);
 move1.bounceOff(edges[1]);
 move1.bounceOff(edges[2]);
 move1.bounceOff(edges[3]);
 move1.bounceOff(edges[0]);
 move2.bounceOff(edges[1]);
 move2.bounceOff(edges[2]);
 move2.bounceOff(edges[3]);
 move2.bounceOff(edges[0]);
  if(keyDown("up"))
  {
   rabbit.y=rabbit.y-4;
  }
  if(keyDown("down"))
  {
   rabbit.y=rabbit.y+4;
  }
  if(keyDown("left"))
  {
   rabbit.x=rabbit.x-4;
  }
  if(keyDown("right"))
  {
   rabbit.x=rabbit.x+4;
  }
  generatesnake();
  for (var i=0;i<(snakegroup).length;i++)
  {
    temp=snakegroup.get(i);
    if (rabbit.isTouching(temp))
    {
     rabbit.x=40;
     rabbit.y=550;
    }
  }
  if (rabbit.isTouching (carrot))
  {
    textSize(20);
    fill(black)
    text("you win",200,200);
  }
  if (rabbit.isTouching(obsone))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obstwo))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsthree))
  {
   rabbit.x=40;
   rabbit.y=550;
  }  
  if (rabbit.isTouching(obsfour))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsfive))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obssix))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsseven))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obseight))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsnine))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsten))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obseleven))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obstwelve))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(move1))
  {
    rabbit.x=40;
    rabbit.y=550;
  }
  if (rabbit.isTouching(move2))
  {
    rabbit.x=40;
    rabbit.y=550;
  }
  drawSprites();
}

function generatesnake()
{
  if(frameCount%80===0)
  {
    var snake=createSprite(500,520,100,10)
    snake.velocityX=-4;
    snake.y=Math.round(random(20,580));
    snake.addImage(simg);
    snake.scale=random(0.1,0.4);
    snakegroup.add(snake)
  }
}