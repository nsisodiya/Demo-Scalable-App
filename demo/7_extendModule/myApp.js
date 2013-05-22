var myApp = {};

var baseClass  = (function(){
	var SecretVal = "34";//
	return {
		showAlert: function(){
			alert("The Secret Val is " + SecretVal);
		},
		addRedBorder: function(){
			$(this.$).css("border","3px solid red");
		}
	};
})();

var IntermidiateClass = choona.extendModule(baseClass,{
	addBlueBorder: function(){
		$(this.$).css("border","3px solid blue");
	}
});

myApp.application = choona.extendModule(IntermidiateClass,{
	template: '<div class="box">\
		<h1>Demo of Inheritance of Modules</h1>\
		<p>The Show function will be called from Base module, when you click it</p>\
		<button id="show">Show Alert</button>\
		<p>The Add Blue Border function will be called from Base module,  when you click it</p>\
		<button id="add">Add Blue Border</button>\
		</div>',
	start:  function(){
		
		this.addRedBorder();
		var self = this;
		$(this.$).find("#add").click(function(){
			self.addBlueBorder();
		});
		$(this.$).find("#show").click(function(){
			self.showAlert();
		});
	},
	end:  function(){
		console.log("module un-loaded");
	}
});
