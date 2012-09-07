var Sandbox = function(id){
	this.id = id;
	this.topicList = {};
	this.moduleList = [];
}

Sandbox.prototype = {
	getId : function(){
		return this.id;
	},
	subscribe : function(topic, callback){
		this.topicList[topic] = amplify.subscribe(topic, callback);
		return this.topicList[topic];
	},
	unsubscribe : function(topic){
		amplify.unsubscribe(topic, this.topicList[topic]);
	},
	publish: function(topic, val){
		amplify.publish(topic, val);
	},
	unsubscribeAll: function(){
		for(var topic in this.topicList){
			amplify.unsubscribe(topic, this.topicList[topic]);
			console.log('cleared topic -> ' + topic);
		}
	},
	eraseUI: function(){
		document.getElementById(this.id).innerHTML = '';
	},
	createChildModule: function(id, creator, config){
		this.moduleList.push(new Module(id, creator, config));
		return this.moduleList[this.moduleList.length - 1];
	},
	endChildModules: function(){
		var l = this.moduleList.length;
		for (var i = 0 ; i < l ; i++){
			this.moduleList[i].end();
		}
		this.moduleList.length = 0;
	}
}



var Module = function(id, creator, config){
	this.sandbox = new Sandbox(id)
	this.module = new creator( this.sandbox, config);
	
};

Module.prototype = {

	start: function(){
		this.module.start();
	},
	
	end: function(){
		this.sandbox.endChildModules();
		this.module.end();
		this.sandbox.eraseUI();
		this.sandbox.unsubscribeAll();
		console.log('ended -> ', this.sandbox.getId());
	}
}
