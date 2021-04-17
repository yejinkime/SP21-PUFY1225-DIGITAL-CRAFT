const xPos = 100;
const yPos = 100;
let diam=64;
let g=255;
let opa=80;

function setup() {
  createCanvas(500, 500);
  noLoop();
  noStroke();
}


function draw() {
  background(0);
  //clouds
   noStroke();
  
      fill(g,g,g,180);
  for(let i=0; i<random(30,30);i++) {ellipse(random(0,500),random(0,500),3);}
                                       
    fill(g,g,g,opa);
    ellipse(xPos, yPos, diam/2.5, diam/2.5);
    ellipse(xPos, yPos, (diam/2.5)*2, (diam/2.5)/2);

      fill(g,g,g,opa+20);
    ellipse(xPos*1.5, yPos*1.5, diam/2, diam/2);
    ellipse(xPos*1.5, yPos*1.5, (diam/2)*2, (diam/2)/2);
  
      fill(g,g,g,opa+40);
    ellipse(xPos*2, yPos*2, diam/1.5, diam/1.5);
    ellipse(xPos*2, yPos*2, (diam/1.5)*2, (diam/1.5)/2);
  
      fill(g,g,g,opa+60);
    ellipse(xPos*2.5, yPos*2.5, diam, diam);
    ellipse(xPos*2.5, yPos*2.5, diam*2, diam/2);
  
      fill(g,g,g,opa+40);
    ellipse(xPos*3, yPos*3, diam/1.5, diam/1.5);
    ellipse(xPos*3, yPos*3, (diam/1.5)*2, (diam/1.5)/2);
  
      fill(g,g,g,opa+20);
    ellipse(xPos*3.5, yPos*3.5, diam/2, diam/2);
    ellipse(xPos*3.5, yPos*3.5, (diam/2)*2, (diam/2)/2);
    
    fill(g,g,g,opa);
    ellipse(xPos*4, yPos*4, diam/2.5, diam/2.5);
    ellipse(xPos*4, yPos*4, (diam/2.5)*2, (diam/2.5)/2);
  
  //
  opa=20;
  
   fill(g,g,g,opa);
    ellipse(xPos, yPos*4, diam/2.5, diam/2.5);
    ellipse(xPos, yPos*4, (diam/2.5)*2, (diam/2.5)/2);
  
     fill(g,g,g,opa+20);
    ellipse(xPos*1.5, yPos*3.5, diam/2, diam/2);
    ellipse(xPos*1.5, yPos*3.5, (diam/2)*2, (diam/2)/2);
  
     fill(g,g,g,opa+40);
    ellipse(xPos*2, yPos*3, diam/1.5, diam/1.5);
    ellipse(xPos*2, yPos*3, (diam/1.5)*2, (diam/1.5)/2);
  
        fill(g,g,g,opa+60);
    ellipse(xPos*2.5, yPos*2.5, diam, diam);
    ellipse(xPos*2.5, yPos*2.5, diam*2, diam/2);

   fill(g,g,g,opa+40);
    ellipse(xPos*3, yPos*2, diam/1.5, diam/1.5);
    ellipse(xPos*3, yPos*2, (diam/1.5)*2, (diam/1.5)/2);

   fill(g,g,g,opa+20);
    ellipse(xPos*3.5, yPos*1.5, diam/2, diam/2);
    ellipse(xPos*3.5, yPos*1.5, (diam/2)*2, (diam/2)/2);

   fill(g,g,g,opa);
    ellipse(xPos*4, yPos, diam/2.5, diam/2.5);
    ellipse(xPos*4, yPos, (diam/2.5)*2, (diam/2.5)/2);

  
}