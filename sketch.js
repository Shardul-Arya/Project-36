var dog,sadDog,happyDog;
var feed, addFood
var foodObj
var foodS = 0
var Food

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton('Feed The Dog');
  feed.position(700, 95);
  feed.mousePressed(feedDog)

  addFood = createButton('Add Food');
  addFood.position(800, 95);
  addFood.mousePressed(addFoods)

  foodObj = new Foods();
}

function draw() {
  background(46,139,87);

  drawSprites();

  foodObj.display();

  console.log(foodObj.foodStock)
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog() {
  dog.addImage(happyDog);

  if (foodObj.getFoodStock()<= 0) {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.foodStock = foodObj.foodStock-1);
  }
}


//function to add food in stock
function addFoods() {
  foodS++;
  database.ref('/').update({
    Food:foodS
  })

  foodObj.foodStock = foodObj.foodStock + 1
}
