choona.util.debug =  true;

require(['./BlogApp/App'], function(App){
    
	application = choona.startApp({
		id:"applicationContainer", 
		module: App
 	});

});


