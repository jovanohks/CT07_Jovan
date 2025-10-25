let tboxText = "input something here";
function setup(){
    new Canvas(200,200)
    tbox = createInput();
    tbox.position(80,80);
    tbox.input(updateText);
    colourPicker = createColourPicker("#ffffff");
    colourPicker.position(80,120);
}
function draw(){
    background(220);
    fill(colourPicker.value())
    text(tboxText,50,50);
}
function updateText(){
    tboxText = this.value();
}