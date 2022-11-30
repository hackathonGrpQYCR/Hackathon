var a = 1;
var b = 1;
function draw() {

  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var context = canvas.getContext('2d');
    for (var x = 0.5; x < 500; x += 50) {
      context.moveTo(x, 0);
      context.lineTo(x, 500);
    }
    for (var y = 0.5; y < 500; y += 50) {
      context.moveTo(0, y);
      context.lineTo(500, y);
    }
    context.strokeStyle = 'grey';
    context.stroke();
  }
  context.fillStyle = 'red';
  context.fillRect(a, b, 48, 48);
}

/*function showCoords(event) {
  var context = canvas.getContext('2d');
  var x = event.clientX - 10;
  var y = event.clientY - 10;
  var coords = "X coordinates: " + x + ", Y coordinates: " + y;
  document.getElementById('showCoords').innerHTML = coords;
 var a = 1;
var b = 1;
function draw() {

  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var context = canvas.getContext('2d');
    for (var x = 0.5; x < 500; x += 50) {
      context.moveTo(x, 0);
      context.lineTo(x, 500);
    }
    for (var y = 0.5; y < 500; y += 50) {
      context.moveTo(0, y);
      context.lineTo(500, y);
    }
    context.strokeStyle = 'grey';
    context.stroke();
  }
  context.fillStyle = 'red';
  context.fillRect(a, b, 48, 48);
}

/*function showCoords(event) {
  var context = canvas.getContext('2d');
  var x = event.clientX - 10;
  var y = event.clientY - 10;
  var coords = "X coordinates: " + x + ", Y coordinates: " + y;
  document.getElementById('showCoords').innerHTML = coords;
  context.fillStyle = 'red';
  context.fillRect(x, y, 50, 50);
}*/
var n;
var m;
function getValue() {
  var x = document.getElementById("in").value*50+1;
  var y = document.getElementById("int").value*50+1;
  var context = canvas.getContext('2d');
  //context.clearRect(a, b, 50, 50);
  context.fillStyle = 'white';
  context.fillRect(a, b, 48, 48);
  
  n = a;
  m = b;
  var yes = false;
  while(yes == false){
    if(n<x){
      context.fillStyle = 'white';
      context.fillRect(n, m, 48, 48);
      context.fillStyle = 'red';
      context.fillRect(n+=50, m, 48, 48);
      a=n;
      b=m;
      //delay(1);
    }
    if(m<y){
      context.fillStyle = 'white';
      context.fillRect(n, m, 48, 48);
      context.fillStyle = 'red';
      context.fillRect(n, m+=50, 48, 48);    
      a=n;
      b=m;
      //delay(1);
    }
    if(n>x){
      context.fillStyle = 'white';
      context.fillRect(n, m, 48, 48);
      context.fillStyle = 'red';
      context.fillRect(n-=50, m, 48, 48);
      a=n;
      b=m;
      //delay(1);
    }
    if(m>y){
      context.fillStyle = 'white';
      context.fillRect(n, m, 48, 48);
      context.fillStyle = 'red';
      context.fillRect(n, m-=50, 48, 48);    
      a=n;
      b=m;
      //delay(1);
    }
    if(n==x && m==y ){
      yes = true;
    }
  }
  var coords = "X coordinates: " + a + ", Y coordinates: " + b;
  document.getElementById('showCoords').innerHTML = coords;
}