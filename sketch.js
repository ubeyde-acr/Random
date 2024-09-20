function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(255,0,5);
  rotateZ(frameCount * 0.01);
  box(100);
}
