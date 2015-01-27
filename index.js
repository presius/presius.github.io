var cube = document.getElementById("cube");
var cont = document.getElementById("container");

var rx = -35;
var ry = -45;
function changeCube(){

	if(Mouse.x<0) return;

	var dx = Mouse.x - 300 - cont.offsetLeft;
	var dy = Mouse.y - 200 - cont.offsetTop;

	var goto_rx = -35 - dy/30;
	var goto_ry = -45 + dx/50;

	rx = rx*0.95 + goto_rx*0.05;
	ry = ry*0.95 + goto_ry*0.05;

	var t = "rotateX("+rx+"deg) rotateY("+ry+"deg)";
	cube.style.webkitTransform = t; 
	cube.style.mozTransform = t;
	cube.style.msTransform = t;
	cube.style.transform = t;

}


// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
(function animloop(){
	requestAnimFrame(animloop);
	changeCube();
})();