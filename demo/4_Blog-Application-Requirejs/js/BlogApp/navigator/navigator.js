define(function(){
	return {
		start: function(){
			this.initHTML();

		},
		end: function(){},

		initHTML: function(){
	
			this.callServer();
		},
		callServer: function(){
			var self = this;
			$.ajax({
				url:"../../server/links",
				dataType: "json"
			})
			.done(function(data){
				self.parseResponse(data);
			});

		},
		parseResponse: function(data){
			var self = this;
	
			var htmlstr = [];
			htmlstr.push('<ul>');
			$.each(data, function(i,link){
				htmlstr.push('<li><span class="spanLink '+ self.id +'_links" data-blogid="'+  link.id +'">'+ link.title +'<span></li>');	
			});
			htmlstr.push('</ul>');
			$(this.$).append(htmlstr.join(''));					
			this.attachClickHandlers();
		},

		attachClickHandlers: function(){
			var self = this;
			$(this.$).find("." + self.id + "_links").click(function(){
				//Transmit this Id to Other Module
				self.sb.publish("onBlogLinkSelected", $(this).data("blogid"));
			});
		}

	};
});
