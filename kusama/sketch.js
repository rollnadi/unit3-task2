var col = 0;
var r = 0;
var g = 51;
var b = 255;

function setup() {
  createCanvas(500,500);
}

function draw() {
  //background
  col = map(mouseX, 0, 500, 0, 255);
  background(col);

  // map
  r = map(mouseX,mouseY,500,0,255);

  // ellipse
  ellipse(0,200,50,50);
  ellipse(20,10,50,50);
  ellipse(50,70,50,50);
  ellipse(200,10,50,50);
  ellipse(250,100,50,50);
  ellipse(100,250,50,50);
  ellipse(300,200,50,50);
  ellipse(400,180,50,50);
  ellipse(430,270,50,50);
  ellipse(500,130,50,50);
  ellipse(300,360,50,50);
  ellipse(170,450,50,50);
  ellipse(470,460,50,50);
  
  fill(r,g,51);
  noStroke(0);
  
   // ellipse-big
  ellipse(200,300,100,100);
  ellipse(150,100,100,100);
  ellipse(400,50,100,100);
  ellipse(400,370,100,100);
  ellipse(50,400,100,100);
  ellipse(300,480,100,100);
  
  fill(r,g,51);
  noStroke(0);
}