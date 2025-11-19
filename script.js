import p5 from "p5";

new p5((p) => {
  ((p.setup = () => {
    p.createCanvas(1920, 940);
    p.background(255);
    p.frameRate(144);
  }),
    (p.draw = () => {
      let x = p.frameCount;
      let f = x * 0.22 * p.sin(0.3 * x) + 920 / 2;
      p.point(x, f);
    }));
});
