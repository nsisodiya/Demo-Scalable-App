myApp.blogDisplayPanel.TagsView = {

	start: function(){
		var self = this;
		this.model = this.config;
		
		this.blogEle = $('<div class="box">\
			<h3>Tags View</h3>\
			<div id="textbox"><div>\
		</div>');
		
		this.textbox = this.blogEle.find("#textbox");
		
		$(this.$).append(this.blogEle);
		
		this.model.on("change:tags", function(model,data){
			self.textbox.html('<p>' + data + '</p>');
		});
		
	},
	end: function(){
		
	}
};

