let scl = 20;
let s;
let food;
// let counterElement = document.getElementById("counter");

function setup() {
  createCanvas(400, 400);
  frameRate(7);

  s = new Snake();
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(50);
  s.show();
  s.update();

  //console.log(s.tail);

  fill(230, 40, 90);
  rect(food.x, food.y, 20, 20);
  // let score = 0;

  if (s.eat(food)) {
    console.log("eating!!!");
    // score++;
    // counterElement.textContent = score;
    pickLocation();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

// console.log("Hello world");
