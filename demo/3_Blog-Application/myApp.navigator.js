myApp.navigator = {
	start: function(){
		var self = this;
		$.ajax({
			url:"../../server/blogs",
			dataType: "json"
		})
		.done(function(data){
			self.parseResponse(data);
		});

	},
	parseResponse: function(data){
		var self = this;
		var html = $('<ul>');
		$.each(data, function(i,link){
			var li = $('<li><span class="spanLink">'+ link.title +'<span></li>');
			li.click(function(){
				self.sb.publish("onBlogLinkSelected", i );
			});
			html.append(li);	
		});
		$(this.$).append(html);					
	}
};