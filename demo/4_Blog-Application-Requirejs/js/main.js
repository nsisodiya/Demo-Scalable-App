require(['./BlogApp/App'], function(App){
     
	var application = new choona.loadApplication("applicationContainer", App);
	application.start();
 
});


