/*
 * @My first sketch
 * @description This allows creation of unique shapes
 */

var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
myModal.show();

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

//Restart Button
var ElementRestartButt = document.getElementById("restartButton");
ElementRestartButt.addEventListener(
  "click",
  function () {
    reset();
  },
  false
);

//Save Button
var ElementSaveButt = document.getElementById("saveButton");
ElementSaveButt.addEventListener(
  "click",
  function () {
    save();
  },
  false
);

//Share Button
var ElementShareButt = document.getElementById("shareButton");
ElementShareButt.addEventListener(
  "click",
  function () {
    copyURL();
  },
  false
);

//function to copy text to clipboard
function copyURL() {
  var siteURL = "https://pippayyy.github.io";
  var dummyToSelect = $("<input>").val(siteURL).appendTo("body").select();
  document.execCommand("copy");
}

var code = $("#copy-to-clipboard-input");
var btnCopy = $("#shareButton");

//btnCopy.on("click", function () {
//code.select();
//document.execCommand("copy");
//});

//Attempt Two - share button
function copy(text, target) {
  setTimeout(function () {
    $("#copied_tip").remove();
  }, 800);
  $(target).append("<div class='tip' id='copied_tip'>Copied!</div>");
  var input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
}

function createMetaTag() {
  let meta = createElement("meta");
  meta.attribute("name", "viewport");
  meta.attribute(
    "content",
    "user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
  );

  let head = select("head");
  meta.parent(head);
}

total_degrees = 360;
radius = 0;
r = Math.floor(Math.random() * 256);
g = Math.floor(Math.random() * 256);
b = Math.floor(Math.random() * 256);
a = 0;
stroke_weight = ElementStrokeWeight.value;
centre_x = 100;
centre_y = 100;
MyCanvasHeight = 0;
MyCanvasWidth = 0;

function setup() {
  reset();
}

function reset() {
  var MyCanvas = createCanvas(
    window.innerWidth * 0.6,
    window.innerHeight * 0.6
  );
  MyCanvas.parent("DrawingContainer");
  background(ElementBackgroundColour.value);
  radius = height / (10 / ElementShapeSize.value);
  MyCanvasHeight = MyCanvas.height;
  MyCanvasWidth = MyCanvas.width;
}

function save() {
  saveCanvas(MyCanvas, "MyDrawing", "jpg");
}

function draw() {
  //translate(frameCount, 0);

  if (mouseIsPressed) {
    centre_x = mouseX;
    centre_y = mouseY;
    if (
      centre_x < MyCanvasWidth &&
      centre_x >= 0 &&
      centre_y < MyCanvasHeight &&
      centre_y >= 0
    ) {
      fill(r, g, b, a);
      stroke(r + 60, g - 60, b + 60);
      strokeWeight(ElementStrokeWeight.value);
      //background(ElementBackgroundColour.value);
      beginShape();
      for (let i = 0; i < total_degrees; i++) {
        noiseFactor = noise(
          i * ElementNoiseFactor.value,
          float(frameCount) / 30
        );
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
}
