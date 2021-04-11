// runs once and setups the scene
function setup(){
	createCanvas (600, 600);
}

// runs forever
function draw(){
//Sky
	background("#D4F0F1");
//Sand
    noStroke();
	fill("#F8F1E6");
	rect(0,448, 600, 186);
//Sea
	noStroke();
	fill("#ACDEE7");
	rect(0, 290, 600, 185);
//Wave
    ellipse(50, 475.5, 100, 43);
    ellipse(250, 475.5, 100, 43);
    ellipse(450, 475.5, 100, 43);
    noStroke();
	fill("#F8F1E6");
    ellipse(150, 475.5, 100, 43);
    ellipse(350, 475.5, 100, 43);
    ellipse(550, 475.5, 100, 43);
//Sun
    noStroke();
	fill("#FFB2A9");
    arc(299.5, 288.5, 305, 305,PI,0);
// Sun on the water
    noStroke();
	fill("#FFCDB6");
	rect(156,297, 280, 12);
	rect(187,316, 219, 12);
	rect(223,335, 147, 12);
//clouds
    noStroke();
	fill("white");
    ellipse(500, 154, 65, 68);
    ellipse(500, 154, 114, 48);
    ellipse(120, 86, 65, 68);
    ellipse(120, 86, 114, 48);
}