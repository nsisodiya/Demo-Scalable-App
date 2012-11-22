require(['./BlogApp/App'], function(App){
     
	var application = new choona.createModule("applicationContainer", App);
	application.start();
 
});


