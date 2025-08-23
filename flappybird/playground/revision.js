//create a sprite with physics
let Flappybird,bird;
function preload(){
    flapMidImg = loadImage('assets/yellowbird-midflap.img');
}
function setup(){
    new Canvas(400,600);
    bird = new Sprite();
    bird.x = width/2;
    bird.y=200;
    bird.width = 30;
    bird.height=30;
    bird.img = flapMidImg;
    bird.collider="dynamic"
    bird.mass=2;
    bird.drag=0.05;
    bird.bounciness=10;
    world.gravity.y=10;
}
function draw(){

}