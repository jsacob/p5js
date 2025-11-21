import p5 from "p5";

let sun: any;
let mercury: any;

new p5((p) => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(0);
    p.angleMode(p.DEGREES);

    sun = new Planet(200, 200, 50, 500000, 1, 1, "yellow");
    mercury = new Planet(500, 500, 25, 200000, 0.2, 0.2, "grey");
  };

  class Planet {
    x: number;
    y: number;
    radius: number;
    diameter: number;
    velocity_x: number;
    velocity_y: number;
    mass: number;
    static gravConstant = 6.674 * Math.pow(10, -11);
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
    let s_x = x2 - x1;
    let s_y = y2 - y1;
    let sqrtx = Math.pow(s_x, 2);
    let sqrty = Math.pow(s_y, 2);
    let add = sqrtx + sqrty;
    let sqrtadd = Math.sqrt(add);

    let F =
      (Planet.gravConstant * sun.mass * mercury.mass) / (sqrtadd * sqrtadd);

    console.log(F);

    let a = F / mercury.mass;

    let v_x = mercury.velocity_x + a * 3600;
    let v_y = mercury.velocity_y + a * 3600;

    mercury.x = mercury.x + v_x;
    mercury.y = mercury.y + v_y;
    // console.log(mercury.x);
  }

  p.draw = () => {
    physics(sun.x, mercury.x, sun.y, mercury.y);
    physics(mercury.x, sun.x, mercury.y, sun.y);

    sun.draw();
    mercury.draw();
  };
});
