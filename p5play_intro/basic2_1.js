function setup(){
    createCanvas(600,400);
    let nouninput = createInput("noun")
    nouninput.position(120,80);
    let verbinput = createInput("noun")
    verbinput.position(120,80);
}
function draw(){

}
function updatenoun(){
    console.log(this.value());
}