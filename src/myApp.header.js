myApp.header = {
	start: function(){
		this.initHTML();

	},
	end: function(){},

	initHTML: function(){
		$(this.$).append("<p>THIS IS HEADER PANEL</p>");
	}
};
