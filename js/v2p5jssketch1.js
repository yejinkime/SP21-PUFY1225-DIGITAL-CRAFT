
let opa=30;
let words = ["one", "two", "three","almost there"]; 
let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background("black");

}

function draw() {

   noStroke();
  
  // random values - color
    let s = random(0, 255);
    let r = random(50,200);
    let g = random(50,200);
    let b = random(50,200);
  
  // random values - position
    let xPos = random(0,windowWidth);
    let yPos = random(0,windowHeight);
  
    let diam= random(40,350);

    for(let j=0; j<random(200);j++)
        { //randomly possitioned texts
          fill(255,255,255,20);
          textSize(32);
          text(words[index], xPos+20, yPos+20);

          //randomly positioned planets
          fill(r,g,b,opa);
          ellipse(xPos, yPos, diam/2.5, diam/2.5);
          ellipse(xPos, yPos, (diam/2.5)*2, (diam/2.5)/2);
        
        
        }
    
   xPos = random(0,windowWidth);
   yPos = random(0,windowHeight);
  
   for(let i=0; i<random(200);i++)
        { //randomly positioned stars
          fill(s,s,s);
          ellipse(xPos,yPos,random(1,4));
        }

  
}


function mousePressed() {
  background(0);
  
  index = index + 1;

  if (index === words.length) {
    noLoop();
    background("white");
    fill("black");
    textSize(15);
    text('I found yours!', windowWidth/2, windowHeight/2);
   
  }
  
}