let sun;
let mercry;
let venus;
let earth;
let mars;


new p5((p) => {
	p.setup = () => {
		p.createCanvas(800, 800);
		p.angleMode(p.DEGREES);
		p.frameRate(144);

		sun = new Planets(400, 400, 150, "yellow", 10, 10); 
		earth = new Planets(300, 300, 50, "blue", 200, 200);
		mars = new Planets(250, 250, 30, "orange", -200, -200);
	

	}
	class Planets {
		constructor(x, y, d, c, rx, ry, s) {
			this.x = x;
			this.y = y;
			this.d = d;
			this.c = c;
			this.rx = rx;
			this.ry = ry;
			this.s = s;
		}

		drawPlanets() {
			// this is hard coded i need it to my dynamic for each planet
			// I realise the issue i just don't knwo how to fix it, i mean
			// i could attempt to use translate()
			this.x = this.rx * p.cos(p.frameCount * 1) + 400; // <-- I dont want these to server as the x and y values 
			this.y = this.ry * p.sin(p.frameCount * 2) + 400;

			// p.translate(this.rx, this.ry)
			p.fill(this.c);
			p.circle(this.x, this.y, this.d); 
			
			console.log(this.x)

		}

	}

	p.draw = () => {
		p.background(0); 

		sun.drawPlanets();
		earth.drawPlanets();
		mars.drawPlanets();

	}



})
