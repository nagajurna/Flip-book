# Flip-book documentation

## Constructor

<table>
	<tr>
		<td>Flip(options)</td>
		<td><ul><li>Creates a CANVAS element inside the HTML element defined by 'container' (preferably a DIV) ;</li><li>Binds the image files defined by 'src' to the CANVAS element ;</li><li>Sets parameters for the animation.</li></ul></td>
	</tr>
</table>

## Options (Object)

<table>
	<tr>
		<th>Parameter</th>
		<th>Description</th>
		<th>Format</th>
		<th>Status</th>
	</tr>
	<tr>
		<td>container</td>
		<td>id of the HTML container (div)</td>
		<td>string</td>
		<td>required</td>
	</tr>
	<tr>
		<td>src</td>
		<td>link(s) to your image file(s)</td>
		<td>string (single file) or array of strings (several files)</td>
		<td>required</td>
	</tr>
	<tr>
		<td>cols</td>
		<td>number of columns of your image file(s)  (= number of panels per row)</td>
		<td>number</td>
		<td>required</td>
	</tr>
	<tr>
		<td>rows</td>
		<td>number of rows of your image file(s)  (= number of panels per columns)</td>
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
		<td>width of the left margin of your image file(s)  (= distance, in pixels, from the left edge to the first column)</td>
		<td>number</td>
		<td>optional (default: 0)</td>
	</tr>
	<tr>
		<td>topMargin</td>
		<td>height of the top margin of your image file(s)  (= distance, in pixels, from the top edge to the first row)</td>
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

## Methods

<table>
	<tr>
		<th>start()</th>
		<td>Starts animation</td>
	</tr>
	<tr>
		<th>pause()</th>
		<td>Temporarily stops animation</td>
	<tr>
		<th>resume()</th>
		<td>Resumes animation after pause</td>
	</tr>
	<tr>
		<th>stop()</th>
		<td>Stops the animation</td>
	</tr>
	<tr>
		<th colspan="2"> Setters/getters</th>
	</tr>
	<tr>
		<th>setContainer(value)</th>
		<td>Sets container (value = string)</td>
	</tr>
	<tr>
		<th>getContainer()</th>
		<td>Returns the current value of container (string)</td>
	</tr>
	<tr>
		<th>setSrc(value)</th>
		<td>Sets src (value = string for a single file or array of strings for several files)</td>
	</tr>
	<tr>
		<th>getSrc()</th>
		<td>Returns the current value of src (string or array of strings)</td>
	</tr>
	<tr>
		<th>setCols(value)</th>
		<td>Sets cols (value = number)</td>
	</tr>
	<tr>
		<th>getCols()</th>
		<td>Returns the current value of cols (number)</td>
	</tr>
	<tr>
		<th>setRows(value)</th>
		<td>Sets rows (value = number)</td>
	</tr>
	<tr>
		<th>getRows()</th>
		<td>Returns the current value of rows (number)</td>
	</tr>
	<tr>
		<th>setWidth(value)</th>
		<td>Sets width (value = number)</td>
	</tr>
	<tr>
		<th>getWidth()</th>
		<td>Returns the current value of width (number)</td>
	</tr>
	<tr>
		<th>setHeight(value)</th>
		<td>Sets height (value = number)</td>
	</tr>
	<tr>
		<th>getHeight()</th>
		<td>Returns the current value of height (number)</td>
	</tr>
	<tr>
		<th>setLeftMargin(value)</th>
		<td>Sets leftMargin (value = number)</td>
	</tr>
	<tr>
		<th>getLeftMargin()</th>
		<td>Returns the current value of leftMargin (number)</td>
	</tr>
	<tr>
		<th>setTopMargin(value)</th>
		<td>Sets topMargin (value = number)</td>
	</tr>
	<tr>
		<th>getTopMargin()</th>
		<td>Returns the current value of topMargin (value)</td>
	</tr>
	<tr>
		<th>setGutterX(value)</th>
		<td>Sets gutterX (value = number)</td>
	</tr>
	<tr>
		<th>getGutterX()</th>
		<td>Returns the current value of gutterX (number)</td>
	</tr>
	<tr>
		<th>setGutterY(value)</th>
		<td>Sets gutterY (value = number)</td>
	</tr>
	<tr>
		<th>getGutterY()</th>
		<td>Returns the current value of gutterY (number)</td>
	</tr>
	<tr>
		<th>setSpeed(value)</th>
		<td>Sets speed (value = number)</td>
	</tr>
	<tr>
		<th>getSpeed()</th>
		<td>Returns the current value of speed (number)</td>
	</tr>
	<tr>
		<th>setRepeat(value)</th>
		<td>Sets repeat (value = number or 'infinite')</td>
	</tr>
	<tr>
		<th>getRepeat()</th>
		<td>Returns the current value of repeat (number or 'infinite')</td>
	</tr>
	<tr>
		<th>setStartPanel(value)</th>
		<td>Sets startPanel (value = 'first', 'last' or 'none')</td>
	</tr>
	<tr>
		<th>getStartPanel()</th>
		<td>Returns the current value of startPanel (string)</td>
	<tr>
		<th>setCompletePanel(value)</th>
		<td>Sets completePanel (value = 'first', 'last' or 'none')</td>
	</tr>
	<tr>
		<th>getCompletePanel()</th>
		<td>Returns the current value of completePanel (string)</td>
	</tr>
	<tr>
		<th>setStopPanel(value)</td>
		<td>Sets stopPanel (value = 'first, 'last' or 'none')</td>
	</tr>
	<tr>
		<th>getStopPanel()</th>
		<td>Returns the current value of stopPanel</td>
	</tr>
</table>

## Events

Events are dispatched to :

* document ;
* container element.

<table>
	<tr>
		<th>start</th>
		<td>Event is fired when animation starts</td>
	</tr>
	<tr>
		<th>pause</th>
		<td>Event is fired when animation pauses</td>
	<tr>
		<th>resume</th>
		<td>Event is fired when animation resumes</td>
	</tr>
	<tr>
		<th>stop</th>
		<td>Event is fired when animation stops</td>
	</tr>
	<tr>
		<th>complete</th>
		<td>Event is fired when animation comes to its end</td>
	</tr>
</table>

Events details : 

<table>
	<tr>
		<td>event.detail.container</td>
		<td>id of container element (string)</td>
	</tr>
	<tr>
		<th>event.detail.container</th>
		<td>link to image file (string)</td>
	<tr>
		<th>event.detail.index</td>
		<td>panel index (number, starts at 1)</td>
	</tr>
</table>

## Requirements for image files
