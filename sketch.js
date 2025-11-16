let circle;

new p5((p) => {
  p.setup = () => {

	p.createCanvas(800, 800);
	// let c = p.random(['red', 'blue', 'green', 'purple', 'pink']);
	
	p.strokeWeight(10);
	p.stroke("white");

	circle = new Circle(100, 100, 100, 100);

	p.fill("#BE93D4");

};
 // p.moving_circle = () => {
 //
 //  let x = 90 * p.cos(p.frameCount * 2) + 50;
 //  let y = 50 * p.sin(p.frameCount * 2) + 50;
 //  circle = new Ellipse(100, 100, 100, 100)
 //
 // };

 class Circle {
	constructor(x, y, h, w) {
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
	}

	 circle1() {
		let x = 100 * p.cos(p.frameCount * 0.01 * 2) + 400; 
		let y = 100 * p.cos(p.frameCount * 0.03 * 2) + 400; 
		p.circle(x, y, this.h, this.w);
	 }

	 circle2() {
		let x = 100 * p.cos(p.frameCount * 0.03) + 400; 
		let y = 100 * p.cos(p.frameCount * 0.01) + 400; 
		p.circle(x, y, this.h, this.y);
	 }
}

 p.draw = () => {
    p.background(0);
	circle.circle1();
	circle.circle2();
	// p.moving_circle();
  };
});



	//  p.test_circle = () => {
	//
	// let c = p.color(0, 0, 255);
	// p.strokeWeight(10);
	// p.stroke("red");
	//
	// let x = 90 * p.cos(p.frameCount * 2) + 50;
	// let y = 50 * p.sin(p.frameCount * 2) + 50;
	// p.angleMode(p.DEGREES);
	//
	// p.fill(c);
	// p.circle(x, y, 50, 50);
	//
	//    // console.log(x, y);
	//
	//  }
