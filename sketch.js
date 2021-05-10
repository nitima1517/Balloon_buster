var background1, background2, edges;
var balloon1, balloon2, balloon3, balloon4
var balloonA, balloonB, balloonC, balloonD
var bow1, bow2
var arrowImage
var selectBaloon
var score = 0;
var arrowGroup
var redGroup, blueGroup, pinkGroup, greenGroup


function preload() {
  background2 = loadImage("background0.png")
  balloonA = loadImage("blue_balloon0.png")
  balloonB = loadImage("pink_balloon0.png")
  balloonC = loadImage("green_balloon0.png")
  balloonD = loadImage("red_balloon0.png")
  bow1 = loadImage("bow0.png")
  arrowImage = loadImage("arrow0.png")


}

function setup() {
  createCanvas(600, 600);
  background1 = createSprite(300, 50, 60, 60);
  background1.scale = 3;
  background1.addImage(background2)

 arrowGroup=new Group()
redGroup=new Group()
blueGroup=new Group()
pinkGroup=new Group()
greenGroup=new Group()

  bow2 = createSprite(530, 100, 30, 30)
  bow2.addImage(bow1)


  edges = createEdgeSprites()
  
  

}



function draw() {


  if (keyWentDown("space")) {
    arrowMaking()
  }

  background1.velocityX = -3;


  if (background1.x < 0) {
    background1.x = background1.width / 2
  }

  bow2.y = mouseY

  var selectBalloon = Math.round(random(1, 4));
  console.log(selectBalloon)

  if (World.frameCount % 80 === 0) {
    if (selectBalloon === 1) {
      redBalloon()
    } else if (selectBalloon === 2) {
      greenBalloon()
    } else if (selectBalloon === 3) {
      pinkBalloon()
    } else if (selectBalloon === 4) {
      blueBalloon()
    }
  }

  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1
  }
  
  if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3
  }
  
  if(arrowGroup.isTouching(blueGroup)){
   blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+6
  }
  
  if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+8
  }

 
  drawSprites()

  
  textSize(20);
  text("score:" + score, 270, 30);
  text("Press Space to release arrows ",170,100 );

}



function arrowMaking() {
  var arrow

  arrow = createSprite(450, 100, 30, 30)
  arrow.scale = 0.5
  arrow.addImage(arrowImage)

  arrow.y = bow2.y

  arrow.velocityX = -3;
  arrow.lifetime = 150;
  arrowGroup.add(arrow);
}


function redBalloon() {
  var balloon4
  balloon4 = createSprite(0, Math.round(random(20, 570)), 10, 10)
  balloon4.addImage(balloonD);
  balloon4.scale = 0.12;
  balloon4.X = Math.round(random(20, 370));
  balloon4.velocityX = 3;
  balloon4.lifetime = 150
  redGroup.add(balloon4);
}


function greenBalloon() {

  var balloon3
  balloon3 = createSprite(0, Math.round(random(20, 570)), 10, 10)
  balloon3.addImage(balloonC);
  balloon3.scale = 0.12;
  balloon3.X = Math.round(random(20, 370));
  balloon3.velocityX = 3;
  balloon3.lifetime = 150
  greenGroup.add(balloon3);

}

function pinkBalloon() {

  var balloon2
  balloon2 = createSprite(0, Math.round(random(20, 570)), 10, 10)
  balloon2.addImage(balloonB);
  balloon2.scale = 1.5;
  balloon2.X = Math.round(random(20, 370));
  balloon2.velocityX = 3;
  balloon2.lifetime = 150
  pinkGroup.add(balloon2);
}

function blueBalloon() {

  var balloon1
  balloon1 = createSprite(0, Math.round(random(20, 570)), 10, 10)
  balloon1.addImage(balloonA);
  balloon1.scale = 0.12;
  balloon1.X = Math.round(random(10, 10));
  balloon1.velocityX = 3;
  balloon1.lifetime = 150
  blueGroup.add(balloon1);
}