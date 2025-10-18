let inputText;
let userText = "your text here";
function setup(){
    createCanvas(600,400);
    inputText = createInput();
    inputText.position(200,height - 80);
    inputText.input(updateText);

}
function draw(){
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER.CENTER);
    
}