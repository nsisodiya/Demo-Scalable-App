

myApp.inputbox = {

	start: function(){
		var self = this;
		
		//DOM ELEMENT CREATIONS
		var inputbox1 = $('<input id="value1" type="text" />');
		var inputbox2 = $('<input id="value2" type="text" />');
		var addbutton = $('<input id="add" type="button" value="Add">');
		
		
		//EVENT ATTACHMENT
		addbutton.click(function(){
			self.sb.publish('toResultBox', {
				val1 : inputbox1.val(),
				val2 : inputbox2.val(),
			});
		});
		
		//DOM CREATION
		$(this.$).append($('\
			<div class="inputbox">\
				<p><b>Module 1</b></p>\
				<p>please enter numeric value</p>\
			</div>\
		').append(inputbox1,inputbox2,addbutton));

	},
	end: function(){
	
	}
}
