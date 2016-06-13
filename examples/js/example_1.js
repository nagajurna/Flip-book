var options = {container: 'container',
			   src: 'images/muybridge_horse.jpeg',
			   leftMargin: 0,
			   topMargin: 0,
			   cols: 4,
			   rows: 4,
			   width: 150,
			   height: 100,
			   gutterX: 0,
			   gutterY: 5,
			   repeat: 50,
			   speed: 100};	

var flip = new Flip(options);

document.getElementById('start').addEventListener('click', flip.start);
document.getElementById('pause').addEventListener('click', flip.pause);
document.getElementById('resume').addEventListener('click', flip.resume);
document.getElementById('stop').addEventListener('click', flip.stop);
	
var container = document.getElementById(flip.getContainer());
		
container.addEventListener('start', function (e) {
		console.log("started " + e.detail.container + " " + e.detail.src + " " + e.detail.index);
}, false);

container.addEventListener('pause', function (e) {
		console.log("paused " + e.detail.container + " " + e.detail.src + " " + e.detail.index);
}, false);

container.addEventListener('resume', function (e) {
		console.log("resumed " + e.detail.container + " " + e.detail.src + " " + e.detail.index);
}, false);

container.addEventListener('stop', function (e) {
		console.log("stopped " + e.detail.container + " " + e.detail.src + " " + e.detail.index);
}, false);

container.addEventListener('complete', function (e) {
		console.log("completed " + e.detail.container + " " + e.detail.src +  " " + e.detail.index);
}, false);
