var myApp = {};

myApp.application = {
	start:  function(){
		$(this.$).append('\
			<div>\
				<div id="inputbox"/>\
				<div id="resultbox"/>\
			</div>\
		');
		
		this.inputbox = this.sb.startModule('inputbox',myApp.inputbox);
		this.resultbox = this.sb.startModule('resultbox',myApp.resultbox);
		
	},
	end:  function(){
	
	}
}
