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
    p.createCanvas(3800, 2080, p.WEBGL);
    p.background(0);

    sun = new Planet(0, 0, 80, 100000, 0, 0, "#FCAF3F");
    mercury = new Planet(150, 150, 10, 1, 4, -4, "#B7B8B9");
    venus = new Planet(250, 250, 20, 1, 2, -4, "#FFC649");
    earth = new Planet(260, 260, 30, 1, 3, -4, "#346C27");
    mars = new Planet(300, 300, 20, 1, 3, -4, "#E27B58");
    jupiter = new Planet(400, 400, 50, 1, 2.5, -3.5, "#C88B3A");
    saturn = new Planet(450, 450, 40, 1, 2.5, -3.2, "#C5AB6E");
    uranus = new Planet(500, 500, 32, 1, 2.5, -3.2, "#B2D6DB");
    neptune = new Planet(550, 550, 30, 1, 2.5, -3.2, "#2990B5");
    pluto = new Planet(560, 560, 5, 1, 2.5, -3.2, "#34acb1");
  };

  class Planet {
    x: number;
    y: number;
    radius: number;
    diameter: number;
    velocity_x: number;
    velocity_y: number;
    mass: number;
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
    let G = 0.1;
    let t = 1;

    let diffx = sun.x - planet.x;
    let diffy = sun.y - planet.y;
    let distance = Math.sqrt(diffx * diffx + diffy * diffy);

    let Force = (G * sun.mass * planet.mass) / (distance * distance);

    let unit_x = diffx / distance;
    let unit_y = diffy / distance;

    let Fx = Force * unit_x;
    let Fy = Force * unit_y;

    planet.velocity_x += (Fx / planet.mass) * t;
    planet.velocity_y += (Fy / planet.mass) * t;

    planet.x += planet.velocity_x;
    planet.y += planet.velocity_y;

    sun.velocity_x += (-Fx / sun.mass) * t;
    sun.velocity_y += (-Fy / sun.mass) * t;

    sun.x += sun.velocity_x;
    sun.y += sun.velocity_y;
  }

  p.draw = () => {
    p.clear();

    physicsRework(mercury, sun);
    physicsRework(venus, sun);
    physicsRework(earth, sun);
    physicsRework(mars, sun);
    physicsRework(jupiter, sun);
    physicsRework(saturn, sun);
    physicsRework(uranus, sun);
    physicsRework(neptune, sun);
    physicsRework(pluto, sun);

    sun.draw();
    mercury.draw();
    venus.draw();
    earth.draw();
    mars.draw();
    jupiter.draw();
    saturn.draw();
    uranus.draw();
    neptune.draw();
    pluto.draw();
  };
});
