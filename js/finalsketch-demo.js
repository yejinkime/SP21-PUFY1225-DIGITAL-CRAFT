
let opa=30;
let words = ["one", "two", "three","almost there..."]; 
let index = 0;


/*let fontGame;
function preload() {
  fontGame = loadFont('../assets/PressStart2P-Regular.ttf');
}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background("black");
  frameRate(30);
}

function draw() {

   noStroke();
  
  // random values - color
    let stars = random(0, 255);
    let r = random(50,200);
    let g = random(50,200);
    let b = random(50,200);
  
  // random values - position and diameter
    let xPos = random(0,windowWidth);
    let yPos = random(0,windowHeight);
   
    let diam= random(40,400);
    
    for(let i=0; i<random(200);i++)
        { 
          //randomly positioned planets
          fill(r,g,b,opa);
          ellipse(xPos, yPos, diam/2.5, diam/2.5);
          fill(r+50,g+50,b+50,opa);
          ellipse(xPos, yPos, (diam/2.5)*2, (diam/2.5)/2);
        
          //randomly positioned texts with index
          fill(255,255,255,opa);
          textSize(30);
          text(words[index], xPos-diam, yPos-diam);
        }
    
      // make blurrly space-like background
    for (let k = 0; k < width; k+=15) {
    for (let l = 0; l < height; l+=15){
    ellipse(k, l, 30, 30);
    fill(0, random(0, 50), random(0, 150), 8);
    
    }
  }

}

function mousePressed() {
  
  // going to next page
  
    background(0,random(0,155),0);
    index = index + 1;
  
    if (index === words.length) {
    background('#00164D');
    noLoop();
    textSize(20);
    fill("white");
    //textFont(fontGame);
    text('I found yours!', windowWidth/2, windowHeight/2);
  }

}