var myApp = myApp || {};

myApp.application = {
	start: function(){
		$(this.$).append('<div>\
				<div id="inputbox"/>\
				<div id="resultbox"/>\
			</div>\
		');
		
		(new this.sb.createChildModule('inputbox',myApp.inputbox)).start();
		(new this.sb.createChildModule('resultbox',myApp.resultbox)).start();
	},
	end: function(){
	
	}
};
