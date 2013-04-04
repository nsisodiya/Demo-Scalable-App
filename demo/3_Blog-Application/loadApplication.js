choona.util.debug = true;

var application ;

$("#unloadApp").toggle(function() {
	application.end();
}, function() {
	StartApplication();
});

function StartApplication(){
	application = choona.startApp({
		id:"applicationContainer",
		module: myApp.application
	});
}

StartApplication();
	
