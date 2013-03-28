myApp.blogDisplayPanel = {

	start: function(){
		this.initHTML();

	},
	end: function(){
	},

	initHTML: function(){
		$(this.$).append('<div id="buttonPanel"><input type="button" id="UnSubscribe" value="UnSubscribe - Disconnect from Signals"/></div><div id="blog"></div>');
		this.subscribeEvents();
		this.addHandlers();
		this.callServer();
	},
	addHandlers: function(){
		var self = this;
		$(this.$).find("#UnSubscribe").toggle(function(){
			self.sb.unsubscribe("onBlogLinkSelected");
			this.value = "Subscribe - Get Signals";
		},function(){
			self.subscribeEvents();
			this.value = "UnSubscribe - Disconnect from Signals";
		});
	},
	subscribeEvents: function(){
		var self = this;
		this.sb.subscribe( 'onBlogLinkSelected',
			function(value){
				//console.log('Event Received');
				self.loadBlog(value);
			});
	},

	loadBlog: function(id){
		if(this.allBlogs == undefined){
			alert("Data Not Loaded From Server");
		}else{
			$(this.$).find("#blog").html('<p>' + this.allBlogs[id].text + '</p>');
		}
	
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

	},
};
