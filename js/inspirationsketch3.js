// runs once and setups the scene
function setup(){
	createCanvas (600, 678);
}

// runs forever
function draw(){
//sky
	background("#E0F1F4");
//snow
    noStroke();
    fill("white");
    rect(0,444,600,156);
//shadow
    noStroke();
    fill("#EDEDED");
    quad(260,506,315,451,504,600,381,600);
//tree
    noStroke();
    fill("#CEAF9E");
    rect(261,422,78,80);
    ellipse(300,502,78,41)
    noStroke();
    fill("#97C1A9");
    triangle(300,252,453,399,148,399);
    ellipse(300,401,305,58);
    noStroke();
    fill("#B4D3B4");
    triangle(300,162,453,310,148,310);
    ellipse(300,312,305,58);
    noStroke();
    fill("#CCE2CB");
    triangle(300,73,453,220,148,220);
    ellipse(300,222,305,58);
//snow
    noStroke();
    fill("white");
    ellipse(500,60,26,26);
    ellipse(141,86,26,26);
    ellipse(237,162,26,26);
    ellipse(540,300,26,26);
    ellipse(367,372,26,26);
//window
    noStroke();
    fill("#E3EAEA");
    rect(0,0,74,600);
    rect(572,0,28,600);
    noStroke();
    fill("#ECF0F0");
    rect(0,600,600,78);
    noStroke();
    fill(255,255,255,90);
    quad(173,0,364,0,544,600,353,600);
  
}