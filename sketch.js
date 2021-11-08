/*
 * @My first sketch
 * @description This allows creation of unique shapes
 */

var ElementShapeSize = document.getElementById("shapeSize"),
  resultShapeSize = document.getElementById("resultSize");

ElementShapeSize.addEventListener(
  "input",
  function () {
    resultShapeSize.innerHTML = "size:" + ElementShapeSize.value;
  },
  false
);

var ElementBackgroundColour = document.getElementById("exampleColorInput"),
  resultBackgroundColour = document.getElementById("resultColour");

ElementBackgroundColour.addEventListener(
  "input",
  function setbackcolour() {
    background(ElementBackgroundColour.value);
  },
  false
);

var ElementNoiseFactor = document.getElementById("NoiseFactor"),
  resultNoiseFactor = document.getElementById("resultNoise");

ElementNoiseFactor.addEventListener(
  "input",
  function () {
    resultNoiseFactor.innerHTML = "size:" + ElementNoiseFactor.value;
  },
  false
);

var ElementStrokeWeight = document.getElementById("StrokeWeight"),
  resultStrokeWeight = document.getElementById("resultStrokeWeight");

ElementStrokeWeight.addEventListener(
  "input",
  function () {
    resultStrokeWeight.innerHTML = "weight:" + ElementStrokeWeight.value;
  },
  false
);

//ADD SHIT TO MAKE RESTART BUTTON WORK
var ElementRestartButt = document.getElementById("restartButton");
ElementRestartButt.addEventListener(
  "click",
  function () {
    reset();
  },
  false
);

total_degrees = 360;
radius = 0;
r = Math.floor(Math.random() * 256);
g = Math.floor(Math.random() * 256);
b = Math.floor(Math.random() * 256);
a = 0;
stroke_weight = ElementStrokeWeight.value;
centre_x = 100;
centre_y = 100;

function setup() {
  reset();
}

function reset() {
  var MyCanvas = createCanvas(displayWidth * 0.6, displayHeight * 0.6);
  MyCanvas.parent("DrawingContainer");
  background(ElementBackgroundColour.value);
  radius = height / (10 / ElementShapeSize.value);
}

function draw() {
  //translate(frameCount, 0);

  if (mouseIsPressed) {
    centre_x = mouseX;
    centre_y = mouseY;
    fill(r, g, b, a);
    stroke(r + 60, g - 60, b + 60);
    strokeWeight(ElementStrokeWeight.value);
    //background(ElementBackgroundColour.value);
    beginShape();
    for (let i = 0; i < total_degrees; i++) {
      noiseFactor = noise(i * ElementNoiseFactor.value, float(frameCount) / 30);
      x = centre_x + radius * cos(radians(i)) * noiseFactor;
      y = centre_y + radius * sin(radians(i)) * noiseFactor;
      curveVertex(x, y);
    }
  }
  endShape(CLOSE);
  if (radius < 0) {
    radius = height / (10 / ElementShapeSize.value);
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    a = 0;
  } else {
    radius -= 2;
    r += 1;
    b += 0.5;
    g += 0.5;
    a += 0.5;
  }
  function keyPressed() {
    noLoop();
  }
}
