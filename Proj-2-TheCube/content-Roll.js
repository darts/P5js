var width, height;
var surfacePoints = [];
var ballVals = [];
var adjModifier = 0.02; // bigger = more movement
var gravity = 10;
var ballHeight = 15;

function setup(){
    width = $(window).width();
    height = $(window).height();
    createCanvas(width, height);

    surfacePoints.push([0, height/2]);
    surfacePoints.push([width, height/2]);

    background(0);

    stroke(255);
    imageMode(CENTER);
}

function draw(){
    background(0);
    stroke(255);
    fill(0, 0);
    adjAngle();
    drawLine();
    ellipse(200, detBallHeight(), ballHeight, ballHeight);
}

function drawLine(){
    line(surfacePoints[0][0], surfacePoints[0][1], surfacePoints[1][0], surfacePoints[1][1]);
}

function adjAngle(){
    let angleAdjust = (mouseX - width/2) * adjModifier;
    surfacePoints[0][1] -= angleAdjust;
    surfacePoints[1][1] += angleAdjust;
}

function detBallHeight(){
    let x = atan((surfacePoints[0][1]) / surfacePoints[1][1]);
    return ((height/2) + 200*x);
}