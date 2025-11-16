let sun;
let mercury;
let venus;
let earth;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;
let moon;

new p5((p) => {
	p.setup = () => {
		p.createCanvas(1920, 1920);
		p.angleMode(p.DEGREES);
		p.frameRate(144);

		sun = new Planets(0, 0, 150, "yellow", 0, 0, 0); 
		mercury = new Planets(0, 0, 20, "gray", 120, 120, 0.9);
		venus = new Planets(0, 0, 40, "orange", 170, 170, 0.8);
		earth = new Planets(0, 0, 80, "blue", 250, 250, 0.7);
		mars = new Planets(0, 0, 40, "orange", 350, 350, 0.6);
		jupiter = new Planets(0, 0, 150, "orange", 380, 0.5);
		saturn = new Planets(0, 0, 80, "brown", 530, 530, 0.4);
		uranus = new Planets(0, 0, 80, "blue", 630, 630, 0.3);
		neptune = new Planets(0, 0, 80, "blue", 730, 730, 0.2);
	

	}
	class Planets {
		constructor(x, y, d, c, rx, ry, s, n) {
			this.x = x;
			this.y = y;
			this.d = d;
			this.c = c;
			this.rx = rx;
			this.ry = ry;
			this.s = s;
			this.n = n;
		}

		drawPlanets() {
			// this is hard coded i need it to my dynamic for each planet
			// I realise the issue i just don't knwo how to fix it, i mean
			// i could attempt to use translate()
			//
			this.x = this.rx * p.cos(p.frameCount * 0.2 * this.s) + 950;
			this.y = this.ry * p.sin(p.frameCount * 0.2 * this.s) + 900;

			// p.translate(this.rx, this.ry)
			p.fill(this.c);
			p.circle(this.x, this.y, this.d); 
			
			console.log(this.x, this.y)

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

	}

})

// TODO
// 1. add names over planets
// 2. making a line that gets drawn followin the planet rotation
