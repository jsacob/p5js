import p5 from "p5";

new p5((p) => {
  const G = 1; 
  let planets: any[] = [];
  let sun: any;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    
    sun = new Body(0, 0, 40, 5000, "#FCAF3F");

    const createOrbitingPlanet = (dist: number, r: number, m: number, col: string) => {
      let velMag = Math.sqrt((G * sun.mass) / dist);
      let planet = new Body(dist, 0, r, m, col);
      planet.vel = p.createVector(0, -velMag); 
      return planet;
    };

  planets.push(createOrbitingPlanet(80, 5, 10, "#B7B8B9"));
  planets.push(createOrbitingPlanet(130, 10, 20, "#FFC649"));
  planets.push(createOrbitingPlanet(190, 11, 25, "#346C27"));
  planets.push(createOrbitingPlanet(250, 8, 15, "#E27B58"));
  planets.push(createOrbitingPlanet(400, 35, 100, "#C88B3A"));
  planets.push(createOrbitingPlanet(550, 30, 80, "#C5AB6E"));
  planets.push(createOrbitingPlanet(680, 18, 50, "#B2D6DB"));
  planets.push(createOrbitingPlanet(800, 18, 50, "#2990B5"));
  planets.push(createOrbitingPlanet(900, 4, 5, "#34acb1"));

  };

  class Body {
    pos: p5.Vector;
    vel: p5.Vector;
    constructor(x: number, y: number, public r: number, public mass: number, public col: string) {
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(0, 0);
    }

    update() {
      let force = p5.Vector.sub(p.createVector(0, 0), this.pos);
      let d = force.mag();
      let strength = (G * sun.mass * this.mass) / (d * d);
      force.setMag(strength / this.mass); 
      
      this.vel.add(force);
      this.pos.add(this.vel);
    }

    draw() {
      p.push();
      p.noStroke();
      p.fill(this.col);
      p.translate(this.pos.x, this.pos.y);
      p.sphere(this.r);
      p.pop();
    }
  }

  p.draw = () => {
    p.background(5);
    p.orbitControl(); 
    
    p.pointLight(255, 255, 255, 0, 0, 0);
    p.ambientLight(60);

    sun.draw();
    planets.forEach(pl => {
      pl.update();
      pl.draw();
    });
  };
});