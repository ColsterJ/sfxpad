var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
// var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

// Disable 300ms click delay on iOS
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

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
airhorn_button.addEventListener("click", function(){
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
vocal_airhorn_button.addEventListener("click", function(){
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
kick_button.addEventListener("click", function(){
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
snare_button.addEventListener("click", function(){
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
laugh_button.addEventListener("click", function(){
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


// init();
// function init(){
// 	setupSquares();
// }