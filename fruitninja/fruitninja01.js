let dojoBG;
let fruitGroup;
let fruitTypes =[];
let fruitHalves;
let score = 0;
function preload(){
    dojoBG = loadImage("assets/dojobackground.png");
    let peach = {whole: loadImage('assets/peachwhole.png'),half1: loadImage('assets/peachhalf.png')};
    let watermelon = {whole:loadImage("assets/watermelonwhole.png") ,half1: loadImage('assets/watermelonhalf.png')};
    fruitTypes = [peach,watermelon];
    
}
function setup(){
    new Canvas(800,600);
    world.gravity.y = 10;
    fruitGroup = new Group();
    fruitHalves = new Group();
}
function draw(){
    clear();
    image(dojoBG,0,0,width,height);
    if (frameCount % 60 == 0){
        spawnFruit();
    }
    if (mouse.pressing()){
        trail = new Sprite(mouse.x,mouse.y,7);
        trail.collider = 'none';
        trail.color = 'red';
        trail.life = 10;

    }
    sliceFruit();
    stroke(150,69,69);
    fill(255);
    textsize(24);
    textAlign(LEFT,TOP);
    text("score "+score,10,10);
}
function sliceFruit(){
    for (let fruit of fruitGroup){
        if (fruit.sliced){
            continue;
        }

    
    let d = dist(mouse.x,mouse.y,fruit.x,fruit.y);
    if (d < (fruit.d /2)){
            fruit.sliced = true;
            const fx = fruit.x;
            const fy = fruit.y;
            fruit.remove();
            splitFruit(fx,fy,fruit.type);
            break;
        }
    }
}
function splitFruit(x,y,fruitData){
    //left half
    let left = new fruitHalves.Sprite(x-10,y,40,40);
    left.img = fruitData.half1;
    left.vel.x = -3;
    left.vel.y = -3;
    left.rotationSpeed = -5;
    //right half
    let right = new fruitHalves.Sprite(x+10,y,40,40);
    right.img = fruitData.half1;
    right.vel.x = 3;
    right.vel.y = -3;
    right.rotationSpeed = 5;
    score +=1;
    console.log("score: ",score);
}
function spawnFruit(){
    let fruitData = random(fruitTypes);
    let randomX = random(300,500);
    let fruit = new fruitGroup.Sprite(randomX,height+20,40);
    fruit.image = fruitData.whole;
    fruit.type = fruitData;
    fruit.vel.y = random(-10,-14);
    fruit.vel.x = random(-2,2);
    fruit.friction = 0;
}