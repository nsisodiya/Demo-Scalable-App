myApp.footer = {
	start: function(){
		this.initHTML();

	},
	end: function(){},

	initHTML: function(){
		$(this.$).append("<p>THIS IS FOOTER PANEL</p>");
	}
};
