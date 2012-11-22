var myApp = {};

myApp.application = {
	start:  function(){
		$(this.$).append('\
			<div>\
				<div id="inputbox"/>\
				<div id="resultbox"/>\
			</div>\
		');
		
		this.inputbox = this.sb.createChildModule('inputbox',myApp.inputbox);
		this.resultbox = this.sb.createChildModule('resultbox',myApp.resultbox);
		
		this.inputbox.start();
		this.resultbox.start();
		
	},
	end:  function(){
	
	}
}
