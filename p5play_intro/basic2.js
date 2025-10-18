let inputText;
let UserText = "your text here";
function setup(){
    createCanvas(600,400);
    inputText = createInput();
    inputText.position(200,height - 80);
    inputText.input(pdateText);

}