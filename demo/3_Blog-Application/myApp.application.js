myApp.application =  {
	
	html: '<div class="header"><input type="button" id="navKillButton" value="End Navigator Module"/><input type="button" id="panelKillButton" value="End Display Panel Module"/></div>\
		<div class="header" id="<%= header.id %>"></div>\
		<div class="navigator" id="<%= navigator.id %>"></div>\
		<div class="blogDisplayPanel" id="<%= blogDisplayContainer.id %>"></div>\
		<div class="footer" id="<%= footer.id %>"></div>',
	start : function() {
		this.moduleMap = {
			blogDisplayContainer : {
				id : "blogDisplayContainer",
				module : myApp.blogDisplayPanel
			},
			header : {
				id : "header",
				module : myApp.header
			},
			navigator : {
				id : "navigator",
				module : myApp.navigator
			},
			footer : {
				id : "footer",
				module : myApp.footer
			}
		};

		this.initHTML();
		this.startAllModules();
		this.attachEventHandlers();
	},
	end: function(){

	},
	attachEventHandlers : function() {
		var self = this;
		$(this.$).find("#navKillButton").toggle(function() {
			self.endModule("navigator");
			this.value = "Start Navigator Module";
		}, function() {
			self.startModule("navigator");
			this.value = "End Navigator Module";
		});
		
		$(this.$).find("#panelKillButton").toggle(function() {
			self.endModule("blogDisplayContainer");
			this.value = "Start Display Panel Module";
		}, function() {
			self.startModule("blogDisplayContainer");
			this.value = "End Display Panel Module";
		});
	},
	initHTML : function() {
		$(this.$).append(_.template(this.html,this.moduleMap));
	},
	startModule: function(id){
		this.sb.startModule({
			id:this.moduleMap[id].id, 
			module: this.moduleMap[id].module
		});
	},
	endModule: function(id){
		this.sb.endModule(this.moduleMap[id].id);
	},
	startAllModules: function(){
		var self = this;
		$.each(this.moduleMap,function(i,v){
			self.sb.startModule(v);
		});
	}
};