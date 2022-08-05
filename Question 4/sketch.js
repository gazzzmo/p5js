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

  var shiftxB = r/2 *cos(angle1);
  var shiftyB = r/2 *sin(angle1);

  var shiftxW = r/2 *cos(angle2);
  var shiftyW = r/2 *sin(angle2);

  fill("white")
  arc(x,y,width,height,0,360);
  fill("black")
  arc(x,y,width,height,90,270);
  ellipseMode(CENTER);
  ellipse(x+shiftxW,y+shiftyW,width/2,height/2);
  fill("white")
  ellipse(x+shiftxB,y+shiftyB,width/2,height/2);
  ellipse(x+shiftxW,y+shiftyW,width/8,height/8);


  fill("black")
  ellipse(x+shiftxB,y+shiftyB,width/8,height/8);


  angle1++;
  angle2++;

}