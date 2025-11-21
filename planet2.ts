import p5 from "p5";

let sun: any;
let mercury: any;
let sunMass = 4.545 * Math.pow(10, 7);
let mercuryMass = 2.245 * Math.pow(10, 7);

new p5((p) => {
  p.setup = () => {
    p.createCanvas(1200, 1200);
    p.background(0);

    sun = new Planet(500, 500, 100, sunMass, 0, 0, "yellow");
    mercury = new Planet(300, 300, 20, mercuryMass, 2, -2, "grey");
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
    console.log(F);

    let F_x = F * (dx / distance);
    let F_y = F * (dy / distance);

    let A_x = F_x / mercury.mass;
    let A_y = F_y / mercury.mass;
    // console.log(A_x);

    let dt = 1;
    mercury.velocity_x += A_x * dt;
    mercury.velocity_y += A_y * dt;

    mercury.x += mercury.velocity_x * dt;
    mercury.y += mercury.velocity_y * dt;

    // console.log("F_x:", F_x, "F_y:", F_y);
    // console.log("Mercury position: ", mercury.x, mercury.y);
    // console.log("Mercury velocity: ", mercury.velocity_x, mercury.velocity_y);
    // mercury.x += v_x;
    // mercury.y += v_y;
    // console.log("X: ", (mercury.x += v_x));
    // console.log("Y: ", (mercury.y += v_y));
  }

  p.draw = () => {
    p.clear();
    p.background(40);

    physics(sun.x, mercury.x, sun.y, mercury.y);

    sun.draw();
    mercury.draw();
    // console.log(6.674 * Math.pow(10, -11));
  };
});
