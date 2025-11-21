import p5 from "p5";

let sun: any;
let mercury: any;
let sunMass = 4.545 * Math.pow(10, 5);

new p5((p) => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(0);

    sun = new Planet(500, 500, 50, 100000, 0, 0, "yellow");
    mercury = new Planet(200, 200, 10, 50, 0, 0, "grey");
  };

  class Planet {
    x: number;
    y: number;
    radius: number;
    diameter: number;
    velocity_x: number;
    velocity_y: number;
    mass: number;
    static gravConstant = 6.674 * Math.pow(10, -5);
    color: string;

    constructor(
      x = 0,
      y = 0,
      radius = 0,
      mass = 0,
      velocity_x = 0,
      velocity_y = 0,
      color = "",
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.diameter = radius * 2;
      this.velocity_x = velocity_x;
      this.velocity_y = velocity_y;
      this.mass = mass;
      this.color = color;
    }

    draw() {
      p.fill(this.color);
      p.circle(this.x, this.y, this.diameter);
    }
  }

  // function distance(x1: number, y1: number) {
  //   console.log(totaldistance);
  // }

  function physics(x2: number, x1: number, y2: number, y1: number) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let distance = Math.sqrt(dx * dx + dy * dy);

    let F =
      (Planet.gravConstant * sun.mass * mercury.mass) / (distance * distance);

    let a = F / mercury.mass;

    let v_x = mercury.velocity_x + a * 10000;
    let v_y = mercury.velocity_y + a * 10000;

    mercury.x += v_x;
    mercury.y += v_y;
    // console.log(mercury.x);
    console.log(F);
  }

  p.draw = () => {
    p.clear();
    p.background(40);

    physics(sun.x, mercury.x, sun.y, mercury.y);
    physics(mercury.x, sun.x, mercury.y, sun.y);

    sun.draw();
    mercury.draw();
    // console.log(6.674 * Math.pow(10, -11));
  };
});
