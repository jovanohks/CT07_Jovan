let tboxText = "input something here";
function setup(){
    new Canvas(200,200)
    tbox = createInput();
    tbox.position(80,80);
    tbox.input(updateText);
    colourPicker = createColourPicker("");
}
function draw(){

}
function updateText(){
    tboxText = this.value();
}