choona.util.debug = true;

var application ;

$("#unloadApp").toggle(function() {
	application.end();
	$(this).val("Load Application");
}, function() {
	StartApplication();
	$(this).val("Unload Whole Application");
});

function StartApplication(){
	console.log("started");
	application = choona.startApp({
		id:"applicationContainer",
		module: myApp.application
	});
}

StartApplication();
	
