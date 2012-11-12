MooQRCode = new Class({
	Implements: [Options, Events],
	options: {
		'value' : null,
		'typeNumber' : -1,
		'correctLevel' : QRErrorCorrectLevel.H,		
		'width' : 256,
		'height' : 256,
		'render' : 'canvas',
		'color' : '#000000',
		'backgroundColor':'#FFFFFF',
		'container' : null
	},
	
	RENDER_CAVAS : 'canvas',
	RENDER_TABLE : 'table'
	
	qrCode : null,
	canvas : null,
	canvasContext : null,
	table : null,

	/**
	 * Constructor
	 */
	initialize: function(oOptions){
		this.setOptions(oOptions);
		
		this.buildQrCode();
		switch(this.options.render){
			case this.RENDER_CAVAS: 
				this.buildCanvas();
				break;
			case this.RENDER_TABLE: 
				this.buildTable();
				break;
		}
	},
	
	buildQrCode : function(){
		// create the qrcode itself
		this.qrCode	= new QRCode(this.options.typeNumber, this.options.correctLevel);
		this.qrCode.addData(this.options.value);
		this.qrCode.make();
		return this.fireEvent('qrCodeReady');
	}.protect(),
	
	buildCanvas : function(){		
		//Create canvas element
		this.canvas	= new Element('canvas',{
			'width':this.options.width,
			'height':this.options.height
		}).inject(this.options.container);
		
		this.canvasContext = this.canvas.getContext('2d');

		//Compute tileW/tileH based on options.width/options.height
		var tileW = this.options.width  / this.qrCode.getModuleCount();
		var tileH = this.options.height / this.qrCode.getModuleCount();

		//Draw in the canvas
		for(var iRow = 0; iRow < this.qrCode.getModuleCount(); iRow++ ){
			for(var iCol = 0; iCol < this.qrCode.getModuleCount(); iCol++ ){
				this.canvasContext.fillStyle = this.qrCode.isDark(iRow, iCol) ? this.options.color : this.options.backgroundColor;
				this.canvasContext.fillRect(iCol*tileW, iRow*tileH, tileW, tileH);  
			}	
		}
		return this;
	}.protect(),

	buildTable	: function(){
		var iBorderWidth = ((this.options.width + this.options.height) / 20).toInt(); // 10% of the average(width, height)
		
		this.table = new Element('table',{
			'styles':{
				'width':this.options.width+'px',
				'height':this.options.height+'px',
				'border':0,
				'border-collapse': 'collapse',
				'background-color': this.options.backgroundColor
			}
		}).inject(this.options.container);
	  
		// compute tileS percentage
		var tileW = 100 / this.qrCode.getModuleCount();
		var tileH = 100 / this.qrCode.getModuleCount();

		// draw in the table
		for(var iRow = 0; iRow < this.qrCode.getModuleCount();iRow++){
			var eRowElement = new Element('tr',{'styles':{'height':tileH+'%'}}).inject(this.table);
			for(var iCol = 0; iCol < this.qrCode.getModuleCount();iCol++){
				eRowElement.adopt(new Element('td',{
					'styles':{
						'width':tileW+'%',
						'background-color':this.qrCode.isDark(iRow, iCol)?this.options.color:this.options.backgroundColor
					}
				}));
			}	
		}
		return this;
	}.protect()
});

Element.Properties.qrCode = {
	set: function(oOptions){
		var oQrCode = this.retrieve('qrCode');
		if (oQrCode)oQrCode.destroy();
		if(oOptions.container == null)oOptions.container = this;
		return this.eliminate('qrCode').store('qrCode:options', oOptions);
	},

	get: function(){
		var oQrCode = this.retrieve('qrCode');
		if(!oQrCode){
			var oOptions = this.retrieve('qrCode:options');
			if(oOptions.container == null)oOptions.container = this;
			oQrCode = new MooQRCode(oOptions);
			this.store('qrCode', oQrCode);
		}
		return oQrCode;
	}

};

Element.implement({
	qrCode: function(oOptions){
		if(oOptions){
			if(oOptions.container == null)oOptions.container = this;
			this.set('qrCode',oOptions);
		}
		this.get('qrCode');
		return this;
	}
});