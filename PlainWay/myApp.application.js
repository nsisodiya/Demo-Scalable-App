myApp.application =  {
	template: '<div class="header" id="<%= id %>_header"></div>\
		<div class="navigator" id="<%= id %>_navigator"></div>\
		<div class="blogDisplayPanel" id="<%= id %>_blogDisplayContainer"></div>\
		<div class="footer" id="<%= id %>_footer"></div>',
	start: function(){
		this.initHTML();
		this.loadModules();
	},
	end: function(){
		delete this.blogDisplayModule;
		delete this.headerModule;
		delete this.navigatorModule;
		delete this.footerModule;
	},

	initHTML: function(){
		$(this.$).append(_.template(this.template, { id: this.id }));
	},
	loadModules: function(){
		this.blogDisplayModule = this.sb.createChildModule(this.id + "_blogDisplayContainer", myApp.blogDisplayPanel);
	
		this.headerModule = this.sb.createChildModule(this.id + "_header", myApp.header);
	
		this.navigatorModule = this.sb.createChildModule(this.id + "_navigator", myApp.navigator);
	
		this.footerModule = this.sb.createChildModule(this.id + "_footer", myApp.footer);

	
		this.blogDisplayModule.start();
		this.headerModule.start();
		this.navigatorModule.start();
		this.footerModule.start();
	}
};
