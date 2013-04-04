var Pipe = function(data){
	this.Eventobj = _.extend({}, Backbone.Events);
	this.data = data;
	this.start();
};

Pipe.prototype = {
	start: function(){
		var self = this;
		this.data.pipeIn.ModObj.module.sb.eventBus.on(this.data.pipeIn.source, function(data){
			
			if(typeof self.data.formatter === "function"){
				data = self.data.formatter(data);
			}
			self.data.pipeOut.ModObj.module.sb.eventBus.trigger(self.data.pipeOut.source, data);	
			
				
		});
	}
};