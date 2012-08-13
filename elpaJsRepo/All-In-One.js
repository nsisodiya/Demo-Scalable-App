
function commonLbConstructor(sandbox){
		this.sandbox = sandbox;
		this.$ =  $(this.sandbox.getBox());		//Container of mudule
		this.id = this.sandbox.getId();			//Id of Container - This may be require to create Unique Ids
	
}
//##############################################################################
//		Application Level Module
//
//##############################################################################
var elpaJsRepo = elpaJsRepo || {};

elpaJsRepo.blogReaderApp = {
	application: function(sandbox){
		var $_ = commonLbConstructor;

		$_.prototype = {
			start: function(){
				this.initHTML();
				this.loadModules();
		
			},
			end: function(){},

			initHTML: function(){
				this.$.append('\
					<div class="header" id="'+ this.id +'_header"></div>\
					<div class="navigator" id="'+ this.id +'_navigator"></div>\
					<div class="blogDisplayPanel" id="'+ this.id +'_blogDisplayContainer"></div>\
					<div class="footer" id="'+ this.id +'_footer"></div>\
					');
			},
			loadModules: function(){
				this.blogDisplayModule = new lb.core.Module(this.id + "_blogDisplayContainer", elpaJsRepo.blogReaderApp.blogDisplayPanel);
			
				this.headerModule = new lb.core.Module(this.id + "_header", elpaJsRepo.blogReaderApp.header);
			
				this.navigatorModule = new lb.core.Module(this.id + "_navigator", elpaJsRepo.blogReaderApp.navigator);
			
				this.footerModule = new lb.core.Module(this.id + "_footer", elpaJsRepo.blogReaderApp.footer);

			
				lb.core.application.addModule(this.blogDisplayModule);
				lb.core.application.addModule(this.headerModule);
				lb.core.application.addModule(this.navigatorModule);
				lb.core.application.addModule(this.footerModule);
			
				lb.core.application.startAll();
			
			
			
			}
		};
		return new $_(sandbox);
	},
	header: function(sandbox){

		var $_ = commonLbConstructor ;

		$_.prototype = {
			start: function(){
				this.initHTML();
		
			},
			end: function(){},

			initHTML: function(){
				this.$.append("<p>THIS IS HEADER PANEL</p>");
			}
		};
		return new $_(sandbox);
	},
	footer: function(sandbox){

		var $_ = commonLbConstructor ;

		$_.prototype = {
			start: function(){
				this.initHTML();
		
			},
			end: function(){},

			initHTML: function(){
				this.$.append("<p>THIS IS FOOTER PANEL</p>");
			}
		};
		return new $_(sandbox);
	},
	navigator: function(sandbox){

		var $_ = commonLbConstructor ;

		$_.prototype = {
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
					self.sandbox.events.publish({event: 'onBlogLinkSelected', value: $(this).data("blogid") });
				});
			}
		
		};
		return new $_(sandbox);
	},
	blogDisplayPanel: function(sandbox){

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
		return new $_(sandbox);
	}

};
