let inputText;
let userText = "your text here";
let inputAge;
let userAge = "your age here";
function setup(){
    createCanvas(600,400);
    inputText = createInput();
    inputText.position(200,height - 80);
    inputText.input(updateText);
    inputAge = createInput();
    inputAge.position(200,height - 130);
    inputAge.input(updateAge);
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
function updateAge(){
    userAge = this.value;
}