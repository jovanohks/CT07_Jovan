function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color
  
  // Basic shape testing
  // write your codes here
  fill("skyblue");
  stroke("pink");
  strokeWeight = 2;
  circle(30,30,50);
  rect(50,50,100,200);
  // End Basic shape testing
    ball = new Sprite();
    ball.x = 100;
    ball.y = 200;
    ball.diameter = 40;
    ball.color = 'blue';
    ball.vel.x = 3;
    ball.vel.y = 3;
    ball.collider = "dynamic";
    ball.bounciness = 1;
    box= new Sprite();
    box.x=100;
    box.y=100;
    
   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
  // write your codes here
}