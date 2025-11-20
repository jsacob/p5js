import p5 from "p5";

let sun: any;
let mercury: any;

new p5((p) => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(0);
    p.angleMode(p.DEGREES);

    sun = new Planet(200, 200, 50, 5, 0, 0, "yellow");
    mercury = new Planet(100, 100, 25, 1, 1, 1, "grey");
  };

  class Planet {
    x: number;
    y: number;
    radius: number;
    diameter: number;
    velcoity_x: number;
    velcoity_y: number;
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
      this.velcoity_x = velocity_x;
      this.velcoity_y = velocity_y;
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

  p.draw = () => {
    // calculates distance between two objects
    let sx: number = sun.x - mercury.x;
    let sy: number = sun.y - mercury.y;
    let px: number = Math.pow(sx, 2);
    let py: number = Math.pow(sy, 2);
    let add: number = px + py;
    let sroot: number = Math.sqrt(add);
    let totaldistance: number = Math.pow(sroot, 2);

    // calculates the gravtational force
    let F = (Planet.gravConstant * (sun.mass * mercury.mass)) / totaldistance;
    console.log(F);
    // calculates the accleration putting the smaller object in rotation to the larger object
    let a_x = F / mercury.mass;
    let a_y = F / mercury.mass;
    let v_x = mercury.velcoity_x + a_x * 0;
    let v_y = mercury.velcoity_y + a_y * 0;

    mercury.x = mercury.x + v_x;
    mercury.y = mercury.y + v_y;

    // console.log(mercury.velcoity_x, mercury.velcoity_y);
    // console.log(a);
    sun.draw();
    mercury.draw();
  };
});

// still not working completely not sure
// why but ill fix it later
