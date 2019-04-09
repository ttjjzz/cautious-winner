/**
* tIANJIN ZHANG
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
var xLocation;
var yLocation;
var uLocation;
var rScale;
var cColor;

function setup() {
  createCanvas(500, 500);
  xLocation=450;
  yLocation=0;
  uLocation=0;
  rScale=0;
  cColor=0;
  
}

function draw() {
  background(90);
  
  //creat the shape with color
  fill(cColor,0,0);
  ellipse(250,250,rScale,rScale);
  fill(20,68,100);
  rect(uLocation,yLocation,50,50);
  fill(80,60,5);
  rect(xLocation,yLocation,50,50);
  
  xLocation = xLocation - 1;
  yLocation = yLocation + 1;
  uLocation = uLocation + 1;
  rScale = rScale + 1;
  cColor = cColor + 1;
}

 