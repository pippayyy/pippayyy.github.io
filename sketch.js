/*
 * @My first sketch
 * @description This allows creation of unique shapes
 */

total_degrees = 360
radius = 0
r=Math.floor(Math.random() * 256)
g=Math.floor(Math.random() * 256)
b=Math.floor(Math.random() * 256)
a=0
stroke_weight=1
centre_x = 100
centre_y = 100

function setup() {
    var MyCanvas = createCanvas((displayWidth*0.8), displayHeight*0.6);
    MyCanvas.parent("DrawingContainer");
    background(230)
    radius= height/2
}


/*function setup() {
    var canvasDiv = document.getElementById('DrawingContainer');
    var width = canvasDiv.offsetWidth;
    var sketchCanvas = createCanvas(width,450);
    console.log(sketchCanvas);
    sketchCanvas.parent("DrawingContainer");
    background(230)
    radius = height/2
}*/


function draw() {
  //translate(frameCount,0)
  //global total_degrees, radius,r,g,b,a,stroke_weight, centre_x, centre_y
    if(mouseIsPressed){
        centre_x = mouseX
        centre_y = mouseY
        fill(r,g,b,a)
        stroke(r +60,g-60,b+60)
        strokeWeight(stroke_weight)
        beginShape()
        for(let i = 0; i < total_degrees; i++){
            noiseFactor = noise(i * 0.02, float(frameCount)/30)
            x = centre_x + radius * cos(radians(i)) * noiseFactor
            y = centre_y + radius * sin(radians(i)) * noiseFactor
            curveVertex(x,y-100)}}
        endShape(CLOSE)
        if(radius < 0){
            radius = height/2
            r=Math.floor(Math.random() * 256)
            g=Math.floor(Math.random() * 256)
            b=Math.floor(Math.random() * 256)
            a=0}
        else{
            radius -= 2
        r += 1
        b += 0.5
        g += 0.5
        a += 0.5}
        function keyPressed(){
            noLoop()}
}


    
