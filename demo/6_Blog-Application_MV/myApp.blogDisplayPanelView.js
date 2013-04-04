myApp.blogDisplayPanelView = {

	start: function(){
		var self = this;
		
		this.Panel = new myApp.blogDisplayPanelModel();
		this.Panel.loadDataFromServer();

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
		
		this.Panel.on("PanelDataChanged", function(data){
			self.blogEle.html('<p>' + data.text + '</p>');
		});
		
		this.subscribeEvents();
		
	},
	subscribeEvents: function(){
		var self = this;
		this.sb.subscribe( 'onBlogLinkSelected', function(id){
			self.Panel.setBlogId(id);
			choona.util.log('Event Received - onBlogLinkSelected => ' + id);
		});
	},
	end: function(){
		alert("Display Panel is ended. end() function of module is running");
	}
};

