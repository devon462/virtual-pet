var dog,sadDog,happyDog;
var feedButton
var addFoodButton

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkImage = loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  textSize(20)
  fill("black")
  text("Buddy", 770,140)
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
