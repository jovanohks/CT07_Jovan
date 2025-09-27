let dojoBG
let fruitGroup;
let fruitTypes = [];

function preload(){
    dojoBG = loadImage("assets/dojobackground.png");
    let peach = {whole: loadImage('assets/peachwhole.png')};
    let watermelon = {whole:loadImage("assets/watermelonwhole.png")};
    fruitTypes = [peach,watermelon];

}
function setup(){
    new Canvas(800,600);


}
function draw(){
    image(dojoBG,0,0,width,height);
}