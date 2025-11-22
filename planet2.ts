import p5 from "p5";

let sun: any;
let mercury: any;
let venus: any;
let earth: any;

let sunMass = 4.545 * Math.pow(10, 13);

// let mercuryMass = 2.245 * Math.pow(10, 7);
// let venusMass = 8.245 * Math.pow(10, 7);

new p5((p) => {
  p.setup = () => {
    p.createCanvas(1900, 1060, p.WEBGL);
    p.background(0);

    sun = new Planet(0, 0, 50, sunMass, 0, 0, "yellow");
    mercury = new Planet(150, 150, 20, 1, 0, 0, "grey");
    venus = new Planet(200, 200, 30, 1, 2, -2, "orange");
    earth = new Planet(250, 250, 40, 1, 1, -1, "green");
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

  function physicsRework(planet: Planet, sun: Planet) {
    let dx = sun.x - planet.x;
    let dy = sun.y - planet.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    let Force =
      (Planet.gravConstant * sun.mass * planet.mass) / (distance * distance);

    let Force_x = Force * (dx / distance);
    let Force_y = Force * (dy / distance);

    let Acceleration_x = Force_x / planet.mass;
    let Acceleration_y = Force_y / planet.mass;

    // let Velocity_x = Math.sqrt((Planet.gravConstant * sun.mass) / distance);
    // let Velocity_y = Math.sqrt((Planet.gravConstant * sun.mass) / distance);
    // let Acceleration_x = Math.pow(Velocity_x, 2) / distance;
    // let Acceleration_y = Math.pow(Velocity_y, 2) / distance;

    let dt = 1;
    planet.velocity_x += Acceleration_x * dt;
    planet.velocity_y += Acceleration_y * dt;

    planet.x += planet.velocity_x;
    planet.y += planet.velocity_y;
  }

  p.draw = () => {
    p.clear();
    p.background(40);

    physicsRework(mercury, sun);
    physicsRework(venus, sun);
    physicsRework(earth, sun);

    console.log(mercury.x, mercury.y);
    sun.draw();
    mercury.draw();
    venus.draw();
    earth.draw();
  };
});
