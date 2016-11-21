/**
* @Author: John Isaacs <john>
* @Date:   20-Oct-162016
* @Filename: scripts.js
* @Last modified by:   john
* @Last modified time: 21-Nov-162016
*/



var cats = {};

document.getElementById('mainCanvas');

var canvas = document.getElementById('mainCanvas'); // in your HTML this element appears as <canvas id="mycanvas"></canvas>
var ctx = canvas.getContext('2d');
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var winx = window.screenX;
var winy = window.screenY;
for(var i=50; i<900; i=i+50){
  context.beginPath();
  context.moveTo(i, 0);
  context.lineTo(i, canvas.height);
  context.stroke();
}
Leap.loop(function(frame) {

  frame.hands.forEach(function(hand, index) {
    //console.log(index);
    var c = ( cats[index] || (cats[index] = new Circle()) );
    c.update(hand.screenPosition(), hand.roll(), index);

  });

}).use('screenPosition', {scale: 0.5});


var Circle = function(){

      var circle = this
      var centerX = ctx.canvas.width / 2;
      var centerY = ctx.canvas.height / 2;
      var radius = 10;



      circle.update = function(position, rotation, index) {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(position[0], position[1], radius, 0, 2 * Math.PI, false);

        if(index == 0){
          ctx.fillStyle = 'green';
        }
        else{
          ctx.fillStyle = 'orange';
        }
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

        for(var i=50; i<=900; i=i+50){
          context.beginPath();
          context.moveTo(i, 0);
          context.lineTo(i, canvas.height);
          context.stroke();
        }
        checkString(position[0]);

      };





}

function checkString(x){
var n;
//console.log(x%50);
  if(x%50 <5){

    var xm = Math.floor(x/50);
    console.log(xm-1);
    n = notes[xm-1];
    if(n){
      n.play();
      n.stop();
    }

  }
}





cats[0] = new Circle();
