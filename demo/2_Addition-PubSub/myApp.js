var myApp = {};

myApp.application = {
	start:  function(){
		$(this.$).append('\
			<div>\
				<div id="inputbox"/>\
				<div id="resultbox"/>\
			</div>\
		');
		
		this.inputbox = this.sb.loadModule('inputbox',myApp.inputbox);
		this.resultbox = this.sb.loadModule('resultbox',myApp.resultbox);
		
		this.inputbox.start();
		this.resultbox.start();
		
	},
	end:  function(){
	
	}
}
