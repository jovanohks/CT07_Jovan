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
    if (framecount % 120 == 0){
        spawnFruit();
    }
}
function spawnFruit(){
    let fruitData = random(fruitTypes);
    let randomX = random(300,500);
    let fruit = new fruitGroup.Sprite(randomX,height+20,40);
    fruit.image = fruitData.whole;
    fruit.type = fruitData;
    fruit.vel.y = random ()
}