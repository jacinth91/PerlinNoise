var inc = 0.01;
var start = 0.81;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(51);
    //    var x=random(width);
    stroke(255);
    noFill();
    beginShape();
    var xoff = start;
    for (var x = 0; x < width; x++) {
        stroke(255);
        var y = random(height);
        var y = noise(xoff) * height;
        vertex(x, y);
        xoff += inc;
    }
    endShape();
    start += inc;
}