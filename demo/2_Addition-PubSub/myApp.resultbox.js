myApp.resultbox = {

	start: function(){
		var self = this;
		$(this.$).append('\
			<p><b>Module 2</b></p>\
			<p>This module will receive two values using PubSub</p>\
			<div id="result">\
			</div>\
		');
		
		this.sb.subscribe('toResultBox', 
			function(config){
			//
			var result = parseInt(config.val1) + parseInt(config.val2);
			$(self.$).find("#result").html(result);
			}
		);
	},
	end: function(){
	
	}
}
