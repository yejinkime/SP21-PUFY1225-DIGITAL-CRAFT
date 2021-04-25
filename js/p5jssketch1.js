
let opa=50;

function setup() {
  createCanvas(500, 500);
  noStroke();

}

function draw() {

   noStroke();
  
  // random values - color
    const s = random(0, 255);
    const r = random(50,200);
    const g = random(50,200);
    const b = random(50,200);
  
  // random values - position
    const xPos = random(0,250);
    const yPos = random(0,250);
  
    const diam= random(40,200);
  
    fill(s,s,s,opa);
    for(let i=0; i<random(30,30);i++)
        {ellipse(random(0,500),random(0,500),3);}
                                       
    fill(r,g,b,opa);
    ellipse(xPos, yPos, diam/2.5, diam/2.5);
    ellipse(xPos, yPos, (diam/2.5)*2, (diam/2.5)/2);

      fill(r-50,g,b,opa+20);
    ellipse(xPos*1.5, yPos*1.5, diam/2, diam/2);
    ellipse(xPos*1.5, yPos*1.5, (diam/2)*2, (diam/2)/2);
  
      fill(r-100,g,b,opa+40);
    ellipse(xPos*2, yPos*2, diam/1.5, diam/1.5);
    ellipse(xPos*2, yPos*2, (diam/1.5)*2, (diam/1.5)/2);
  
      fill(r,g,b,opa+60);
    ellipse(xPos*2.5, yPos*2.5, diam, diam);
    ellipse(xPos*2.5, yPos*2.5, diam*2, diam/2);
  
      fill(r-100,g,b,opa+80);
    ellipse(xPos*3, yPos*3, diam/1.5, diam/1.5);
    ellipse(xPos*3, yPos*3, (diam/1.5)*2, (diam/1.5)/2);
  
      fill(r-50,g,b,opa+100);
    ellipse(xPos*3.5, yPos*3.5, diam/2, diam/2);
    ellipse(xPos*3.5, yPos*3.5, (diam/2)*2, (diam/2)/2);
    
    fill(r,g,b,opa+120);
    ellipse(xPos*4, yPos*4, diam/2.5, diam/2.5);
    ellipse(xPos*4, yPos*4, (diam/2.5)*2, (diam/2.5)/2);
  
  //
  opa=100;
  
   fill(r,g,b,opa);
    ellipse(xPos, yPos*4, diam/2.5, diam/2.5);
    ellipse(xPos, yPos*4, (diam/2.5)*2, (diam/2.5)/2);
  
     fill(r,g-50,b-50,opa+20);
    ellipse(xPos*1.5, yPos*3.5, diam/2, diam/2);
    ellipse(xPos*1.5, yPos*3.5, (diam/2)*2, (diam/2)/2);
  
     fill(r,g-100,b-100,opa+40);
    ellipse(xPos*2, yPos*3, diam/1.5, diam/1.5);
    ellipse(xPos*2, yPos*3, (diam/1.5)*2, (diam/1.5)/2);
  
        fill(r,g,b-100,opa+60);
    ellipse(xPos*2.5, yPos*2.5, diam, diam);
    ellipse(xPos*2.5, yPos*2.5, diam*2, diam/2);

   fill(r,g-100,b-100,opa+60);
    ellipse(xPos*3, yPos*2, diam/1.5, diam/1.5);
    ellipse(xPos*3, yPos*2, (diam/1.5)*2, (diam/1.5)/2);

   fill(r,g-50,b-50,opa+80);
    ellipse(xPos*3.5, yPos*1.5, diam/2, diam/2);
    ellipse(xPos*3.5, yPos*1.5, (diam/2)*2, (diam/2)/2);

   fill(r,g,b,opa+100);
    ellipse(xPos*4, yPos, diam/2.5, diam/2.5);
    ellipse(xPos*4, yPos, (diam/2.5)*2, (diam/2.5)/2);
}


function mousePressed() {
  background(0);
}