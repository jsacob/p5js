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
    static gravConstant = 6.674 * Math.pow(10, -11);
    color: string;

    constructor(x = 0, y = 0, radius = 0, mass = 0, speed = 0, color = "") {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.diameter = radius * 2;
      this.speed = speed;
      this.mass = mass;
      this.color = color;
    }

    draw() {
      p.fill(this.color);
      p.circle(this.x, this.y, this.diameter);
    }
  }

  p.draw = () => {
    // sun.x = p.cos(p.frameCount * sun.speed) + 300;
    // sun.y = p.sin(p.frameCount * sun.speed) + 300;

    // take the suns x and mercury x
    // then suns y and mercury y
    // square them first, then subtract them
    // then add the two outcomes
    // then square
    //

    let sx = sun.x - mercury.x;
    let sy = sun.y - mercury.y;
    let px = Math.pow(sx, 2);
    let py = Math.pow(sy, 2);
    let total = px + py;
    let distance = Math.sqrt(total);
    console.log(distance);

    let F =
      ((Planet.gravConstant * (sun.mass * mercury.mass)) / distance) * distance;
    // console.log(sun.mass, mercury.mass);
    console.log(F);

    sun.draw();
    mercury.draw();
  };
});
