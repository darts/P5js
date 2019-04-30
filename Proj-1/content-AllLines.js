var STAR_COUNT;
var MAX_DIST; 
var DEF_STAR_DENSITY_MODIFIER = 12000; //lower number = more stars
var DEF_DIST_MODIFIER = 8000; //lower number = longer distance

var MAX_STAR_SIZE = 3;

var stars; //xSpeed, ySpeed, xPos, yPos, size
var lines;
var backgroundImage,imageOverlay;
var width, height;

function setup(){
    width = $(window).width();
    height = $(window).height();
    MAX_DIST = (width*height)/DEF_DIST_MODIFIER;
    STAR_COUNT = (width * height)/DEF_STAR_DENSITY_MODIFIER;
    createCanvas(width, height);

    background(0);
    stars = [];
    for(var i = 0; i < STAR_COUNT; i++){
        stars.push(newStar(false));
    }
    stroke(255);
    imageMode(CENTER);
}

function draw(){
    background(0);
    lines = [];
    updatePos();
}

function updatePos(){
    for(var i = 0; i < STAR_COUNT; i++){
        if(stars[i][2] > width || stars[i][3] > height){
            stars[i] = newStar(true);
        }else{
            stars[i][2] += stars[i][0];
            stars[i][3] += stars[i][1];
        }
        ellipse(stars[i][2], stars[i][3], stars[i][4], stars[i][4]);
        for(var j = 0; j < STAR_COUNT; j++)
            addLine(stars[i], stars[j]);
    }
}

function addLine(s, d){
    if(dist(s[2], s[3], d[2], d[3]) < MAX_DIST)
        lines.push(line(s[2], s[3], d[2], d[3]));
}

function newStar(isFirst){
    return ((!isFirst) ? [random(-1, 1), random(0.2, 2), random(0, width), random(0, height), random(1, MAX_STAR_SIZE)] : [random(-1, 1), random(0.2, 2), random(0, width), 0, random(1, MAX_STAR_SIZE)]);
}

function drawLines(){
    for(var l in lines){
        l.display();
    }
}