import p5 from "p5";

let sun: any;
let mercury: any;

new p5((p) => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(0);
    p.angleMode(p.DEGREES);

    sun = new Planet(100, 100, 50, 50, 0, "yellow");
    mercury = new Planet(50, 50, 25, 20, 0, "grey");
  };

  class Planet {
    x: number;
    y: number;
    radius: number;
    diameter: number;

    speed: number;
    mass: number;

    static gravConstant = 6.674;

    color: string;

    constructor(x = 0, y = 0, radius = 0, mass = 0, speed = 0, color = "") {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.diameter = radius * 2;

      this.speed = speed;
      this.mass = 0;

      this.color = color;
    }

    draw() {
      p.fill(this.color);
      p.circle(this.x, this.y, this.diameter);
    }
  }

  p.draw = () => {
    sun.x = p.cos(p.frameCount * sun.speed) + 300;
    sun.y = p.sin(p.frameCount * sun.speed) + 300;

    sun.draw();
    mercury.draw();
  };
});

// .
