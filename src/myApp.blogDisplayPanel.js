myApp.blogDisplayPanel = {

	start: function(){
		this.initHTML();

	},
	end: function(){
	},

	initHTML: function(){
		$(this.$).append("<p>THIS IS BLOG PANEL</p>");
		this.subscribeEvents();
		this.callServer();
	},
	subscribeEvents: function(){
		var self = this;
		this.sb.subscribe( 'onBlogLinkSelected',
			function(value){
				console.log('Event Received');
				self.loadBlog(value);
			});
	},

	loadBlog: function(id){
		if(this.allBlogs == undefined){
			alert("Data Not Loaded From Server");
		}else{
			$(this.$).html('<p>' + this.allBlogs[id].text + '</p>');
		}
	
	},

	callServer: function(){
		var self = this;
		
		$.ajax({
			url:"../server/blogs",
			dataType: "json"
		})
		.done(function(data){
			self.allBlogs = data;
		});

	},
};
