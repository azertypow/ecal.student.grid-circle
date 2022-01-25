function setup() {


    createCanvas(window.innerWidth, window.innerHeight);

}



function mousePressed() {
    console.log("mouse pressed")

    ellipse(mouseX, mouseY, 5, 5);
    // prevent default
    return false;
}