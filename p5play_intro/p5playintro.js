function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color
  
  // Basic shape testing
  // write your codes here
 
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
   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
  // write your codes here
}