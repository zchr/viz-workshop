function setup() {
  createCanvas(1000, 600);
}

function draw() {
  stroke(255, 255, 255, 25);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
  rect(mouseX,mouseY,50,50);
}
