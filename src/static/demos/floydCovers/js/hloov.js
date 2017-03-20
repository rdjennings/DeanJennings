var Hloov = function(parms){
	
	if (typeof window.MOVE_UP === 'undefined') {
		window.MOVE_UP = 'MOVE_UP';
		window.MOVE_DOWN = 'MOVE_DOWN';
		window.MOVE_LEFT = 'MOVE_LEFT';
		window.MOVE_RIGHT = 'MOVE_RIGHT';
		window.MOVE_UP_RIGHT = 'MOVE_UP_RIGHT';
		window.MOVE_UP_LEFT = 'MOVE_UP_LEFT';
		window.MOVE_DOWN_RIGHT = 'MOVE_DOWN_RIGHT';
		window.MOVE_DOWN_LEFT = 'MOVE_DOWN_LEFT';
		window.MOVE_CENTER = 'MOVE_CENTER';
	}
	
	var options = {
		'image': null,
		'container': null,
		'text': null,
		'expansion': null,
		'move': false,
		'colorTop': false,
		'shove': false
	};
	
	for (oItem in parms) {
		options[oItem] = parms[oItem];
	}

	this.init(options);

};

Hloov.prototype.init = function(options) {
	var context = this.context = this;
	var options = this.options = options;
	var container = this.container = options.container;
	var text = this.text = options.text;
	var image = this.image = options.image;
	var shove = this.shove = options.shove;
	var move = this.move = options.move;
	var expansion = this.expansion = options.expansion;

	if(container.style.position === '') {
		container.style.position = 'relative';
	}
	if(container.style.zIndex === '') {
		container.style.zIndex = '0';
	}

	var width = this.width = container.offsetWidth; 
	var height = this.height = container.offsetHeight;

	if (options.expansion) {
		if (!isNaN(options.expansion) && options.expansion+0 > 1) {
			this.expanded_width = parseInt(width * options.expansion) + 'px';
		} else {
			this_expanded_width = null;
		}
		this.half = ((parseInt(width * options.expansion) - width)/2) + 'px';
		this.full = (parseInt(width * options.expansion) - width) + 'px';
	}

	var canvas1 = document.createElement("canvas");
	canvas1.setAttribute('width', width);
	canvas1.setAttribute('height', height);
	canvas1.style.zIndex = '1';
	canvas1.style.position = 'absolute';
	canvas1.style.top = '0';
	canvas1.style.left = '0';
	if (options.colorTop) {
		var overlayCanvas = this.overlayCanvas = canvas1;
	} else {
		var baseCanvas = this.baseCanvas = canvas1;
	}
	container.appendChild(canvas1);

	var canvas2 = document.createElement("canvas");
	canvas2.setAttribute('width', width);
	canvas2.setAttribute('height', height);
	canvas2.style.zIndex = '10';
	canvas2.style.position = 'absolute';
	canvas2.style.top = '0';
	canvas2.style.left = '0';
	if (options.colorTop) {
		var baseCanvas = this.baseCanvas = canvas2;
	} else {
		var overlayCanvas = this.overlayCanvas = canvas2;
	}
	container.appendChild(canvas2);

	var baseContext = this.baseContext = baseCanvas.getContext("2d");
	var overlayContext = this.overlayContext = overlayCanvas.getContext("2d");

	var imageObj = new Image();
	imageObj.src = image;

	imageObj.onload = function() {
		baseContext.drawImage(imageObj, 0, 0);
		var imgd = baseContext.getImageData(0, 0, 500, 300);
		var pix = imgd.data;
		for (var i = 0, n = pix.length; i < n; i += 4) {
			var grayscale = pix[i  ] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
			pix[i  ] = grayscale; 	// red
			pix[i+1] = grayscale; 	// green
			pix[i+2] = grayscale; 	// blue
			// alpha
		}
		overlayContext.putImageData(imgd, 0, 0);
	};

	this.bindEvents();
};

Hloov.prototype.bindEvents = function() {
	var context = this.context;

	this.container.onmouseover=function() {
		var base = this.getElementsByTagName('canvas')[0];
		base.style.zIndex = '999';
		this.style.zIndex = '999';
		
		if (context.expansion) {
			base.style.width = context.expanded_width;
			if (context.shove) {
				this.style.width = context.expanded_width;
			}
			
			switch (context.move) {
				case MOVE_UP:
					base.style.marginTop = '-'+context.full;
					if (!context.shove) {
						base.style.marginLeft = '-'+context.half;
					}
					break;
				case MOVE_DOWN:
					if (!context.shove) {
						base.style.marginLeft = '-'+context.half;
					}
					break;
				case MOVE_LEFT:
					base.style.marginTop = '-'+context.half;
					if (!context.shove) {
						base.style.marginLeft = '-'+context.full;
					}
					break;
				case MOVE_RIGHT:
					base.style.marginTop = '-'+context.half;
					if (!context.shove) {
						base.style.marginRight = '-'+context.full;
					}
					break;
				case MOVE_UP_RIGHT:
					base.style.marginTop = '-'+context.full;
					if (!context.shove) {
						base.style.marginRight = '-'+context.full;
					}
					break;
				case MOVE_UP_LEFT:
					base.style.marginTop = '-'+context.full;
					if (!context.shove) {
						base.style.marginLeft = '-'+context.full;
					}
					break;
				case MOVE_DOWN_RIGHT:
					if (!context.shove) {
						base.style.marginRight = '-'+context.full;
					}
					break;
				case MOVE_DOWN_LEFT:
					if (!context.shove) {
						base.style.marginLeft = '-'+context.full;
					}
					break;
				case MOVE_CENTER:
					base.style.marginTop = '-'+context.half;
					if (!context.shove) {
						base.style.marginLeft = '-'+context.half;
					}
					break;
				default:
					break;
			}
		}
		
		
	};

	this.container.onmouseout=function() {
		var base = this.getElementsByTagName('canvas')[0];
		base.style.zIndex = '1';
		this.style.zIndex = '1';
		base.style.width = '';
		base.style.marginLeft = '';
		base.style.marginTop = '';
		this.style.width = context.width + 'px';
		this.style.marginLeft = '';
	};
};
