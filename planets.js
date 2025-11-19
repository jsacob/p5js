import p5 from "p5";

let sun;
let mercury;
let venus;
let earth;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;

new p5((p) => {
  p.setup = () => {
    p.createCanvas(1920, 1920);
    p.angleMode(p.DEGREES);
    p.frameRate(144);

    sun = new Planets(0, 0, 150, "yellow", 0, 0, 0);
    mercury = new Planets(0, 0, 20, "gray", 200, 200, 0.9);
    venus = new Planets(0, 0, 40, "orange", 170, 170, 0.8);
    earth = new Planets(0, 0, 80, "blue", 250, 250, 0.7);
    mars = new Planets(0, 0, 40, "orange", 350, 350, 0.6);
    jupiter = new Planets(0, 0, 130, "orange", 380, 380, 0.5);
    saturn = new Planets(0, 0, 80, "brown", 530, 530, 0.4);
    uranus = new Planets(0, 0, 80, "blue", 630, 630, 0.3);
    neptune = new Planets(0, 0, 80, "blue", 730, 730, 0.2);
  };

  class Planets {
    constructor(x, y, diameter, color, rx, ry, speed) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.color = color;
      this.rx = rx;
      this.ry = ry;
      this.speed = speed;
    }

    drawPlanets() {
      this.rx = p.frameCount;
      this.x = this.rx * p.cos(p.frameCount * this.speed) + 950;
      this.y = this.ry * p.sin(p.frameCount * this.speed) + 950;

      p.fill(this.color);
      p.circle(this.x, this.y, this.diameter);

      // console.log(this.x, this.y)
    }
  }

  p.draw = () => {
    p.background(0);

    sun.drawPlanets();
    mercury.drawPlanets();
    venus.drawPlanets();
    earth.drawPlanets();
    mars.drawPlanets();
    jupiter.drawPlanets();
    saturn.drawPlanets();
    uranus.drawPlanets();
    neptune.drawPlanets();
  };
});

//     I need each planet to be "solo" in a senses i can choose which planet or moon to rotate around
//     	any for example all the planets use the suns position to rotate around and then i can use each planet
//     	for the moon rotations in the same way

//  take more of a look into adding gravity
