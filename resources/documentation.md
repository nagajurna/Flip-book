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
		<td>start()</td>
		<td>Starts animation</td>
	</tr>
	<tr>
		<td>pause()</td>
		<td>Temporarily stops animation</td>
	<tr>
		<td>resume()</td>
		<td>Resumes animation after pause</td>
	</tr>
	<tr>
		<td>stop()</td>
		<td>Stops the animation</td>
	</tr>
	<tr>
		<td>setContainer(param)</td>
		<td>Sets container (param = string, no return value)</td>
	</tr>
	<tr>
		<td>getContainer()</td>
		<td>Returns the current value of container (string)</td>
	</tr>
	<tr>
		<td>setSrc(param)</td>
		<td>Sets src (param = string for a single file or array of strings for several files, no return value)</td>
	</tr>
	<tr>
		<td>getSrc()</td>
		<td>Returns the current value of src (string or array of strings)</td>
	</tr>
	<tr>
		<td>setCols(param)</td>
		<td>Sets cols (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getCols()</td>
		<td>Returns the current value of cols (number)</td>
	</tr>
	<tr>
		<td>setRows(param)</td>
		<td>Sets rows (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getRows()</td>
		<td>Returns the current value of rows (number)</td>
	</tr>
	<tr>
		<td>setWidth(param)</td>
		<td>Sets width (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getWidth()</td>
		<td>Returns the current value of width (number)</td>
	</tr>
	<tr>
		<td>setHeight(param)</td>
		<td>Sets height (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getHeight()</td>
		<td>Returns the current value of height (number)</td>
	</tr>
	<tr>
		<td>setLeftMargin(param)</td>
		<td>Sets leftMargin (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getLeftMargin()</td>
		<td>Returns the current value of leftMargin (number)</td>
	</tr>
	<tr>
		<td>setTopMargin(param)</td>
		<td>Sets topMargin (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getTopMargin()</td>
		<td>Returns the current value of topMargin (value)</td>
	</tr>
	<tr>
		<td>setGutterX(param)</td>
		<td>Sets gutterX (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getGutterX()</td>
		<td>Returns the current value of gutterX (number)</td>
	</tr>
	<tr>
		<td>setGutterY(param)</td>
		<td>Sets gutterY (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getGutterY()</td>
		<td>Returns the current value of gutterY (number)</td>
	</tr>
	<tr>
		<td>setSpeed(param)</td>
		<td>Sets speed (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getSpeed()</td>
		<td>Returns the current value of speed (number)</td>
	</tr>
	<tr>
		<td>setRepeat(param)</td>
		<td>Sets repeat (param = number, no return value)</td>
	</tr>
	<tr>
		<td>getRepeat()</td>
		<td>Returns the current value of repeat (number)</td>
	</tr>
	<tr>
		<td>setStartPanel(param)</td>
		<td>Sets startPanel (param = 'first', 'last' or 'none', no return value)</td>
	</tr>
	<tr>
		<td>getStartPanel()</td>
		<td>Returns the current value of startPanel (string)</td>
	<tr>
		<td>setCompletePanel(param)</td>
		<td>Sets completePanel (param = 'first', 'last' or 'none', no return value)</td>
	</tr>
	<tr>
		<td>getCompletePanel()</td>
		<td>Returns the current value of completePanel (string)</td>
	</tr>
	<tr>
		<td>setStopPanel(param)</td>
		<td>Sets stopPanel (param = 'first, 'last' or 'none', no return value)</td>
	</tr>
	<tr>
		<td>getStopPanel()</td>
		<td>Returns the current value of stopPanel</td>
	</tr>
</table>

## Events

## Requirements for image files