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
    text(userText,width/2,height /2);
    text(AgeText,width/2 ,height /2 -40);
}
function updateText(){
    userText = this.value();
}