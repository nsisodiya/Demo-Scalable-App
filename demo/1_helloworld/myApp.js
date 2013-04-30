var myApp = {};

myApp.application = {
	template: '<div>\
				<h1>This is Hello World Example</h1>\
			</div>',
	start:  function(){
		console.log("module loaded");
	},
	end:  function(){
		console.log("module un-loaded");
	}
}
