var myApp = {};

myApp.application = {
	template: '<div class="box" id="inputbox"></div>' +
			'<div class="box" id="resultbox"></div>',
	start:  function(){
		
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
