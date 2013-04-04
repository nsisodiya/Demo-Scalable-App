myApp.application =  {
	
	template: '<div class="header"><input type="button" id="navKillButton" value="End Navigator Module"/><input type="button" id="panelKillButton" value="End Display Panel Module"/></div>\
		<div class="header" id="<%= id_header %>"></div>\
		<div class="navigator" id="<%= id_navigator %>"></div>\
		<div class="blogDisplayPanel" id="<%= id_blogDisplayContainer %>"></div>\
		<div class="footer" id="<%= id_footer %>"></div>',
	start : function() {
		this.moduleMap = {
			blogDisplayContainer : {
				id : "blogDisplayContainer",
				module : myApp.blogDisplayPanelView
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
		$(this.$).append(_.template(this.template, {
			id_header : this.moduleMap.header.id,
			id_navigator : this.moduleMap.navigator.id,
			id_blogDisplayContainer : this.moduleMap.blogDisplayContainer.id,
			id_footer : this.moduleMap.footer.id,
		}));
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
			try{
				self.sb.startModule(v);
			}catch(ex){
				choona.util.log(ex);
			}
		});
	}
};