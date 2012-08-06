//##############################################################################
//		Application Level Module
//
//##############################################################################

elpaJsRepo.blogReaderApp = function(sandbox){
	var $_ = commonLbConstructor;

	$_.prototype = {
		start: function(){
			this.initHTML();
			this.loadModules();
		
		},
		end: function(){
	
		},
		initHTML: function(){
			this.$.append('\
				<div class="header" id="'+ this.id +'_header"></div>\
				<div class="navigator" id="'+ this.id +'_navigator"></div>\
				<div class="blogDisplayPanel" id="'+ this.id +'_blogDisplayContainer"></div>\
				<div class="footer" id="'+ this.id +'_footer"></div>\
				');
		},
		loadModules: function(){
			this.blogDisplayModule = new lb.core.Module(this.id + "_blogDisplayContainer", elpaJsRepo.blogReaderApp.blogDisplayPanel);
			
			this.headerModule = new lb.core.Module(this.id + "_header", elpaJsRepo.blogReaderApp.header);
			
			this.navigatorModule = new lb.core.Module(this.id + "_navigator", elpaJsRepo.blogReaderApp.navigator);
			
			this.footerModule = new lb.core.Module(this.id + "_footer", elpaJsRepo.blogReaderApp.footer);

			
			lb.core.application.addModule(this.blogDisplayModule);
			lb.core.application.addModule(this.headerModule);
			lb.core.application.addModule(this.navigatorModule);
			lb.core.application.addModule(this.footerModule);
			
			lb.core.application.startAll();
			
			
			
		}
	};
	return new $_(sandbox);
}
