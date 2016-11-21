/**
* @Author: John Isaacs <john>
* @Date:   04-Nov-162016
* @Filename: mousecontrol.js
* @Last modified by:   john
* @Last modified time: 21-Nov-162016
*/



function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}


canvas.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
  writeMessage(canvas, message);
  if(mousePos.y>0 && mousePos.y <200){
    checkString(mousePos.x);
  }


}, false);

function checkString(x){
  if(x>98 && x<102){
    notes[0].play();
    notes[0].stop();
  }
  if(x>198 && x<202){
    notes[1].play();
    notes[1].stop();
  }
  if(x>298 && x<302){
    notes[2].play();
    notes[2].stop();
  }
  if(x>398 && x<402){
    notes[3].play();
    notes[3].stop();
  }
  if(x>498 && x<502){
    notes[4].play();
    notes[4].stop();
  }
  if(x>598 && x<602){
    notes[5].play();
    notes[5].stop();
  }
  if(x>698 && x<702){
    notes[6].play();
    notes[6].stop();
  }
  if(x>798 && x<802){
    notes[7].play();
    notes[7].stop();
  }
  if(x>898 && x<902){
    notes[8].play();
    notes[8].stop();
  }

}
