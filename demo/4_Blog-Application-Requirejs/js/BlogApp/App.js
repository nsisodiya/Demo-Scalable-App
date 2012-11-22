define(["./blogDisplayPanel/blogDisplayPanel","./navigator/navigator","./footer/footer","./header/header"],function(blogDisplayPanel, navigator, footer, header){
     
	return {
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
			this.blogDisplayModule = this.sb.createChildModule(this.id + "_blogDisplayContainer", blogDisplayPanel);
	
			this.headerModule = this.sb.createChildModule(this.id + "_header", header);
	
			this.navigatorModule = this.sb.createChildModule(this.id + "_navigator", navigator);
	
			this.footerModule = this.sb.createChildModule(this.id + "_footer", footer);

	
			this.blogDisplayModule.start();
			this.headerModule.start();
			this.navigatorModule.start();
			this.footerModule.start();
		}
	};
 
});
