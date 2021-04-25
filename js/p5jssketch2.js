
let xPos = 300;
let yPos = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(15);
}

function draw() {
  background("white");
  
// basic orange circles - made code super short! 
  
    let Orad = random(100,150);
    for (let i = 0; i < width; i += Orad) {
    for (let j = 0; j < height; j += Orad) {
      const rFill = random(10, 150);
      fill(254,114,rFill);
      ellipse(i, j, Orad, Orad);
    }
  }
  

  // inside circles  - light orange
 
  let rad = random(80,120);
  
    for (let i = 0; i < width; i += Orad) {
    for (let j = 0; j < height; j += 2*Orad) {
      fill("#FCF5EF");
      ellipse(i, j, rad, rad);
    }
  }
  
  // inside circles  - blue
  
    xPos=400;
    for (let i = 0; i < width; i += xPos*0.5) {
    for (let j = Orad; j < height; j += 2*Orad) {
      fill("#6DB5CB");
      ellipse(i, j, rad, rad);
    }
  }
  
  // inside circles  - sky blue 1
 
    rad = random(30,50);
    for (let i = 0; i < width; i += Orad) {
    for (let j = Orad; j < height; j += 2*Orad) {
      fill("#B7D8DF");
      ellipse(i, j, rad, rad);
    }
  }
  
    for (let i = 0; i < width; i += 4*rad) {
    for (let j = 0; j < height; j += 2*Orad) {
      fill("#B7D8DF");
      ellipse(i, j, rad, rad);
    }
  }

}


function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
