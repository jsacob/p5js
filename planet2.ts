import p5 from "p5";

let sun: any;
let mercury: any;
let venus: any;
let earth: any;
let mars: any;
let jupiter: any;
let saturn: any;
let uranus: any;
let neptune: any;
let pluto: any;

let sunMass = 8.545 * Math.pow(10, 13);

// let mercuryMass = 2.245 * Math.pow(10, 7);
// let venusMass = 8.245 * Math.pow(10, 7);

new p5((p) => {
  p.setup = () => {
    p.createCanvas(1900, 1060, p.WEBGL);
    p.background(0);

    sun = new Planet(0, 0, 80, sunMass, 0, 0, "#FCAF3F");
    mercury = new Planet(150, 150, 10, 1, 2, -5, "#B7B8B9");
    venus = new Planet(220, 220, 20, 1, 2, -4, "#FFC649");
    earth = new Planet(220, 220, 30, 1, 1, -2, "#346C27");
    // mars = new Planet(-350, 350, 20, 1, 0, 0, "#E27B58");
    // jupiter = new Planet(400, 400, 50, 1, 0, 0, "#C88B3A");
    // saturn = new Planet(450, -450, 40, 1, 0, 0, "#C5AB6E");
    // uranus = new Planet(-400, -500, 32, 1, 0, 0, "#B2D6DB");
    // neptune = new Planet(-500, 500, 30, 1, 0, 0, "#2990B5");
    // pluto = new Planet(550, -550, 5, 1, 0, 0, "#34acb1");
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
      p.fill(0);
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

    let Fx = Force * unit_x;
    let Fy = Force * unit_y;

    let ax = Fx / planet.mass;
    let ay = Fy / planet.mass;

    let dt = 1;
    planet.velocity_x += ax * dt;
    planet.velocity_y += ay * dt;

    planet.x += planet.velocity_x;
    planet.y += planet.velocity_y;
  }

  p.draw = () => {
    p.clear();

    physicsRework(mercury, sun);
    physicsRework(venus, sun);
    physicsRework(earth, sun);
    // physicsRework(mars, sun);
    // physicsRework(jupiter, sun);
    // physicsRework(saturn, sun);
    // physicsRework(uranus, sun);
    // physicsRework(neptune, sun);
    // physicsRework(pluto, sun);

    sun.draw();
    mercury.draw();
    venus.draw();
    earth.draw();
    // mars.draw();
    // jupiter.draw();
    // saturn.draw();
    // uranus.draw();
    // neptune.draw();
    // pluto.draw();
  };
});
