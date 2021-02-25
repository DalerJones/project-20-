var bg, bgIMG

var cat, catIMG, catIMG2, catIMG3

var mouse, mouseIMG, mouseIMG2, mouseIMG3

var gameState = "START";

function preload() {
    
    bgIMG = loadImage("images/garden.png");
     
    catIMG = loadImage("images/cat1.png");
    catIMG2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catIMG3 = loadImage("images/cat4.png");

    mouseIMG = loadImage("images/mouse1.png");
    mouseIMG2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseIMG3 = loadImage("images/mouse4.png");  


    //load the images here

}

function setup(){
    createCanvas(1000,800);
    
    
     
        bg = createSprite(500,400);
    bg.addImage(bgIMG);
    
    cat = createSprite(800, 600);
    cat.addImage(catIMG);
    cat.scale = 0.15;

    mouse = createSprite(200, 600);
    mouse.addImage(mouseIMG)
    mouse.scale = 0.15;

    
    
   

    
    //create tom and jerry sprites here


}

function draw() {
     
    

    if(gameState === "START" && keyDown("LEFT_ARROW")){
        
       cat.velocityX = -4;
       cat.addAnimation("cat",catIMG2);
       cat.changeAnimation("cat");

       mouse.addAnimation("mouse", mouseIMG2);
       mouse.changeAnimation("mouse");
    }

    background(255);
    
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
        cat.velocityX = 0;
       
        gameState = "END";

        cat.addAnimation("catLastImage",catIMG3);
        cat.changeAnimation("catLastImage");
        
     
        mouse.addAnimation("mouseLastImage",mouseIMG3);
        mouse.changeAnimation("mouseLastImage");
    }
    
     if(gameState === "END"){
         cat.x = mouse.x;
         cat.x = cat.x + 75;
     }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here


}
