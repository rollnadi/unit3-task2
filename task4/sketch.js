var letter = "R";

function setup(){
  createCanvas(500, 500);
  background(255);
  stroke(255,0,255);
  noFill();
  textFont("Arial");
  textSize(12);
  textAlign(CENTER, CENTER);
}

function mouseMoved(){
  background(255);
  noStroke();
  fill(255,51,51);
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function mouseDragged(){

  stroke(255,51,51);
  noFill();
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function keyPressed() {
  if (keyCode == CONTROL) save("P_3_0_01.png");
}

function keyTyped(){
      letter = str(key);
  
}