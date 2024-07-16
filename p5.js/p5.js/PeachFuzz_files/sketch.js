// This code is based on TheCodingTrain's YouTube videos
let bubbles = [];

function setup() {
  createCanvas(600, 600);
}

function mousePressed() {
  let b = new Bubble(mouseX, mouseY, random(40, 80));
  bubbles.push(b);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].tapped();
  }
}

function draw() {
  background(0);

  for (var j = 0; j < bubbles.length; j++) {
    bubbles[j].move();
    bubbles[j].bounce();
    bubbles[j].show(200, 200);
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.b = 20;
    this.xspeed = random(1.5, 2.5);
    this.yspeed = random(1.5, 2.5);
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  show(r, g) {
    fill(r, g, this.b, 125);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }

  tapped() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      this.b = random(0, 150);
    }
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }

    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }
}
