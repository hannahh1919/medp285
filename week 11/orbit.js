function setup() {
    createCanvas(710, 400, WEBGL);
    angleMode(DEGREES);
    noStroke();
    describe(
      'Users can click and drag to explore a 3D cube made of white spheres on a dark blue background.'
    );
  }
  
  function draw() {
    background(10, 10, 60); // dark blue background
    orbitControl();
  
    ambientLight(100);
    directionalLight(255, 255, 255, 0, -1, 0); // white light from top
  
    let spacing = 40;
    let count = 5;
  
    for (let x = -spacing * 2; x <= spacing * 2; x += spacing) {
      for (let y = -spacing * 2; y <= spacing * 2; y += spacing) {
        for (let z = -spacing * 2; z <= spacing * 2; z += spacing) {
          push();
          translate(x, y, z);
          fill(255); // white
          sphere(8);
          pop();
        }
      }
    }
  }
  