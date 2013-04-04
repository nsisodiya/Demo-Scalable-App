var myApp = {};

myApp.application = {
	start:  function(){
		$(this.$).append('\
			<div>\
				<div class="box" id="inputbox"/>\
				<div class="box" id="resultbox"/>\
			</div>\
		');
		
		this.sb.startModule({
			id:'inputbox',
			module: myApp.inputbox
		});
		
		this.sb.startModule({
			id:'resultbox',
			module: myApp.resultbox
		});
		
	},
	end:  function(){
	
	}
};
