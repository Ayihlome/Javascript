// This code is based on TheCodingTrain's YouTube videos
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xspeed = 2.5;
    this.yspeed = 2.5;
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  show(r, g, b) {
    fill(r, g, b);
    ellipse(this.x, this.y, this.r * 2);
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
