# Flip-book
Make a cartoon with JavaScript and Canvas

## Use
* Reference the flip-book.js file :

		<script src="flip-book.js"></script>
		
* Insert a div in your HTML :

		<div id='my_div'></div>
	
* Insert your image(s) in your images repertory

* In your js script, create your flip instance and start :

		var options = {container: 'my_div',
					  src: ['images/image_1.jpg','images/image_2.jpg','images/image_3.jpg'],
					  cols: 10,
				      rows: 18,
				      width: 36,
				      height: 48,
				      leftMargin: 29,
				      topMargin: 20,
				      gutterX: 3,
				      gutterY: 8,
				      repeat: 2,
				      speed: 100};
		var flip = new Flip(options);
		window.addEventListener('load', flip.start, false)
		
## Documentation

See resources/documentation
