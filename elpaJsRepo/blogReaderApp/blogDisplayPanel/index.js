
elpaJsRepo.blogReaderApp.blogDisplayPanel = function(sandbox){

	var $_ = commonLbConstructor ;

	$_.prototype = {
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
			this.sandbox.events.subscribe({event: 'onBlogLinkSelected'}, function(args){
				self.loadBlog(args.value);
			});
		},
		
		loadBlog: function(id){
			if(this.allBlogs == undefined){
				alert("Data Not Loaded From Server");
			}else{
				this.$.html(this.allBlogs[id].text);
			}
			
		},
		
		callServer: function(){
			var self = this;
			$.get("./server/blogs", function(data){
				self.allBlogs = data;
			},"json");
		
		},
	};
	return new $_(sandbox);
};


