 function setup() {
  createCanvas(3000, 3000);
    noLoop();
  colorMode(HSB);
}

function draw() {
  background("whitesmoke")

  
  
  var randomHue = random(360);
  stroke("white");
  strokeCap(SQUARE);
 strokeWeight(500)
  
  curveVertex(random(width),random(height))
curveVertex(random(width),random(height))

curveVertex(random(width),random(height))
fill("olivedrab")
  
  stroke("black");
  strokeCap(SQUARE); 
 strokeWeight(477)
  
  
  
  
  
let times = 3


  
  
while( times-- ) {
  beginShape()
curveVertex(random(width),random(height))
curveVertex(random(width),random(height)) 
curveVertex(random(width),random(height))
curveVertex(random(width),random(height))

  
  
  
  
  
  curveVertex(random(width),random(height))
curveVertex(random(width),random(height))
curveVertex(random(width),random(height))
curveVertex(random(width),random(height))
fill("olivedrab")
  
  curveVertex(random(width),random(height))
curveVertex(random(width),random(height))
curveVertex(random(width),random(height))
curveVertex(random(width),random(height))
fill("orangered")
  
endShape()

  function draw() {
  background(100);

  for (let circleY = 75; circleY <= 225; circleY += 75) {
    for (let circleX = 75; circleX <= 225; circleX += 75) {
      circle(circleX, circleY, 50);
    }
  }
}

  stroke("white");
  strokeCap(SQUARE);
  fill(0,0,0)
  
  

};
}