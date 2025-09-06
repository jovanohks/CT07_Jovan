// write your codes here
let bird,floor;
let flapDownImg,flapUpImg,flapMidImg,bg,base;
let pipeGroup;
let topPipe;
let bottomPipe;
let pipe;
let gameoverImg,gameoverLabel;
let startScreenLabel,StartScreenImg;
let startGame = false;
let score = 0;
let numberImages = [];
let scoreDigits;
function preload(){
    flapMidImg = loadImage('assets/yellowbird-midflap.png');
    bg=loadImage('assets/background-night.png');
    base=loadImage('assets/base.png');
    flapUpImg= loadImage('assets/yellowbird-upflap.png');
    flapDownImg= loadImage('assets/yellowbird-downflap.png');
    pipe=loadImage('assets/pipe-green.png');
    gameoverImg = loadImage('assets/gameover.png');
    StartScreenImg=loadImage('assets/message.png');
    for (let i = 0; i<10; i++){
        numberImages[i] = loadImage('assets/'+i+'.png');
    }
}
function setup(){
    new Canvas(400,600);
    bird = new Sprite();
    bird.x = width /2;
    bird.y=200;
    bird.width = 30;
    bird.height=30;
    bird.img = flapMidImg;
    bird.collider="static"
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
    bird.visible = false;
    floor.img = base;
    pipeGroup = new Group();
    startScreenLabel=new Sprite(width /2,height /2 ,50,50,'none');
    startScreenLabel.img = StartScreenImg;
    scoreDigits = new Group();
    scoreDigits.collider = 'none';
    scoreDigits.layer = 1000;
}

function draw(){
    image(bg,0,0,width,height);
    if (kb.presses('space')|| mouse.presses()){
        startGame = true;
        startScreenLabel.visible = false;
    }
    if (startGame){
        bird.visible = true;
        bird.collider = 'dynamic';
        pipeGroup.vel.x = -5;
        if(kb.presses('space') || mouse.presses()){
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
            gameoverLabel = new Sprite(width/2,height/2,192,42);
            gameoverLabel.img = gameoverImg;
            gameoverImg.Layer=100;
            gameoverLabel.x=camera.x;
            noLoop();
        }
        fill("blue");
        textSize(14);
        text('vel.y: '+bird.vel.y.toFixed(2),10,20);
        text('isMoving' + bird.isMoving,10,40);
        text('isSleeping'+bird.isSleeping,10,60);
        while (true){
            if(frameCount %90===0){
                
                spawnPipePair();
            }
        }
    }
    drawScore(width/2,20,score,digitWidth,digitHeight);
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

}
function drawScore(x,y,score,digitWidth,digitHeight){
    let scoreStr= str(score);
    let totalWidth = scoreStr.length * digitWidth;
    let startX = x-totalWidth /2;
    for (let i = 0; i < scoreStr.length; i++){
        let digit= int(scoreStr[i]);
        let xPos = startX +i * digitWidth;
        let digitSprite = new scoreDigits.sprite(xPos)
    }
}