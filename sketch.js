var student={
  name:"Ali",
  class:8,
  subject:"sport",
  marks:[4,2,7,9]

}
var ball={
 xspeed:0,
 yspeed:0,
x:200,
y:200,
colour:"red",
r:50,
}






function setup() {

  createCanvas(400, 400);
  console.log(student.subject)
}

function draw() {
  background(220);
  circle (ball.x, ball.y, ball.r)
  fill (ball.colour)
  ball.xspeed=1
  ball.x=ball.xspeed
}