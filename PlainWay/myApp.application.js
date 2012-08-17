
myApp.application = function(id){
	this.$ =  $("#" + id);		//Container of mudule
	this.id = id;			//Id of Container - This may be require to create Unique Ids
};

myApp.application.prototype = {
	start: function(){
		this.initHTML();
		this.loadModules();

	},
	end: function(){},

	initHTML: function(){
		this.$.append('\
			<div class="header" id="'+ this.id +'_header"></div>\
			<div class="navigator" id="'+ this.id +'_navigator"></div>\
			<div class="blogDisplayPanel" id="'+ this.id +'_blogDisplayContainer"></div>\
			<div class="footer" id="'+ this.id +'_footer"></div>\
			');
	},
	loadModules: function(){
		this.blogDisplayModule = loadModule(this.id + "_blogDisplayContainer", myApp.blogDisplayPanel);
	
		this.headerModule = loadModule(this.id + "_header", myApp.header);
	
		this.navigatorModule = loadModule(this.id + "_navigator", myApp.navigator);
	
		this.footerModule = loadModule(this.id + "_footer", myApp.footer);

	
		this.blogDisplayModule.start();
		this.headerModule.start();
		this.navigatorModule.start();
		this.footerModule.start();
	}
};
