(function(exports){

	// Singleton
	var Mouse = {
		x: -1,
		y: -1,
		pressed: false
	};
	exports.Mouse = Mouse;
	
	// Event Handling
	var onMouseMove,onTouchMove;
	
	window.addEventListener("mousedown",function(event){
	    Mouse.pressed = true;
	    onMouseMove(event);
	},false);

	window.addEventListener("mouseup",function(event){
	    Mouse.pressed = false;
	},false);

	window.addEventListener("mousemove",onMouseMove = function(event){
		Mouse.x = event.pageX;
		Mouse.y = event.pageY - window.pageYOffset;

	},false);

	window.addEventListener("touchstart",function(event){
	    Mouse.pressed = true;
	    onTouchMove(event);
	},false);

	window.addEventListener("touchend",function(event){
	    Mouse.pressed = false;
	},false);

	window.addEventListener("touchmove",onTouchMove = function(event){
		Mouse.x = event.changedTouches[0].clientX;
		Mouse.y = event.changedTouches[0].clientY - window.pageYOffset;
	},false);


})(window);