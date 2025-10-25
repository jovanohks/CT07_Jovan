/*let tboxText = "input something here";
function setup(){

    createCanvas(600,400);
    tbox = createInput();
    tbox.position(80,80);
    tbox.input(updateText);
    colorPicker = createColorPicker("#ffffff");
    colorPicker.position(80,120);
}
function draw(){
    background(220);
    fill(colorPicker.value())
    text(tboxText,50,50);
}
function updateText(){
    tboxText = this.value();
}*/
let inputsfield;
let submitButton;
let outputText;
function setup(){
    createCanvas(200,400);
    background(220);
    inputsfield = createInput("enter ")
}