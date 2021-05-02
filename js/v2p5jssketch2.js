let opa=50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background("black");

}


function draw() {

  for (let i = 0; i < width; i+=50) {
  for (let j = 0; j < height; j+=30){
      rect(i, j, 20, 40);
      fill(random(50, 200),15);
    }
  }
  
  let r=random(150,250);
  let g=random(150,250);
  let b=random(150,250);
  
  let xPos=random(0,windowWidth);
  let yPos=random(0,windowHeight);
  rectSize=random(0,150);
  
  noStroke();
  fill(r,g,b,opa);
  rect(mouseX,mouseY,rectSize);
  
}

function mousePressed() {
  background(random(0,255));
  opa = random(20,100);
}
