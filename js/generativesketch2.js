let xPos = 0;
let yPos = 0;
const width = 50;

function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
}

function draw() {
  background("white");
  
  
// basic pattern element
  

  fill (random(50,200));
  rect(0,yPos+width,width,width);
  

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*2;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*4;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*6;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*8;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
 
  xPos=width*10;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  //
  
  xPos=-width*2; 
  yPos=width*3;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
    xPos=0; 
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
    xPos=width*2; 

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
    xPos=width*4; 
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*6; 
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*8; 
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*10; 
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  
  //
  
  xPos=-width*2; 
  yPos=width*6;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=0;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  
  xPos=width*2;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*4;
  
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*6;
  
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
  xPos=width*8;
  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
 
  xPos=width*10;

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
    //
  
  xPos=-width*2; 
  yPos=width*9;

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
    xPos=0; 

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
    xPos=width*2; 

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
    xPos=width*4; 

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
    xPos=width*6; 

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
      xPos=width*8; 

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
      xPos=width*10; 

  fill (random(50,200));
  rect(xPos,yPos,width,width);
  rect(xPos,yPos+width*2,width,width);
  rect(xPos+width,yPos,width,width+width*2);
  rect(xPos+width*2,yPos+width,width,width);
  
}