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
    colorPicker = createColorPicker("#5ed688ff");
    colorPicker.position(200,32);

}
function draw(){
    background(colorPicker.value());
    textSize(16);
    textAlign(left);
    fill(0);
    text("pick a colour: ",20,50);
    fill(0);
    textSize(20);
    textAlign(CENTER.CENTER);
    text(userText,width/2,height /2);
    text(userAge,width/2 ,height /2 -40);
    rect(50,100);
}
function updateText(){
    userText = this.value();
}
function updateAge(){
    userAge = this.value();
}