



function draw() {

    
//making an introductory pane
if(gameState== "PRE"){

//muzic.play();

BG= createSprite(windowWidth/2,windowHeight/2);
BG. addImage(iBGImg);
BG.scale= 2.2;

//making a pane for the start
if(subState =="play"){



//making start button and text sprite
playButton = createSprite(windowWidth/2,windowHeight/2);
playButton.addImage(pBImg);
playButton.scale = 1.5; 

playText = createSprite(windowWidth/2,windowHeight/2 + 100);
playText.addImage(pB);
playText.scale = 1.5;

//changing to options menu
if(mousePressedOver(playButton)){
subState = "gibo";
}}

if(subState == "gibo"){
//choosing between girl and boy
girl = createSprite(windowWidth/2 + 150, windowHeight/2);
girl. addImage(girlImg);
girl.scale = 1;

man1 = createSprite(windowWidth/2 - 150, windowHeight/2);
man1. addImage(man1Img);
man1.scale = 1.8;

if(mousePressedOver(girl)){
    gender = "female";
    p1 = girlImg;
    p2 = girl1Img;
    p3 = girl2Img;
    p4 = girl3Img;
}

if(mousePressedOver(man1)){
    gender = "male";
    p1 = man1Img;
    p2 = man2Img;
    p3 = man3Img;
    p4 = man4Img;
}


if(mousePressedOver(girl) || mousePressedOver(man1)){
    subState = "tractorS";
    girl.destroy();
    man1.destroy();
 }

}

if(subState == "tractorS"){

//choosing between different colours of tractors
gTractor = createSprite(windowWidth/4, windowHeight/4);
gTractor.addImage(gCImg);
gTractor.scale = 0.6;

yTractor = createSprite(windowWidth/4, windowHeight* 3/4);
yTractor.addImage(yCImg);
yTractor.scale = 0.6;

bTractor = createSprite(windowWidth*3/4, windowHeight/4);
bTractor.addImage(bCImg);
bTractor.scale = 1.5;

rTractor = createSprite(windowWidth*3/4, windowHeight*3/4);
rTractor.addImage(rCImg);
rTractor.scale = 2;

//making the tractor according to the chosen color
if(mousePressedOver(gTractor)){
    topViewTractor = tvg
}

if(mousePressedOver(bTractor)){
    topViewTractor = tvb
}

if(mousePressedOver(rTractor)){
    topViewTractor = tvr
}

if(mousePressedOver(yTractor)){
    topViewTractor = tvy
}

if(mousePressedOver(gTractor)|| mousePressedOver(yTractor)|| mousePressedOver(bTractor)|| mousePressedOver(rTractor)){
    subState = "instruct";
rTractor.destroy();
    bTractor.destroy();
    yTractor.destroy();
    gTractor.destroy();
}}

//instructions pane
if(subState == "instruct"){
instruct = createSprite(windowWidth/2, windowHeight * 3/4);
instruct.addImage(iImg);

//starting the game
if(keyDown(RIGHT_ARROW)){
    subState= "end";
    gameState= "PLAY";
}
}

}

if(gameState == "PLAY"){

    //music.play();
//making the background
playBG = createSprite(windowWidth/2, -500);
playBG.scale = 1;
//playBG.addImage(backImg);
playBG.addImage(bgImg);
playBG.velocityY = 5;
traCtor = createSprite(windowWidth/2, windowHeight*3/4);
traCtor.addImage(topViewTractor);

//making the buttons
left = createSprite(windowWidth-200, windowHeight*3/4);
left.addImage(lImg);
left.scale = 0.04;
right = createSprite(windowWidth-100, windowHeight*3/4);
right.addImage(rImg);
right.scale = 0.04;
speed = createSprite(windowWidth-150, windowHeight*3/4 - 50);
speed.addImage(sImg);
speed.scale = 0.04;

createCorn();
createCarrot();
createBrinjal();
createLettuce();
createRBP();
createRBanana();
createRLeaves();
createRTomatoes();

if(mousePressedOver(left) || keyDown(LEFT_ARROW)){
    traCtor.x -= 5;
}

if(mousePressedOver(right) || keyDown(RIGHT_ARROW)){
    traCtor.x += 5;
}

if(mousePressedOver(speed) || keyIsDown(UP_ARROW)){
    playBG.velocityY = playBG.velocityY + 5;
}

if(playBG.y > windowHeight){
    playBG.y = -200;
  }

leftb = createSprite(windowWidth/4 + 20, windowHeight/2, 10, windowHeight);
leftb.visible = false;
rightb = createSprite(windowWidth * 3/4 - 20, windowHeight/2, 10, windowHeight);
rightb.visible = false;

if(cornG.isTouching(traCtor)){
    cornG.destroyEach();
    produce += 10
} else if(carrotG.isTouching(traCtor)){
    carrotG.destroyEach();
    produce += 5;
} else if (brinjalG.isTouching(traCtor)){
    brinjalG.destroyEach();
    produce += 15;
} else if(lettuceG.isTouching(traCtor)){
    lettuceG.destroyEach();
    produce +=20;
} else if(rTG.isTouching(traCtor)){
    rTG.destroyEach();
    produce -= 5;
} else if(rPG.isTouching(traCtor)){
    rPG.destroyEach();
    produce -= 10;
} else if(rBG.isTouching(traCtor)){
    rBG.destroy();
    produce -= 15;
} else if(rLG.isTouching(traCtor)){
    rLG.destroyEach();
    produce -= 20;
}



}


drawSprites();

if(subState == "play"){
    push();
    textFont("Cooper Black");
    textSize(30);
    fill("red");
    text("Welcome to Farm Mania!", windowWidth* 2/5, windowHeight/4);
    pop();
    }

if(subState == "gibo"){
    push();
    textFont("Cooper Black");
    textSize(30);
    fill("red");
    text("Choose if you are a boy or girl", windowWidth/3, windowHeight/4);
    pop();
    }

if(subState == "tractorS"){
    push();
    textFont("Cooper Black");
    textSize(30);
    fill("red");
    text("Choose your favorite color for your tractor", windowWidth/4, windowHeight/2);
    pop();
    }

if(subState == "instruct"){
    push();
    textFont("Cooper Black");
    textSize(30);
    fill("purple");
    text("You are employed to harvest all the good produce with your tractor and leave", windowWidth/15, windowHeight/10)
    text("out the spoiled ones. Press the 'left' key to move left. Press the'right' key to", windowWidth/15, windowHeight/7);
    text("move right. Press the 'up' key to boost your speed.", windowWidth/15, windowHeight/5);
    text("Have fun!!", windowWidth/15, windowHeight/4);
    text("Press 'right' to start!", windowWidth * 2/3, windowHeight * 3/4);
    pop();
}

if(gameState == "PLAY"){

textSize(20);
  fill(255);
  textFont("Lucida Console");
  text("Harvest Points: "+ produce,width-250,30);}

}

