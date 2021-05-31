var cat,catlie,catwalk,catsit;
var rat, ratch,ratd,ratf;
var bg,bgimg;

function preload() {
    //load the images here
    //background
    bgimg = loadImage("garden.png");
    // cat all animation and images
    catlie = loadImage("cat1.png");
    catwalk = loadAnimation("cat2.png","cat3.png");
    catsit = loadImage("cat4.png");
    //mouse allanimation and images
    ratch = loadImage("mouse1");
    ratd = loadAnimation("mouse2","mouse2.png");
    ratf = loadImage("mouse4");
}

function setup(){
    createCanvas(600,400);
    //create tom and jerry sprites here
    cat = createSprite(50,50,500,350)
    cat.addImage("cat1",catlie);
    cat.addAnimation("cat2",catwalk);
    cat.addImage("cta3",catsit);
    
    rat = createSprite(50,50,75,350)
    rat.addImage("ra1",ratch);
    rat.addAnimation("rat2",ratd);
    rat.addImag("rat3",ratf)



}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
