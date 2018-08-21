var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
// var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

Howler.volume(0.5);

var airhorn = new Howl({
  src: ['sounds/airhorn_quieter.wav']
});
var vocal_airhorn = new Howl({
  src: ['sounds/vocal_airhorn.wav']
});
var kick = new Howl({
  src: ['sounds/kick.wav']
});
var snare = new Howl({
  src: ['sounds/snare.wav']
});
var laugh = new Howl({
  src: ['sounds/sitcom_laugh.wav']
});
var airhorn_button = document.querySelector("#airhorn");
var vocal_airhorn_button = document.querySelector("#vocal_airhorn");
var kick_button = document.querySelector("#kick");
var snare_button = document.querySelector("#snare");
var laugh_button = document.querySelector("#laugh");
airhorn_button.addEventListener("touchstart", function(){
	if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
	    Howler.ctx.resume().then(function() {
	        console.log("AudioContext resumed!");
	        // fire your callback here
	    });
	}
	if(airhorn.playing())
		airhorn.stop();
	airhorn.play();
});
vocal_airhorn_button.addEventListener("touchstart", function(){
	if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
	    Howler.ctx.resume().then(function() {
	        console.log("AudioContext resumed!");
	        // fire your callback here
	    });
	}
	if(vocal_airhorn.playing())
		vocal_airhorn.stop();
	vocal_airhorn.play();
});
kick_button.addEventListener("touchstart", function(){
	if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
	    Howler.ctx.resume().then(function() {
	        console.log("AudioContext resumed!");
	        // fire your callback here
	    });
	}
	if(kick.playing())
		kick.stop();
	kick.play();
});
snare_button.addEventListener("touchstart", function(){
	if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
	    Howler.ctx.resume().then(function() {
	        console.log("AudioContext resumed!");
	        // fire your callback here
	    });
	}
	if(snare.playing())
		snare.stop();
	snare.play();
});
laugh_button.addEventListener("touchstart", function(){
	if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
	    Howler.ctx.resume().then(function() {
	        console.log("AudioContext resumed!");
	        // fire your callback here
	    });
	}
	if(laugh.playing())
		laugh.stop();
	laugh.play();
});

// disable iOS's default touchmove gestures
window.addEventListener("touchmove", function(event) {event.preventDefault();}, {passive: false} );
// due to a change in iOS WebKit behavior, unless passive marked false preventDefault will be
// ignored
// https://bugs.webkit.org/show_bug.cgi?id=182521
// https://stackoverflow.com/questions/49926360/prevent-ios-11-3-overflow-bouncing
  
// disable double tap to zoom - works and is needed last I checked (8-20-2018)
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
		var now = (new Date()).getTime();
		event.preventDefault();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);