function setup() {
  createCanvas(500,500);
  background("grey");
}

angle1 = 270
angle2 = 90
function draw() {
   // changable variables means that the ying yang can move and change in size

  // this could be done with only one variable for the width and height (radius)

  // how big 
  var width = 300
  var height = 300

  // coordinates / location 
  var x = 250
  var y = 250

 var r = 150
  clear()
  angleMode(DEGREES);
  ellipseMode(CENTER);
  noStroke();

  // Setup variables for rotation
  var shiftxB = r/2 *cos(angle1);
  var shiftyB = r/2 *sin(angle1);

  var shiftxW = r/2 *cos(angle2);
  var shiftyW = r/2 *sin(angle2);

  // Begin drawing
  // Draw big white half circle on right
  fill("white")
  arc(x,y,width,height,0,360);
  // Draw big black half circle on left
  fill("black")
  arc(x,y,width,height,90,270);

  ellipseMode(CENTER);
  // Draw medium black circle at bottom
  //fill("black")
  //ellipse(x+shiftxW,y+shiftyW,width/2,height/2);
  // Draw medium white circle at top
  //fill("white")
  //ellipse(x+shiftxB,y+shiftyB,width/2,height/2);
  // Draw small white circle at bottom
  //fill ("white")
  //ellipse(x+shiftxW,y+shiftyW,width/8,height/8);
  // Draw small black circle at tome
  //fill("black")
  //ellipse(x+shiftxB,y+shiftyB,width/8,height/8);

  // Rotate it!
  angle1++;
  angle2++;

}