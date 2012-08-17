myApp.blogDisplayPanel = function(id){
	this.$ =  $("#" + id);		//Container of mudule
	this.id = id;			//Id of Container - This may be require to create Unique Ids
};
myApp.blogDisplayPanel.prototype = {
	start: function(){
		this.initHTML();

	},
	end: function(){
		this.sandbox.events.unsubscribe({event: 'onBlogLinkSelected'});
	},

	initHTML: function(){
		this.$.append("<p>THIS IS BLOG PANEL</p>");
		this.subscribeEvents();
		this.callServer();
	},
	subscribeEvents: function(){
		var self = this;
		amplify.subscribe(
			'onBlogLinkSelected',
			function(value){
				self.loadBlog(value);
			});
	},

	loadBlog: function(id){
		if(this.allBlogs == undefined){
			alert("Data Not Loaded From Server");
		}else{
			this.$.html('<p>' + this.allBlogs[id].text + '</p>');
		}
	
	},

	callServer: function(){
		var self = this;
		$.get("./server/blogs", function(data){
			self.allBlogs = data;
		},"json");

	},
};
