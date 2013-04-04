myApp.blogDisplayPanelModel = Backbone.Model.extend({
	urlRoot:"/server/blogs",
    defaults: {
        currentId: null,
        text: undefined,
    },
    initialize: function(){
    	this.on("change:currentId", function(model, id){
    		var data = model.getDataForId(id);
    		//if(!(data === undefined)){
    			model.set({text:data.text});
    			model.trigger("PanelDataChanged", data);
    		//}
        });
    },
    loadDataFromServer: function(){
    	var self = this;
    	this.fetch({
    		success: function (model, data) {
    			self.allBlogs = data;
	        }
	    });
    	
	    /* Alternative Way - You can load your data using $.ajax
        // You need to specify urlRoot for this,
        
    	var self = this;
    	$.ajax({
			url:"/server/blogs",
			dataType: "json"
		})
		.done(function(data){
			self.allBlogs = data;
		}); 
    	 
	     * */
    	
    },
    setBlogId: function(id){
    	this.set({currentId: id});
    },
    getDataForId: function(id){
    	if(this.allBlogs && this.allBlogs[id]){
    		return this.allBlogs[id];
    	}else{
    		return undefined;
    	}
    }
    
});