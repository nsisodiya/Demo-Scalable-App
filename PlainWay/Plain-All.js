//##############################################################################
//		Application Level Module
//
//##############################################################################


var myApp = myApp || {};


myApp.application =  {
	template: '<div class="header" id="<%= id %>_header"></div>\
		<div class="navigator" id="<%= id %>_navigator"></div>\
		<div class="blogDisplayPanel" id="<%= id %>_blogDisplayContainer"></div>\
		<div class="footer" id="<%= id %>_footer"></div>',
	start: function(){
		this.initHTML();
		this.loadModules();
	},
	end: function(){
		delete this.blogDisplayModule;
		delete this.headerModule;
		delete this.navigatorModule;
		delete this.footerModule;
	},

	initHTML: function(){
		$(this.$).append(_.template(this.template, { id: this.id }));
	},
	loadModules: function(){
		this.blogDisplayModule = this.sb.createChildModule(this.id + "_blogDisplayContainer", myApp.blogDisplayPanel);
	
		this.headerModule = this.sb.createChildModule(this.id + "_header", myApp.header);
	
		this.navigatorModule = this.sb.createChildModule(this.id + "_navigator", myApp.navigator);
	
		this.footerModule = this.sb.createChildModule(this.id + "_footer", myApp.footer);

	
		this.blogDisplayModule.start();
		this.headerModule.start();
		this.navigatorModule.start();
		this.footerModule.start();
	}
};

myApp.header = {
	start: function(){
		this.initHTML();

	},
	end: function(){},

	initHTML: function(){
		$(this.$).append("<p>THIS IS HEADER PANEL</p>");
	}
};

myApp.footer = {
	start: function(){
		this.initHTML();

	},
	end: function(){},

	initHTML: function(){
		$(this.$).append("<p>THIS IS FOOTER PANEL</p>");
	}
};


myApp.navigator = {
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
			url:"../server/links",
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
