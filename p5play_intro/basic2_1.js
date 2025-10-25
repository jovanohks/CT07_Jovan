function setup(){
    new Canvas(200,200)
    tbox = createInput();
    tbox.position(80,80);
    tbox.input(updateText);

}
function draw(){

}
function updateText(){
    tboxText = this.text;
}