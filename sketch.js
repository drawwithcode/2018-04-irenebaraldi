function preload(){
  // put preload code here
}
var myGigi = []
//var tantiGigi = [];

function setup() {

  // put setup code here
  createCanvas(windowWidth,windowHeight);
    background(80);



      myGigi = new Gigi(random(0, width), random(0, height), random()*500, random(0, width), random(0, height),random(0, width), random(0, height), random(0, width), random(0, height))
      myGigi.diameter = random(10, 50);
      myGigi.speed = random(5,10);


    }



function draw() {
  // put drawing code here


    if (mouseX > 0 && mouseX < width/3) {
    myGigi.move02();
    myGigi.display01();
  } else if (mouseX > width/3 && mouseX < 2*width/3) {
    myGigi.move02();
    myGigi.display03();
  } else if(mouseX > 2*width/3 && mouseX < width) {
    myGigi.move02();
    myGigi.display02();
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

function Gigi(_x, _y, _size, _x2, _y2, _x3, _y3 ) {
  this.x = _x;
  this.y = _y;
  this.x2 = _x2;
  this.y2 = _y2;
  this.x3 = _x3;
  this.y3 = _y3;
  this.size = _size;
  this.color = 'red';
  this.speed = 2;
  var yDir = 1;
  var xDir = 1;

  this.display01 = function() {
    strokeWeight(2);
    stroke(40);
    fill(color('blue'));
    ellipse(this.x, this.y, this.size);

    }

  this.display02 = function() {
    strokeWeight(2);
    stroke(40);
    fill(color('red'));
    rect(this.x, this.y, this.size, this.size);
  }

  this.display03 = function() {
    strokeWeight(2);
    stroke(40);
    fill(color('green'));
    triangle(this.x,this.y,this.x2,this.y2,this.x3,this.y3);
}

  this.move01 = function() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }

  this.move02 = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;

    if(this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }

    if(this.x > width || this.x < 0) {
      xDir = xDir * -1;
    }
  } }
