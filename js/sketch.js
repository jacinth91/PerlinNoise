var xoff=0;
function setup(){
    createCanvas(500,500);
}
function draw(){
    background(51);
//    var x=random(width);
    
    var x=map(noise(xoff),0,1,0,width);
    xoff=xoff+0.01;
    ellipse(x,200,30,30)
}