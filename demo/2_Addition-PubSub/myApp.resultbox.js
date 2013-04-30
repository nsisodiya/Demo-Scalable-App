myApp.resultbox = {
	template: '<p><b>Module 2</b></p>\
			<p>This module will receive two values using PubSub</p>\
			<div id="result"></div>\
		',
	start: function(){
		var self = this;
		this.sb.subscribe('toResultBox', function(data){
				self.add(data);
		});
	},
	add: function(data){
		var result = parseFloat(data.val1) + parseFloat(data.val2);
		$(this.$).find("#result").html(result);
	}
};
