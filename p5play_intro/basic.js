function setup() {
  // write your codes here
  createCanvas(800,600)
  background(220);
  console.log("hello");
  let a=5;
  let b=10;
  let sum=a+b;
  console.log("sum "+sum);
  let area=0.5*a*b;
  text("area: "+area, 0,10);
  // --- Exercise: Area of Triangle ---
  // write your codes here

  // --- Exercise: Sum of first 10 even numbers ---
  // write your codes here
  for(let i =10; i <= 20; i++){
    console.log("counting... "+i);
  }
  for(let i=20; i<=1;i--){
    console.log("counting"+i);
  }
  for(let i=3; i<46; i=i+3){
    console.log(i);
  }
  for (let i=2;i<=20;i=i+2){
    console.log(i)
    text(i,i*2,i*3)
  }
  let age = 16;
  if (age <=9){
    console.log("lower primary");
  } else if (age <=12){
    console.log("upper primary");

  } else if (age>12){
    console.log("secondary");
  }
  count = 19;
  while (count >=1){
    console.log(count);
    count--;
  }
  let groceries=["apple"]
  // --- Exercise: Age category classification ---
  // write your codes here

  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here

  // --- Exercise: Array operations (groceries) ---
  // write your codes here
}

function draw(){
  eclipse(100,100,80,50);
  circle(200,200,30);
  rect(30,30,55,50,20,15,10,5);

  quad(20,30,6,40);
  triangle(30,75,58,20,86,75);
}