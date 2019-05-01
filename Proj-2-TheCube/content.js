var size = 3; //smaller number = bigger box
function setup(){
    width = $(window).width();
    height = $(window).height();
    size = sqrt((width * height)) / size;
    createCanvas(width, height, WEBGL);

    background(0);

    stroke(255);
    imageMode(CENTER);
}

function draw(){
    background(0);
    stroke(255);
    fill(0, 0);
    
    moveOuter();
    moveInner();
}

function moveInner(){
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(size/2,size/2,size/2);  
}

function moveOuter(){
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(size,size,size); 
}
