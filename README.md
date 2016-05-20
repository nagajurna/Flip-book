# Flip-book
Make a cartoon with JavaScript and Canvas

## Use
* Reference the file in your HTML :

		<script src="flip-book.js"></script>
	
* Insert your image(s) in your images repertory (see below "Requirements for image files")

* In your js file, create your flip instance and start :

		var flip = new Flip(options);
		flip.start();
		
## Options (Object)

<table>
	<tr>
		<td>container</td>
		<td>id of the HTML container (div)</td>
		<td>string</td>
		<td>required</td>
	</tr>
	<tr>
		<td>src</td>
		<td>link(s) to your image files</td>
		<td>string (single file) or array of string (several files)</td>
		<td>required</td>
	</tr>
	<tr>
		<td>cols</td>
		<td>number of columns of your image files (= number of panels per row)</td>
		<td>number</td>
		<td>required</td>
	</tr>
	<tr>
		<td>rows</td>
		<td>number of rows of your image files (= number of panels per columns)</td>
		<td>number</td>
		<td>required</td>
	</tr>
	<tr>
		<td>width</td>
		<td>width of the panels, in pixels</td>
		<td>number</td>
		<td>required</td>
	</tr>
	<tr>
		<td>height</td>
		<td>height of the panels, in pixels</td>
		<td>number</td>
		<td>required</td>
	</tr>
	<tr>
		<td>leftMargin</td>
		<td>width of the left margin of your image files (= distance, in pixels, from the left edge to the first column)</td>
		<td>number</td>
		<td>optional (default: 0)</td>
	</tr>
	<tr>
		<td>topMargin</td>
		<td>height of the top margin of your image files (= distance, in pixels, from the top edge to the first row)</td>
		<td>number</td>
		<td>optional (default: 0)</td>
	</tr>
	<tr>
		<td>gutterX</td>
		<td>width of the gutter between columns, in pixels</td>
		<td>number</td>
		<td>optional (default: 0)</td>
	</tr>
	<tr>
		<td>gutterY</td>
		<td>width of the gutter between rows, in pixels</td>
		<td>number</td>
		<td>optional (default: 0)</td>
	</tr>
	<tr>
		<td>speed</td>
		<td>interval in ms</td>
		<td>number</td>
		<td>optional (default: 50)</td>
	</tr>
	<tr>
		<td>repeat</td>
		<td>number of repetition of a cycle</td>
		<td>number or 'infinite'</td>
		<td>optional (default: 1)</td>
	</tr>
	<tr>
		<td>startPanel</td>
		<td>panel displayed before starting</td>
		<td>string : 'first', 'last' or 'none'</td>
		<td>optional (default: 'first')</td>
	</tr>
	<tr>
		<td>completePanel</td>
		<td>panel displayed after completion</td>
		<td>string : 'first', 'last' or 'none'</td>
		<td>optional (default: 'last')</td>
	</tr>
	<tr>
		<td>stopPanel</td>
		<td>panel displayed after stopping</td>
		<td>string : 'first', 'last' or 'none'</td>
		<td>optional (default: 'last')</td>
	</tr>
</table>

