// This code is based on TheCodingTrain's YouTube videos

let r = 0;
let g = 0;
let b = 0;
let circleSize = 10;

function setup() {
  createCanvas(400, 400);

  background(0);
}

function mousePressed() {
  background(0);
}

function draw() {
  r = random(600);
  g = random(800);
  b = random(300);
  circleSize = random(10, 100);

  noStroke();
  fill(r, g, b, 150);
  ellipse(mouseX, mouseY, circleSize);
}
