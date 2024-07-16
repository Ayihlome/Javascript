let bubbles = [];

function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < 8; i++) {
    bubbles[i] = new Bubble(random(width), random(height), 30);
  }
}

function draw() {
  background(0);

  // this checks if the balls are overlapping then changes its colour
  for (b of bubbles) {
    b.show(120, 20, 20);
    b.move();
    b.bounce();
    let overlapping = false;

    for (var j = 0; j < bubbles.length; j++) {
      if (b != bubbles[j] && b.Overlap(bubbles[j])) {
        overlapping = true;
      }
    }

    if (overlapping) {
      b.rebound();
    }

    // if (overlapping && counter > 10) {
    //   b.rebound();
    // }
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
    this.xspeed = random(1.5, 2.5);
    this.yspeed = random(1.5, 2.5);
  }

  Overlap(obj) {
    let d = dist(this.x, this.y, obj.x, obj.y);
    if (d < this.r + obj.r) {
      return true;
    } else {
      return false;
    }
  }

  rebound() {
    if (this.Overlap(this)) {
      this.xspeed = this.xspeed * -1;
      this.yspeed = this.yspeed * -1;
    }
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  show(r, g, b) {
    fill(r, g, b + this.brightness, 125);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }

  hovering(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      print("clicked");
      return true;
    } else {
      return false;
    }
  }

  ChangeCol(bright) {
    this.brightness = bright;
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
