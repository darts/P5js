let prev, current;


function setup(){
    width = $(window).width();
    height = $(window).height();
    createCanvas(width, height);

    background(0);

    stroke(255);

    frameRate(2);

    prev = 0;
    current = 1;
    console.log(prev);
    console.log(current);
}

function draw(){
    updateFib();
    console.log(prev);
}

function updateFib(){
    if(current + prev >= current){
        current += prev;
        prev = current - prev;
    }
}

function drawFib(){
    
}