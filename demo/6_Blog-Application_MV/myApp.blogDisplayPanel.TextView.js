myApp.blogDisplayPanel.TextView = {

	start: function(){
		var self = this;
		this.model = this.config;
		
		this.blogEle = $('<div class="box">\
			<h3>Text View</h3>\
			<div id="textbox"><div>\
		</div>');
		
		this.textbox = this.blogEle.find("#textbox");
		
		$(this.$).append(this.blogEle);
		
		this.model.on("change:text", function(model, data){
			self.textbox.html('<p>' + data + '</p>');
		});
		
	},
	end: function(){
		
	}
};

