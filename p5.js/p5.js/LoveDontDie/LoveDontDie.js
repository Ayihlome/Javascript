let words = ["Love", "Don't", "Die"];
let r;
let y = 0;
let gravity = 2;
let num = -3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // this is for the text
  textSize(42);
  textStyle(BOLDITALIC);
  for (var i = 0; i < words.length; i++) {
    let r = map(y, 0, 600, 0, 400);
    fill(r, 10, 10);
    text(words[i], 12, i * 100 + 120);
  }

  // this will be the ball
  fill(280, 40, 0);
  ellipse(260, y, 45, 45);
  if (y >= height) {
    gravity = gravity - num;
  }
  y = y + gravity;
  // while (y > -1) {
  //   num++;
  // }
}
