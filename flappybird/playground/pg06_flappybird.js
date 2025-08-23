// write your codes here
let bird,floor;
let flapDownImg,flapUpImg,flapMidImg,bg,base;
let pipeGroup;
let topPipe;
let bottomPipe;
let pipe;
let gameoverImg,gameoverLabel;
function preload(){
    flapMidImg = loadImage('assets/yellowbird-midflap.png');
    bg=loadImage('assets/background-night.png');
    base=loadImage('assets/base.png');
    flapUpImg= loadImage('assets/yellowbird-upflap.png');
    flapDownImg= loadImage('assets/yellowbird-downflap.png');
    pipe=loadImage('assets/pipe-green.png');
    gameoverImg = loadImage('assets/gameover.png');
}
function setup(){
    new Canvas(400,600);
    bird = new Sprite();
    bird.x = width /2;
    bird.y=200;
    bird.width = 30;
    bird.height=30;
    bird.img = flapMidImg;
    bird.collider="dynamic"
    bird.mass=2;
    bird.drag=0.05;
    bird.bounciness=1;
    world.gravity.y=10;
    floor= new Sprite();
    floor.x = 200;
    floor.y = height -20;
    floor.width = 400;
    floor.height= 125;
    floor.collider = "static";
    floor.img = base;
    pipeGroup = new Group();

}
function draw(){
    image(bg,0,0,width,height);
    pipeGroup.vel.x = -5;
    if(kb.presses('space') || mouse.presses('left')){
        bird.vel.y = -5;
        bird.sleeping = false;
    }
    if(bird.vel.y <-1){
        bird.img = flapUpImg;
        bird.rotation=-30;
    }else if (bird.vel.y >1){
        bird.img = flapDownImg;
        bird.rotation=30;
    }else{
        bird.img=flapMidImg;
        bird.rotation = 0;
    }
    bird.x +=3
    camera.x =bird.x;
    floor.x = bird.x;
    if (bird.collides(pipeGroup) || bird.collides(floor)){
        gameoverLabel = new Sprite();
        noLoop();
    }
    fill("blue");
    textSize(14);
    text('vel.y: '+bird.vel.y.toFixed(2),10,20);
    text('isMoving' + bird.isMoving,10,40);
    text('isSleeping'+bird.isSleeping,10,60);
    if(frameCount %120 ===60){
        
        spawnPipePair();
    }
}
function spawnPipePair(){
    let gap=50;

    let midY=random(250,height-250);

    topPipe = new Sprite(400,midY-gap /2 -200 ,52,320,'kinematic');
    topPipe.img = pipe;
    topPipe.rotation = 180;
    bottomPipe = new Sprite(400,midY+gap /2 +200 ,52,320,'kinematic');
    bottomPipe.img = pipe;
    pipeGroup.add(topPipe);
    pipeGroup.add(bottomPipe);
    pipeGroup.vel.x = -3;
    pipeGroup.layer = 0;
    for (let pipe of pipeGroup){
        if (pipe.x < -50){
            pipe.remove();
        }
    }
}
