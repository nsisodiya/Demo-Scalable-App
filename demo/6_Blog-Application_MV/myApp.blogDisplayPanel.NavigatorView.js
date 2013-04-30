myApp.blogDisplayPanel.NavigatorView = {
	template4: '<ul>\
			<%_.each(data, function(link, i){%>\
				<li><span class="spanLink links" data-blogid="<%= i %>"><%= link.title %><span></li>\
			<%});%>\
		</ul>',
	start: function(){
		var self = this;
		this.model = this.config;
		
		this.blogEle = $('<div class="box">\
			<h3>Nav View</h3>\
			<div id="navbox"><div>\
		</div>');
		
		this.navbox = this.blogEle.find("#navbox");
		
		
		this.model.on("AllBlogsDataReceived", function(data){
			self.parseResponse(data);
			$(self.$).append(self.blogEle);
		});
		
	},
	parseResponse: function(data){
		var self = this;
	
		this.navbox.append(_.template(this.template4,{data:data}));
		
		this.navbox.find(".links").click(function(){
			self.model.setBlogId($(this).data("blogid"));
		});
		
		
	},
	end: function(){
		
	}
};