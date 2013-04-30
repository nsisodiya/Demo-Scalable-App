myApp.blogDisplayPanel = {};

myApp.blogDisplayPanel.Manager = {

	template: '<h3>Manager Module which has model</h3>\
		<div id="text"></div>\
		<div id="tags"></div>\
		<div id="NavigatorView">\
	</div>',
	
	start: function(){
		var self = this;
		
		this.Panel = new myApp.blogDisplayPanel.Model();
		this.Panel.loadDataFromServer();
		
		this.sb.startModule({
			id:"text",
			module:myApp.blogDisplayPanel.TextView,
			config: this.Panel
		});

		this.sb.startModule({
			id: "tags", 
			module: myApp.blogDisplayPanel.TagsView,
			config: this.Panel
		});
		
		this.sb.startModule({
			id:"NavigatorView",
			module: myApp.blogDisplayPanel.NavigatorView,
			config: this.Panel
		});
	
	},
	end: function(){
		
	}
};

