let sun;
let mercry;
let venus;
let earth;
let mars;


new p5((p) => {
	p.setup = () => {
		p.createCanvas(800, 800);
		p.angleMode(p.DEGREES);

		sun = new Planets(400, 400, 150, "yellow"); 
		earth = new Planets(300, 300, 50, "blue");
		mars = new Planets(250, 250, 30, "orange");
	

	}
	class Planets {
		constructor(x, y, d, c) {
			this.x = x;
			this.y = y;
			this.d = d
			this.c = c;
		}

		drawPlanets() {

			p.fill(this.c);
			p.circle(this.x, this.y, this.d); 

		}

	}

	p.draw = () => {
		p.background(0); 

		sun.drawPlanets();
		earth.drawPlanets();
		mars.drawPlanets();

	}



})
