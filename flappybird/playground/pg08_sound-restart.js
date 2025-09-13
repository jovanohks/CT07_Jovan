
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
let digitWidth = 20;
let digitHeight=20;
let flapSound,pointSound,failSound; //sounds
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
    //sounds assets
    flapSound = createAudio('assets/sfx_wing.mp3');
    pointSound = createAudio('assets/sft_point.mp3');
    failSound = createAudio('assets/sfx_die.mp3');
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
        bird.visible = true;
    }
    if (startGame){
        bird.collider = 'dynamic';
        bird.x +=3
        camera.x =bird.x;
        floor.x = bird.x;

        if(kb.presses('space') || mouse.presses()){
            bird.vel.y = -5;
            bird.sleeping = false;
            flapSound.play();
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

        if (frameCount === 1){
            spawnPipePair();
        }

        if (frameCount % 120 === 0){
            spawnPipePair();
        }

        for (let pipe of pipeGroup){
        if (pipe.x < -50){
            pipe.remove();
            }
        }

        for(let pipe of pipeGroup){
            let pipeRightEdge = pipe.x + pipe.w/2; 
            let birdLeftEdge = bird.x - pipe.w/ 2;

            if( pipe.passed == false && pipeRightEdge < birdLeftEdge){
                pipe.passed = true;
                score++; //score +=1; or score = 1+score;
                pointSound,play();
        }
    }
        drawScore(width/2,20,score,digitWidth,digitHeight);
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

        
    }
    //drawScore(width/2,20,score,digitWidth,digitHeight);
}

function spawnPipePair(){
    // let gap=50;

    // let midY=random(250,height-250);
    // topPipe.passed = false;
    // topPipe = new Sprite(400,midY-gap /2 -200 ,52,320,'static');
    // topPipe.img = pipe;
    // topPipe.rotation = 180;
    // bottomPipe = new Sprite(400,midY+gap /2 +200 ,52,320,'static');
    // bottomPipe.img = pipe;
    // pipeGroup.add(topPipe);
    // pipeGroup.add(bottomPipe);
    // pipeGroup.vel.x = -3;
    // pipeGroup.layer = 0;
    let gap = 70;
  // let midY = height / 2;
    let midY = random(250, height - 250); // random(min, max)

    // create the top pipe
    topPipe = new Sprite(bird.x + 400, midY - gap / 2 - 200, 52, 320, 'static');
    topPipe.img = pipe;
    topPipe.rotation = 180;

        topPipe.passed = false;

    // create the bottom pipe sprite
    bottomPipe = new Sprite(bird.x + 400, midY + gap / 2 + 200, 52, 320, 'static');
    bottomPipe.img = pipe;

    pipeGroup.add(topPipe);
    pipeGroup.add(bottomPipe);
    pipeGroup.layer = 0;

}
function drawScore(x,y,score,digitWidth,digitHeight){

    scoreDigits.removeAll();
    let scoreStr = str(score);
    let totalWidth = scoreStr.length * digitWidth;
    let startX = x - totalWidth /2;

    for(let i = 0; i < scoreStr.length; i++){
        let digit = int(scoreStr[i]);
        let xPos = startX + i * digitWidth;
        let digitSprite = new scoreDigits.Sprite(xPos,y,digitWidth,digitHeight);

        digitSprite.img = numberImages[digit];
    }

    moveGroup(scoreDigits,camera.x,24);
}


function moveGroup(group,targetX,spacing){
    let totalWidth = (group.length - 1) * spacing;
    let startX = (targetX - totalWidth/2);
    for(let i =0 ; i < group.length; i++){
        group[i].x = startX + i * spacing;
    }
}