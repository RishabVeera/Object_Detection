img="";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640,450);
    canvas.center();
}

function draw() {
    image(img,0,0,640,450);
    fill("#FF0000");
    text("Dog",52,67);
    stroke("#FF0000");
    noFill();
    rect(45,50,450,390);
    
}