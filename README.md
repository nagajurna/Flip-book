# Flip-book
Make a cartoon with JavaScript and Canvas

## Use
* Reference the flip-book.js file :

		<script src="flip-book.min.js"></script>
		
* Insert a div in your HTML :

		<div id='my_div'></div>
	
* Insert your image(s) in your images repertory

* In your js script, create your flip instance and start :

		var options = {container: 'my_div',
					  src: ['images/image_1.jpg','images/image_2.jpg','images/image_3.jpg'],
					  cols: 6,
				      rows: 8,
				      width: 100,
				      height: 110,
				      leftMargin: 20,
				      topMargin: 22,
				      gutterX: 10,
				      gutterY: 20,
				      repeat: 2,
				      speed: 100};
		var flip = new Flip(options);
		window.addEventListener('load', flip.start, false)
		
## Documentation

See resources/documentation
