

var elpaJsRepo = elpaJsRepo || {};

function commonLbConstructor(sandbox){
		this.sandbox = sandbox;
		this.$ =  $(this.sandbox.getBox());		//Container of mudule
		this.id = this.sandbox.getId();			//Id of Container - This may be require to create Unique Ids
	
}
