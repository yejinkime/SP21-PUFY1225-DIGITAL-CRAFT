
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background("black");
}


function draw() {

  let r=random(150,250);
  let g=random(150,250);
  let b=random(150,250);
  
  let xPos=random(0,windowWidth);
  let yPos=random(0,windowHeight);
  circleSize=random(0,250);
  
   noStroke();
  fill(r,g-10,b-10,30);
  circle(mouseX,mouseY,circleSize);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}