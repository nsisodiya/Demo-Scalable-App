myApp.blogDisplayPanel = {

	start: function(){
		this.initHTML();
	},
	end: function(){
		alert("Display Panel is ended. end() function of module is running");
	},

	initHTML: function(){
		var self = this;
		
		this.blogEle = $('<div></div>');
		
		var subscribeUnsubButton = $('<input type="button" id="UnSubscribe" value="UnSubscribe - Disconnect from Signals"/></div');
		
		subscribeUnsubButton.toggle(function(){
			self.sb.unsubscribe("onBlogLinkSelected");
			this.value = "Subscribe - Get Signals";
		},function(){
			self.subscribeEvents();
			this.value = "UnSubscribe - Disconnect from Signals";
		});
		
		$(this.$).append($('<div id="buttonPanel"></div>').append( subscribeUnsubButton, this.blogEle));
		
		
//		$(this.$).append("<div id='fake'></div>");
//		this.sb.startModule({
//			id: "fake",
//			module: myApp.navigator
//		});
		
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
