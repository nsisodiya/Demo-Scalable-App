define(["./blogDisplayPanel/blogDisplayPanel","./navigator/navigator","./footer/footer","./header/header"],
function(blogDisplayPanel, navigator, footer, header){
	return {
		start: function(){
			this.initHTML();
			this.startModules();
		},

		initHTML: function(){
			$(this.$).append(
				'<div class="header" id="header"></div>\
				<div class="navigator" id="navigator"></div>\
				<div class="blogDisplayPanel" id="blogDisplayContainer"></div>\
				<div class="footer" id="footer"></div>\
			');
		},
		startModules: function(){
			this.sb.startModule({
				id:"blogDisplayContainer",
				module:blogDisplayPanel
			});

			this.sb.startModule({
				id: "header", 
				module: header
			});
			
			this.sb.startModule({
				id:"navigator",
				module: navigator
			});

			this.sb.startModule({
				id:"footer",
				module:footer
			});
		}
	};
 
});
