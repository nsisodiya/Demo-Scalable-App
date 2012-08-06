
elpaJsRepo.blogReaderApp.footer = function(sandbox){

	var $_ = commonLbConstructor ;

	$_.prototype = {
		start: function(){
			this.initHTML();
		
		},
		end: function(){
	
		},
		initHTML: function(){
			this.$.append("<p>THIS IS FOOTER PANEL</p>");
		}
	};
	return new $_(sandbox);
};


