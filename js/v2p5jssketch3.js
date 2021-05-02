let opa=30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background("black");
}


function draw() {
 // make blurrly space-like background
  for (let i = 0; i < width; i+=15) {
    for (let j = 0; j < height; j+=15){
      ellipse(i, j, 30, 30);
      fill(0, random(0, 30), random(0, 100), 15);
    }
  }
  
  // make a light following the mouse position 
  let r=random(150,250);
  let g=random(150,250);
  let b=random(150,250);
  
  let xPos=random(0,windowWidth);
  let yPos=random(0,windowHeight);
  circleSize=random(0,250);
  
  noStroke();
  fill(r,g,b,opa);
  circle(mouseX,mouseY,circleSize);
}

function mousePressed() {
  background(random(0,255),0,0);
  opa = random(20,100);
}
