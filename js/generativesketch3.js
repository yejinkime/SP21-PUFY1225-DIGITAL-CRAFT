
let xPos = 300;
let yPos = 300;
let rad = 150;

function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
}

function draw() {
  background("white");
  
  
// basic orange circles
  
  fill ("#FE7235");
  ellipse(0,0,rad,rad);
  ellipse(xPos/2,0,rad,rad);
  ellipse(xPos,0,rad,rad);
  ellipse(xPos*1.5,0,rad,rad);
  ellipse(xPos*2,0,rad,rad);
  
  ellipse(0,yPos/2,rad,rad);
  ellipse(xPos/2,yPos/2,rad,rad);
  ellipse(xPos,yPos/2,rad,rad);
  ellipse(xPos*1.5,yPos/2,rad,rad);
  ellipse(xPos*2,yPos/2,rad,rad);
  
  ellipse(0,yPos,rad,rad);
  ellipse(xPos/2,yPos,rad,rad);
  ellipse(xPos,yPos,rad,rad);
  ellipse(xPos*1.5,yPos,rad,rad);
  ellipse(xPos*2,yPos,rad,rad);
    
  ellipse(0,yPos*1.5,rad,rad);
  ellipse(xPos/2,yPos*1.5,rad,rad);
  ellipse(xPos,yPos*1.5,rad,rad);
  ellipse(xPos*1.5,yPos*1.5,rad,rad);
  ellipse(xPos*2,yPos*1.5,rad,rad);
  
  ellipse(0,yPos*2,rad,rad);
  ellipse(xPos/2,yPos*2,rad,rad);
  ellipse(xPos,yPos*2,rad,rad);
  ellipse(xPos*1.5,yPos*2,rad,rad);
  ellipse(xPos*2,yPos*2,rad,rad);
    
  
  // inside circles  
 
  rad = 120;
  fill ("#FCF5EF");

  xPos=300;
  ellipse(0,0,rad,rad);
  ellipse(xPos/2,0,rad,rad);
  ellipse(xPos,0,rad,rad);
  ellipse(xPos*1.5,0,rad,rad);
  ellipse(xPos*2,0,rad,rad);
  

    ellipse(0,yPos,rad,rad);
  ellipse(xPos/2,yPos,rad,rad);
  ellipse(xPos,yPos,rad,rad);
  ellipse(xPos*1.5,yPos,rad,rad);
  ellipse(xPos*2,yPos,rad,rad);
  

    ellipse(0,yPos*2,rad,rad);
  ellipse(xPos/2,yPos*2,rad,rad);
  ellipse(xPos,yPos*2,rad,rad);
  ellipse(xPos*1.5,yPos*2,rad,rad);
  ellipse(xPos*2,yPos*2,rad,rad);
  
  xPos=400;
    fill ("#6DB5CB");
  ellipse(0,yPos/2,rad,rad);
  ellipse(xPos/2,yPos/2,rad,rad);
  ellipse(xPos,yPos/2,rad,rad);
  ellipse(xPos*1.5,yPos/2,rad,rad);
  ellipse(xPos*2,yPos/2,rad,rad);
  

  ellipse(0,yPos*1.5,rad,rad);
  ellipse(xPos/2,yPos*1.5,rad,rad);
  ellipse(xPos,yPos*1.5,rad,rad);
  ellipse(xPos*1.5,yPos*1.5,rad,rad);
  ellipse(xPos*2,yPos*1.5,rad,rad);
  

  
  
  
// inside circles  
 
  rad = 50;
  fill ("#B7D8DF");

  xPos=400;
  ellipse(0,0,rad,rad);
  ellipse(xPos/2,0,rad,rad);
  ellipse(xPos,0,rad,rad);
  ellipse(xPos*1.5,0,rad,rad);
  ellipse(xPos*2,0,rad,rad);
  
  ellipse(0,yPos,rad,rad);
  ellipse(xPos/2,yPos,rad,rad);
  ellipse(xPos,yPos,rad,rad);
  ellipse(xPos*1.5,yPos,rad,rad);
  ellipse(xPos*2,yPos,rad,rad);
  
  ellipse(0,yPos*2,rad,rad);
  ellipse(xPos/2,yPos*2,rad,rad);
  ellipse(xPos,yPos*2,rad,rad);
  ellipse(xPos*1.5,yPos*2,rad,rad);
  ellipse(xPos*2,yPos*2,rad,rad);

  
  xPos=300;
  ellipse(0,yPos/2,rad,rad);
  ellipse(xPos/2,yPos/2,rad,rad);
  ellipse(xPos,yPos/2,rad,rad);
  ellipse(xPos*1.5,yPos/2,rad,rad);
  ellipse(xPos*2,yPos/2,rad,rad);
  
  ellipse(0,yPos*1.5,rad,rad);
  ellipse(xPos/2,yPos*1.5,rad,rad);
  ellipse(xPos,yPos*1.5,rad,rad);
  ellipse(xPos*1.5,yPos*1.5,rad,rad);
  ellipse(xPos*2,yPos*1.5,rad,rad);
  
  
}