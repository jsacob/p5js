let circle;

new p5((p) => {
  p.setup = () => {

    p.createCanvas(800, 800);
	  
	circle = new Ellipse(0,0,100,100);
	
  };
  
 // p.moving_circle = () => {
 //
 //  let x = 90 * p.cos(p.frameCount * 2) + 50;
 //  let y = 50 * p.sin(p.frameCount * 2) + 50;
 //  circle = new Ellipse(100, 100, 100, 100)
 //
 // };

 class Ellipse {
	constructor(x, y, h, w) {
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
	}

	 show() {
		let x = 100 * p.cos(p.frameCount * 0.2) + 400; 
		let y = 100 * p.sin(p.frameCount * 0.4) + 400; 
		p.circle(x, y, this.h, this.y);
		
		// console.log(x, y)
	 }
}

 p.draw = () => {
    p.background(0);
	circle.show();
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
