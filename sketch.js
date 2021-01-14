var a;

var b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = 'lightgreen';

  b = createSprite(300, 200, 30, 30);
  b.shapeColor = 'lightgreen';
}

function draw() {
  background(255,255,255);  

  b.x = World.mouseX;
  b.y = World.mouseY;
  console.log(b.y-a.y);

  if (b.x-a.x < a.width/2 + b.width/2 &&
    a.x - b.x < a.width/2 + b.width/2 && 
    b.y-a.y < a.height/2 + b.height/2 &&
    a.y-b.y < a.height/2 + b.height/2)
  {
    a.shapeColor = 'darkgreen';
    b.shapeColor = 'darkgreen';
  }
  else 
  {
    a.shapeColor = 'lightgreen';
    b.shapeColor = 'lightgreen';
  }
  
  drawSprites();
}