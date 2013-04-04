define(function(){
	return {

		start: function(){
			this.initHTML();

		},
		end: function(){
		},

		initHTML: function(){
			var self = this;
		
			this.blogEle = $('<div></div>');
		
			$(this.$).append($('<div id="buttonPanel"></div>').append(this.blogEle));
		
			this.subscribeEvents();
			this.callServer();
		},
		subscribeEvents: function(){
			var self = this;
			this.sb.subscribe( 'onBlogLinkSelected',
				function(id){
					choona.util.log('Event Received - onBlogLinkSelected => ' + id);
					if(self.allBlogs == undefined){
						alert("Data Not Loaded From Server");
					}else{
						self.blogEle.html('<p>' + self.allBlogs[id].text + '</p>');
					}
				});
		},

		callServer: function(){
			var self = this;
		
			$.ajax({
				url:"../../server/blogs",
				dataType: "json"
			})
			.done(function(data){
				self.allBlogs = data;
			});

		}
	};
});
