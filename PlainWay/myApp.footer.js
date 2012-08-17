myApp.footer = function(id){
	this.$ =  $("#" + id);		//Container of mudule
	this.id = id;			//Id of Container - This may be require to create Unique Ids
};
myApp.footer.prototype = {
	start: function(){
		this.initHTML();

	},
	end: function(){},

	initHTML: function(){
		this.$.append("<p>THIS IS FOOTER PANEL</p>");
	}
};

