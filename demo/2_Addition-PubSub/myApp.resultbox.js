myApp.resultbox = {

	start: function(){
		var self = this;
		$(this.$).append('\
			<div id="resultbox" class="resultbox">\
			</div>\
		');
		
		this.sb.subscribe('toResultBox', 
			function(config){
			//
			var result = parseInt(config.val1) + parseInt(config.val2);
			$(self.$).find("#resultbox").html(result);
			}
		);
	},
	end: function(){
	
	}
}
