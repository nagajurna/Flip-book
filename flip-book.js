//Flip-book by Nagajurna (ppruneta)
//I chose to make all properties private and consequently not to use prototype
//May be not have been the best choice...
	
function Flip(options)
{
	//PRIVATE
	//options	
	var container;
	var src;
	var topMargin;
	var leftMargin;
	var cols;
	var rows;
	var width;
	var height;
	var gutterX;
	var gutterY;
	var speed;
	var repeat;
	var startPanel;
	var stopPanel;
	var completePanel;
	
	var x,y;//coordinates for canvas (= leftMargin, topMargin)
	
	//initElement()
	var element;
	var canvas;
	var ratio;
	var ctx;
	var initElement = function() {
		element = document.getElementById(container);
		var c = element.children;//if already canvas, use it, else create one
		var found = false;
		for(i=0; i<c.length; i++)
		{
			if(c[i].tagName=='CANVAS') { canvas = c[i];}
			found=true;
			break;
		}
		if(found===false) { canvas = document.createElement("canvas");element.appendChild(canvas)}
		canvas.style.width= "100%";//width = 100% of container
		ratio = height/width;//ratio height/width of panels
		canvas.height = ratio*canvas.width;//calculation of canvas height
		ctx = canvas.getContext("2d");
		//refresh event.detail.container
		completeEvent.detail.container = container;
		startEvent.detail.container = container;
		pauseEvent.detail.container = container;
		resumeEvent.detail.container = container;
		stopEvent.detail.container = container;
	}
	//initImage()
	var imgs;
	var initImage = function() {
		imgs = [];
		for(i=0; i<src.length; i++)
		{
			img = new Image();
			img.src = src[i];
			imgs.push(img);
		}
		
		if(startPanel === 'first') {
			imgs[0].addEventListener('load', function() {
				ctx.drawImage(img,x,y,width,height,0,0,canvas.width,canvas.height);
			}, false); 
		} else if(startPanel === 'last') {
			x = leftMargin+(cols-1)*(width+gutterX);
			y = topMargin+(rows-1)*(height+gutterY);
			imagesCounter = imgs.length-1;
			imgs[imagesCounter].addEventListener('load', function() {
				ctx.drawImage(img,x,y,width,height,0,0,canvas.width,canvas.height);
			}, false);
		}
	}
	//initLoops()
	var panelNumber;//panel per page
	var totalNumber;//panel per cycle
	var loops;//total number*repeat
	var initLoops = function() {
		//if repeat === null ('infinite'), loops = 0;
		panelNumber = cols*rows;
		totalNumber = panelNumber*src.length;
		loops = totalNumber*repeat;
	}
	//EVENTS
	var completeEvent = new CustomEvent('complete',{detail:{container: container, src: src}});
	var startEvent = new CustomEvent('start',{detail:{container: container, src: src}});
	var pauseEvent = new CustomEvent('pause',{detail:{container: container, src: src}});
	var resumeEvent = new CustomEvent('resume',{detail:{container: container, src: src}});
	var stopEvent = new CustomEvent('stop',{detail:{container: container, src: src}});
	
	var refreshEvent = function()
	{
		completeEvent.detail.src = src[imagesCounter];
		startEvent.detail.src = src[imagesCounter];
		pauseEvent.detail.src = src[imagesCounter];
		resumeEvent.detail.src = src[imagesCounter];
		stopEvent.detail.src = src[imagesCounter];
		
		completeEvent.detail.index = counter+1;
		startEvent.detail.index = counter+1;
		pauseEvent.detail.index = counter+1;
		resumeEvent.detail.index = counter+2;
		stopEvent.detail.index = counter+1;
	}
	
	//PUBLIC 
	//setters/getters
	this.setContainer = function(option) {
		if(option !== undefined) {
			if(typeof option === 'string') {
				if(option !== '') {
					container = option;
					initElement();
				} else {
					throw new TypeError('Invalid flip() argument. Container must not be empty');
				}
			} else {
				throw new TypeError('Invalid flip() argument. Container must be string');
			}
		} else {
			throw new TypeError('Invalid flip() argument. Container must be defined');
		}
	};
	
	this.getContainer = function() {
		return container;
	};
	
	this.setSrc = function(option) {
		if(option !== undefined) {
			if(option.constructor === Array) {
				if(option.length > 0) {
					src = option;
					initImage();
					initLoops();
				} else {
					throw new TypeError('Invalid flip() argument. Src must not be empty');
				}
			} else if(typeof option === 'string') {
				if(option !== '') {
					src = [];
					src.push(option);
					initImage();
					initLoops();
				} else {
					throw new TypeError('Invalid flip() argument. Src must not be empty');
				}
			} else {
				throw new TypeError('Invalid flip() argument. Src must be string or array');
			}
		} else {
			throw new TypeError('Invalid flip() argument. Src must be defined');
		}
	};
	
	this.getSrc = function() {
		return src;
	};
	
	this.setLeftMargin = function(option) {
		option === undefined|typeof option !== 'number' ?
			leftMargin = 0 :
			leftMargin = option;
		x = leftMargin;
	};
	
	this.getLeftMargin = function() {
		return leftMargin;
	};
	
	this.setTopMargin = function(option) {
		option === undefined|typeof option !== 'number' ?
			topMargin = 0 :
			topMargin = option;
		y = topMargin;
	};
	
	this.getTopMargin = function() {
		return topMargin;
	};
	
	this.setCols = function(option) {
		if(option !== undefined) {
			if(typeof option === 'number') {
				cols = option;
				if(src)
					initLoops();
			} else {
				throw new TypeError('Invalid flip() argument. Cols must be a number');
			}
		} else {
			throw new TypeError('Invalid flip() argument. Cols must be defined');
		}
	};
	
	this.getCols = function() {
		return cols;
	};
	
	this.setRows = function(option) {
		if(option !== undefined) {
			if(typeof option === 'number') {
				rows = option;
				if(src)
					initLoops();
			} else {
				throw new TypeError('Invalid flip() argument. Rows must be a number');
			}
		} else {
			throw new TypeError('Invalid flip() argument. Rows must be defined');
		}
	};
	
	this.getRows = function() {
		return rows;
	};
	
	this.setWidth = function(option) {
		if(option !== undefined) {
			if(typeof option === 'number') {
				width = option;
				if(element)
					initElement();
			} else {
				throw new TypeError('Invalid flip() argument. Width must be a number');
			}
		} else {
			throw new TypeError('Invalid flip() argument. Width must be defined');
		}
	};
	
	this.getWidth = function() {
		return width;
	};
	
	this.setHeight = function(option) {
		if(option !== undefined|typeof option === 'number') {
			if(typeof option === 'number') {
				height = option;
				if(element)
					initElement();
			} else {
				throw new TypeError('Invalid flip() argument. Height must be a number');
			}
		} else {
			throw new TypeError('Invalid flip() argument. Height must be defined');
		}
	};
	
	this.getHeight = function() {
		return height;
	};
	
	this.setGutterX = function(option) {
		option === undefined|typeof option !== 'number' ?
			gutterX = 0 :
			gutterX = option;
	};
	
	this.getGutterX = function() {
		return gutterX;
	};
	
	this.setGutterY = function(option) {
		option === undefined|typeof option !== 'number' ?
			gutterY = 0 :
			gutterY = option;
	};
	
	this.getGutterY = function() {
		return gutterY;
	};
	
	this.setSpeed = function(option) {
		option === undefined|typeof option !== 'number' ?
				 speed = 100 : 
				 speed = option;
	};
	
	this.getSpeed = function () {
		return speed;
	};
	
	this.setRepeat = function(option) {
		if(option === 'infinite') {
			repeat = null;
		} else if(option === undefined|typeof option !== 'number') {
			repeat = 1;
		} else {
			repeat = option;
		}
		if(src)
			initLoops();
	};
	
	this.getRepeat = function() {
		return repeat;
	};
	
	this.setStartPanel = function(option) {
		option === undefined|typeof option !== 'string'|option === '' ?
			startPanel = 'first' :
			startPanel = option;
	};
	
	this.getStartPanel = function() {
		return startPanel;
	};
	
	this.setStopPanel = function(option) {
		option === undefined|typeof option !== 'string'|option === '' ?
			stopPanel = 'last' :
			stopPanel = option;
	};
	
	this.getStopPanel = function() {
		return stopPanel;
	};
	
	this.setCompletePanel = function(option) {
		option === undefined|typeof option !== 'string'|option === '' ?
			completePanel = 'last' :
			completePanel = option;
	};
	
	this.getCompletePanel = function() {
		return completePanel;
	};
	
	this.setSrcOptions = function(options) {
		this.setTopMargin(options.topMargin);
		this.setLeftMargin(options.leftMargin);
		this.setCols(options.cols);//includes initLoops()
		this.setRows(options.rows);//includes initLoops()
		this.setWidth(options.width);//includes initElement();
		this.setHeight(options.height);//includes initElement();
		this.setGutterX(options.gutterX);
		this.setGutterY(options.gutterY);
		this.setSrc(options.src);//includes initImage() and initLoops();
	};
	
	//INIT
	//first options
	this.setTopMargin(options.topMargin);//initiate y
	this.setLeftMargin(options.leftMargin);//initiale x
	this.setCols(options.cols);//includes initLoops()
	this.setRows(options.rows);//includes initLoops()
	this.setWidth(options.width);//includes initElement();
	this.setHeight(options.height);//includes initElement();
	this.setGutterX(options.gutterX);
	this.setGutterY(options.gutterY);
	this.setSpeed(options.speed);
	this.setRepeat(options.repeat);//includes initLoops()
	this.setStartPanel(options.startPanel);
	this.setStopPanel(options.stopPanel);
	this.setCompletePanel(options.completePanel);
	//then
	this.setSrc(options.src);//includes initImage() and initLoops();
	this.setContainer(options.container);//includes initElement();
		
	//PRIVATE
	//Moteur()
	var interval;
	var counter = 0;
	var cycleCounter = 0;
	var panelsCounter = 0;
	var imagesCounter = 0;
	var img=imgs[imagesCounter];
	refreshEvent();
					
	function moteur(interval)
	{
		refreshEvent();
		ctx.drawImage(img,x,y,width,height,0,0,canvas.width,canvas.height);
			
		counter += 1;
		cycleCounter +=1;
		panelsCounter += 1;
		
		
		if(counter == loops)//end animation
		{
			clearInterval(interval);
			inprog = null;
			element.dispatchEvent(completeEvent);
			document.dispatchEvent(completeEvent);
			if(completePanel === 'first') {
				x = leftMargin;
				y = topMargin;
				imagesCounter = 0;
				img = imgs[imagesCounter];
				setTimeout(function() {ctx.drawImage(img,x,y,width,height,0,0,canvas.width,canvas.height);},speed);
			} else if(completePanel === 'none') {
				setTimeout(function(){element.style.visibility="hidden"},speed);
			}
			return
		}
		

		if(panelsCounter % cols == 0)//end row
		{
			x = leftMargin;//first col
	
			if(cycleCounter == totalNumber)//end cycle
			{
				y = topMargin;//first row
				panelsCounter = 0;
				cycleCounter = 0;
				imagesCounter= 0;//back to first image
				img = imgs[imagesCounter];
				return;
				
			}
			
			if(panelsCounter == panelNumber)//end image
			{
				y = topMargin;//first row
				panelsCounter = 0;
				if(imagesCounter<imgs.length-1)
				{
					imagesCounter+=1;//next image
					img = imgs[imagesCounter];
				}
				return;				
			}
	
			y+=(height+gutterY);//else : next row
		} 
		else 
		{
			x += (width+gutterX);//next panel
		}
	}
	

	//PUBLIC FUNCTIONS
	//variable for methods START, PAUSE, RESUME, STOP
	var inprog = null;
	
	this.start = function() {
		
		x = leftMargin;
		y = topMargin;
		if(interval!==undefined){//if interval defined, re-init variables for moteur()
			clearInterval(interval);
			counter=0;
			cycleCounter=0;
			panelsCounter=0;
			imagesCounter=0;
			img = imgs[imagesCounter];
			refreshEvent();
		}
		interval = setInterval(function(){moteur(interval);},speed);
		setTimeout(function(){element.style.visibility="visible"},speed);
		inprog = true;
		element.dispatchEvent(startEvent);
		document.dispatchEvent(startEvent);
	}
	
	this.pause = function() {
		if(inprog == true)
		{
			clearInterval(interval);
			inprog = false;
			element.dispatchEvent(pauseEvent);
			document.dispatchEvent(pauseEvent);
		}
	}
	
	this.resume = function() {
		if(interval!=null && inprog === false)
		{
			clearInterval(interval);
			interval = setInterval(function(){moteur(interval);},speed);
			inprog = true;
			element.dispatchEvent(resumeEvent);
			document.dispatchEvent(resumeEvent);
		}
	}
	
	this.stop = function() {
		if(interval!=null && inprog!=null)
		{
			refreshEvent();
			clearInterval(interval);
			inprog = null;
			element.dispatchEvent(stopEvent);
			document.dispatchEvent(stopEvent);
			if(stopPanel === 'last') {
				x = leftMargin+(cols-1)*(width+gutterX);
				y = topMargin+(rows-1)*(height+gutterY);
				imagesCounter = imgs.length-1;
				img = imgs[imagesCounter];
				ctx.drawImage(img,x,y,width,height,0,0,canvas.width,canvas.height);
			} else if(stopPanel === 'first') {
				x = leftMargin;
				y = topMargin;
				imagesCounter = 0;
				img = imgs[imagesCounter];
				ctx.drawImage(img,x,y,width,height,0,0,canvas.width,canvas.height);
			} else if(stopPanel === 'none') {
				element.style.visibility="hidden";
			}
		}
	}
}
	
	
