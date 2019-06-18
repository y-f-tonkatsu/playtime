(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Pixel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D1C52").s().p("AgdAoIAAgKIgKAAIAAg7IAKAAIAAgKIA7AAIAAAKIAKAAIAAA7IgKAAIAAAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(157,28,82,0.498)").s().p("AgnAyIAAgKIgKAAIAAhPIAKAAIAAgKIBPAAIAAAKIAKAAIAABPIgKAAIAAAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pixel, new cjs.Rectangle(-5,-5,10,10), null);


(lib.Pixel_r_build = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.Pixel("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-185,10,190);


(lib.tA_fadein_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pixel_r_build
	this.instance = new lib.Pixel_r_build("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-24,16);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(51));

	// Pixel_r_build
	this.instance_1 = new lib.Pixel_r_build("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-32);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(52));

	// Pixel_r_build
	this.instance_2 = new lib.Pixel_r_build("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8,16);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(52));

	// Pixel_r_build
	this.instance_3 = new lib.Pixel_r_build("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(7,-8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).wait(52));

	// Pixel_r_build
	this.instance_4 = new lib.Pixel_r_build("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(24,24);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(52));

	// Pixel_r_build
	this.instance_5 = new lib.Pixel_r_build("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(8,16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).wait(54));

	// Pixel_r_build
	this.instance_6 = new lib.Pixel_r_build("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-24,24);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).wait(54));

	// Pixel_r_build
	this.instance_7 = new lib.Pixel_r_build("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-24,32);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).wait(55));

	// Pixel_r_build
	this.instance_8 = new lib.Pixel_r_build("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-16,16);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(56));

	// Pixel_r_build
	this.instance_9 = new lib.Pixel_r_build("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(16,8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(56));

	// Pixel_r_build
	this.instance_10 = new lib.Pixel_r_build("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-16,8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).wait(58));

	// Pixel_r_build
	this.instance_11 = new lib.Pixel_r_build("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(16,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).wait(59));

	// Pixel_r_build
	this.instance_12 = new lib.Pixel_r_build("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-8,-16);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).wait(60));

	// Pixel_r_build
	this.instance_13 = new lib.Pixel_r_build("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(24,16);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).wait(61));

	// Pixel_r_build
	this.instance_14 = new lib.Pixel_r_build("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(7,-16);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).wait(61));

	// Pixel_r_build
	this.instance_15 = new lib.Pixel_r_build("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(16,16);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).wait(62));

	// Pixel_r_build
	this.instance_16 = new lib.Pixel_r_build("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-8,-8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(7).to({_off:false},0).wait(63));

	// Pixel_r_build
	this.instance_17 = new lib.Pixel_r_build("synched",0,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,16);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(7).to({_off:false},0).wait(63));

	// Pixel_r_build
	this.instance_18 = new lib.Pixel_r_build("synched",0,false);
	this.instance_18.parent = this;
	this.instance_18.setTransform(24,32);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(6).to({_off:false},0).wait(64));

	// Pixel_r_build
	this.instance_19 = new lib.Pixel_r_build("synched",0,false);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-16,0);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({_off:false},0).wait(66));

	// Pixel_r_build
	this.instance_20 = new lib.Pixel_r_build("synched",0,false);
	this.instance_20.parent = this;
	this.instance_20.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-217,58,254);


// stage content:
(lib.kyoai_v001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.tA_fadein_a("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(632,126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1243,29,-582,134);
// library properties:
lib.properties = {
	id: '7E1B7DB90ED67443930E8AF993E494A0',
	width: 1280,
	height: 240,
	fps: 8,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7E1B7DB90ED67443930E8AF993E494A0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;