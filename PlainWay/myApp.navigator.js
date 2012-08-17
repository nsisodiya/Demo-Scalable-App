myApp.navigator = function(id){
	this.$ =  $("#" + id);		//Container of mudule
	this.id = id;			//Id of Container - This may be require to create Unique Ids
};
myApp.navigator.prototype = {
	start: function(){
		this.initHTML();

	},
	end: function(){},

	initHTML: function(){
	
		this.callServer();
	},
	callServer: function(){
		var self = this;
		$.get("./server/links", function(data){
			self.parseResponse(data);
		
		},"json");

	},
	parseResponse: function(data){
		var self = this;
	
		var htmlstr = [];
		htmlstr.push('<ul>');
		$.each(data, function(i,link){
			htmlstr.push('<li><span class="spanLink '+ self.id +'_links" data-blogid="'+  link.id +'">'+ link.title +'<span></li>');	
		});
		htmlstr.push('</ul>');
		this.$.append(htmlstr.join(''));					
		this.attachClickHandlers();
	},

	attachClickHandlers: function(){
		var self = this;
		this.$.find("." + self.id + "_links").click(function(){
			//Transmit this Id to Other Module
			amplify.publish("onBlogLinkSelected", $(this).data("blogid"));
		});
	}

};

