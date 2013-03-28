choona.configure({
	debug : true
});
var application = new choona.loadApplication("applicationContainer", myApp.application);
application.start();