function createCorn(){
    if (World.frameCount % 100 == 0) {
        corn = createSprite(Math.round(random(50, 350),40, 10, 10));
        corn.addImage(cornImg);
        corn.scale=0.03;
        corn.velocityY = playBG.velocityY;
        corn.lifetime = 150;
        cornG.add(corn);
      }
}

function createCarrot(){
    if (World.frameCount % 50 == 0) {
        carrot = createSprite(Math.round(random(50, 350),40, 10, 10));
        carrot.addImage(cornImg);
        carrot.scale=0.03;
        carrot.velocityY = playBG.velocityY;
        carrot.lifetime = 150;
        carrotG.add(carrot);
      }
}

function createLettuce(){
    if (World.frameCount % 25 == 0) {
        lettuce = createSprite(Math.round(random(50, 350),40, 10, 10));
        lettuce.addImage(lettuceImg);
        lettuce.scale=0.03;
        lettuce.velocityY = playBG.velocityY;
        lettuce.lifetime = 150;
        lettuceG.add(lettuce);
      }
}

function createBrinjal(){
    if (World.frameCount % 200 == 0) {
        brinjal = createSprite(Math.round(random(50, 350),40, 10, 10));
        brinjal.addImage(brinjalImg);
        brinjal.scale=0.03;
        brinjal.velocityY = playBG.velocityY;
        brinjal.lifetime = 150;
        brinjalG.add(brinjal);
      }
}

function createRBanana(){
    if (World.frameCount % 150 == 0) {
        rBananas = createSprite(Math.round(random(50, 350),40, 10, 10));
        rBananas.addImage(rBananasImg);
        rBananas.scale=0.03;
        rBananas.velocityY = playBG.velocityY;
        rBananas.lifetime = 150;
        rBG.add(rBananas);
      }
}

function createRBP(){
    if (World.frameCount % 300 == 0) {
        rPepper = createSprite(Math.round(random(50, 350),40, 10, 10));
        rPepper.addImage(rPepperImg);
        rPepper.scale=0.03;
        rPepper.velocityY = playBG.velocityY;
        rPepper.lifetime = 150;
        rPG.add(rPepper);
      }
}

function createRLeaves(){
    if (World.frameCount % 250 == 0) {
        rLeaves = createSprite(Math.round(random(50, 350),40, 10, 10));
        rLeaves.addImage(rLeavesImg);
        rLeaves.scale=0.03;
        rLeaves.velocityY = playBG.velocityY;
        rLeaves.lifetime = 150;
        rLG.add(rLeaves);
      }
}

function createRTomatoes(){
   
}
