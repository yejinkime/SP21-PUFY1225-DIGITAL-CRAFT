// runs once and setups the scene
function setup(){
    createCanvas (600, 600);
}

// runs forever
function draw(){
//grass
    background("#CFE4CF");
//road
    noStroke();
    fill("#F5E9CF");
    beginShape();
    vertex(0,350);
    vertex(0,600);
    vertex(600,600);
    vertex(600,0);
    vertex(457,0);
    endShape(CLOSE);
//shadow
    noStroke();
    fill("#EADDC0");
    quad(82,465,135,400,376,600,248,600);
    quad(300,502,352,438,546,600,418,600);
    quad(427,320,480,255,600,356,600,460);
// me
    //shoes 
    noStroke();
    fill("white");
    rect(73,380,72,72);
    rect(242,435,72,72);
    ellipse(109,451,72,32);
    ellipse(278,508,72,32);
    ellipse(186,378,59,56);
    ellipse(354,436,59,56);
    quad(98,411,165,359,206,399,143.5,455.5);
    quad(267,466,334,414,375,454,315,510.5);
  //pants
    noStroke();
    fill("#9FBEDB");
    rect(62,0,94,397);
    rect(231,0,94,437);
    ellipse(109,400,94,47);
    ellipse(278,439,94,47);
//dog
    noStroke();
    fill("#97806A");
    ellipse(441,324,32,25);
    ellipse(524,324,32,25);

    noStroke();
    fill("#A78D75");
    ellipse(499,149,96,95);

    noStroke();
    fill("#FFB2A9");
    quad(354,0,376,0,466,165,447,172)

    noStroke();
    fill("#A78D75");
    ellipse(485,220,129,120);
    rect(425,210,32,113);
    rect(508,210,32,113);
    
    noStroke();
    fill("#97806A");
    ellipse(480,200,23,55);
}