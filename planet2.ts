import p5 from "p5";

let sun: any;
let mercury: any;
let venus: any;
let earth: any;
let mars: any;

let sunMass = 4.545 * Math.pow(10, 13);

// let mercuryMass = 2.245 * Math.pow(10, 7);
// let venusMass = 8.245 * Math.pow(10, 7);

new p5((p) => {
  p.setup = () => {
    p.createCanvas(1900, 1060, p.WEBGL);
    p.background(0);

    sun = new Planet(0, 0, 50, sunMass, 0, 0, "yellow");
    mercury = new Planet(150, 150, 20, 1, 1.5, -2.5, "grey");
    venus = new Planet(200, 200, 30, 1, 2, -2, "orange");
    earth = new Planet(250, 250, 40, 1, 1, -1, "green");
    mars = new Planet(350, 350, 20, 1, 1, -1, "orange");
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
    let diffx = sun.x - planet.x;
    let diffy = sun.y - planet.y;
    let distance = Math.sqrt(diffx * diffx + diffy * diffy);

    let Force =
      (Planet.gravConstant * sun.mass * planet.mass) / (distance * distance);

    let unit_x = diffx / distance;
    let unit_y = diffy / distance;

    let acceleration = Force / planet.mass;

    let acceleration_x = acceleration * unit_x;
    let acceleration_y = acceleration * unit_y;

    let dt = 0.5;
    planet.velocity_x += acceleration_x * dt;
    planet.velocity_y += acceleration_y * dt;

    planet.x += planet.velocity_x * dt;
    planet.y += planet.velocity_y * dt;
  }

  p.draw = () => {
    p.clear();
    p.background(255);

    physicsRework(mercury, sun);
    physicsRework(venus, sun);
    physicsRework(earth, sun);
    physicsRework(mars, sun);

    console.log(mercury.x, mercury.y);
    sun.draw();
    mercury.draw();
    venus.draw();
    earth.draw();
    mars.draw();
  };
});
