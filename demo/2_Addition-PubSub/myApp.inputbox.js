

myApp.inputbox = {

	start: function(){
		var self = this;
		$(this.$).append('\
			<div class="inputbox">\
				<input id="value1" type="text" />\
				<input id="value2" type="text" />\
				<input id="add" type="button" value="Add">\
			</div>\
		');
		$(this.$).find("#add").click(function(){
			//Send the signal to Result box
			self.sb.publish('toResultBox', {
				val1 : $(self.$).find("#value1").val(),
				val2 : $(self.$).find("#value2").val()
			});
		});
		
	},
	end: function(){
	
	}
}
