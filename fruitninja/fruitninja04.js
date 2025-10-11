let dojoBG;
let fruitGroup;
let fruitTypes =[];
let fruitHalves;
let score = 0;
let missedFruits = 0;
let gamestate = 'start';
let gameStartTime = 0;
let gameTimer = 0; //elasped time
let gameDuration = 10; //how long game is

function preload(){
    dojoBG = loadImage("assets/dojobackground.png");
    let peach = {whole: loadImage('assets/peachwhole.png'),half1: loadImage('assets/peachhalf.png')};
    let watermelon = {whole:loadImage("assets/watermelonwhole.png") ,half1: loadImage('assets/watermelonhalf.png')};
    let banana ={whole: loadImage('assets/bananawhole-removebg-preview (1).png'),half1: loadImage('assets/bhalf2-removebg-preview (1).png')}
    //fruitTypes = [peach,watermelon,banana];
    let sliceSound = createAudio('assets/fruit-ninja-combo.mp3');
    
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
    if (kb.presses(" ") || mouse.pressing() && (gamestate === "start" || gamestate === "end")){
        gamestate = 'play';
        score = 0;
        missedFruits = 0;
        fruitGroup.removeAll();
        fruitHalves.removeAll();
        gameStartTime = millis();
        gameTimer = 0;
    }
    
    if (gamestate  === "start"){
        fill(0,100);
        rect(0,0,width,height);
        fill(255);
        textAlign(CENTER,CENTER);
        textSize(40);
        text('Fruit Ninja',width /2 ,height /2 -40);
        textSize(24);
        text("Press SPACE or CLICK to start",width /2 ,height /2 +20);
        return;
    }
    gameTimer = floor((millis() - gameStartTime) /1000);
    text("Time: "+(gameDuration - gameTimer)+"s",400,10);
    if(gameTimer >= gameDuration){
        gamestate = "gameover";
        
    }
    if (gamestate === "gameover"){
        fill(0,100);
        rect(0,0,width,height);
        fill(255);

        textAlign(CENTER,CENTER);
        textSize(40);
        text('Game over',width /2 ,height /2 -40);
        textSize(24);
        text("You scored "+ score+ " and had "+missedFruits+" missed fruits",width /2 ,height /2 +20);
        text("Press SPACE to restart",width /2 ,height /2 +60);
        return;
    }
    if (frameCount % 60 == 0){
        spawnFruit();
    }
    if (mouse.pressing()){
        trail = new Sprite(mouse.x,mouse.y,7);
        trail.collider = 'none';
        trail.color = 'red';
        trail.life = 10;

    }
    //missed fruits
    for (let fruits of fruitGroup){
        if(fruits.y > height + 50){
            fruits.remove();
            missedFruits++;
            console.log("missedFruits: " , missedFruits);
        }
    }
    sliceFruit();
    stroke(150,69,69);
    fill(255);
    textSize(24);
    textAlign(LEFT,TOP);
    text("score "+score,10,10);
    text("Missed Fruits: "+missedFruits,200,10);

}
function sliceFruit(){
    if (mouse.pressing()){
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
                score++;
                console.log("score",score);
                break;
            }
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
    //score +=1;
    //console.log("score: ",score);
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