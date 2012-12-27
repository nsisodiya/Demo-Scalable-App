Choona.js
=========

Consider website like gmail.com or other web based application where large team try
maintain the codebase. Such large scale application must follow some architecture and 
principles. This dema application work a starting point to develop such application.

Choona.js (https://github.com/nsisodiya/choona.js) is a very small library for creating Scalable and Modular Javascript Application. 

Choona.js API
=============
* visit https://github.com/nsisodiya/choona.js


Demo
=====
Read Code, After reading code you can learn how to code with Choona.js. Demos are very very simple.
Any novice programmer can write such demo. I have re-written those simple demos with Choona.js to add Scalability and
Code reusability.


* View files https://github.com/nsisodiya/Demo-Scalable-App/tree/master/demo

* 1_helloworld = HelloWorld module - http://nsisodiya.github.com/Demo-Scalable-App/demo/1_helloworld/Index.html
* 2_Addition-PubSub = Demo of PubSub and Hom one module will interact with other - http://nsisodiya.github.com/Demo-Scalable-App/demo/2_Addition-PubSub/Index.html
* 3_Blog-Application = Small Sample Website which has 5 module.* - http://nsisodiya.github.com/Demo-Scalable-App/demo/3_Blog-Application/Index.html
* 4_Blog-Application-Requirejs = Rewritten (3_Blog-Application), using Requirejs - http://nsisodiya.github.com/Demo-Scalable-App/demo/4_Blog-Application-Requirejs/Index.html


Basic Needs
============

* Application must be scalable
* Application, it should be easy to debug and develop
* Application should be reusable

Basic Concepts
==============

* Whole application, splitted into multiple modules, modules may be dependant on other modules
* So you may have situation like this - module A depends on B & C. Module B depends on D etc
* try to develop as many as modules as you can but they should not overlap in functionality. Example - You should not create 2 modules which have 80% functioanily common with each other.
* Module will talk to other module using Events - Pub/Sub Architecture.

Learning
=========
Quick start to understand two key concepts

* How to split your application into multiple modules.
* How one module talk to amother module.


Links
===============
* http://www.youtube.com/watch?v=vXjVFPosQHw - Video - ( Nicholas Zakas: Scalable JavaScript Application Architecture
* http://www.slideshare.net/nzakas/scalable-javascript-application-architecture Slides - 
* http://www.ubelly.com/2011/11/scalablejs/ Blog
* https://github.com/flosse/scaleApp Implementation 1
* https://github.com/aranm/scalable-javascript-architecture Implementation 2
* https://github.com/eric-brechemier/lb_js_scalableApp Implementation 3

I have used choona.js library for this Demo. I have created choona.js which fit best for my needs
* visit https://github.com/nsisodiya/choona.js


LICENSE
===========
* MIT - http://nsisodiya.mit-license.org

Coding Tutorial
===============
## Module Creation
* Module = Empty Div (html) + JS Module Object(js) + Configuration (optional)
* For creating a Module, You need one Empty Div/HTML element where you wil load module. You need to specify id of module

### Hello World Module
```javascript
var myApp = {};

var myApp.helloWorld = {
	start : function(){
		$(this.$).append("<p>THIS IS HEADER PANEL</p>");
		
		/*
		*	this.id = Id of module. == applicationContainer
		*	this.$ = Dom Element == document.getElementById(this.id);
		*	$(this.$) = jQ  Element == $("#applicationContainer");
		*	this.config ===== Configuration 
		*	this.sb ==== instance of sandbox associated with module. It provide useful API
		*/
	},
	end: function(){
	
	}
};

var config = {};
var module1 = new choona.loadApplication("applicationContainer", myApp.helloWorld, config);
module1.start();
```

### Flow of execution
* you create a module using choona.loadApplication by passing an ID and Module Object. Module Object has start, end function. start function inside module will be executed automatically.


## Example of Module to Module Communication

### HTML

```html
	<script type="text/javascript" src="./myApp.js"></script>
	<script type="text/javascript">
  		var application = new choona.loadApplication("applicationContainer", myApp.application);
			application.start();
	</script> 
```
* JS 


```javascript

var myApp = {};

myApp.application = {
	start:  function(){
		$(this.$).append('\
			<div>\
				<div id="inputbox"/>\
				<div id="resultbox"/>\
			</div>\
		');
		
		this.inputbox = this.sb.startModule('inputbox',myApp.inputbox);
		this.resultbox = this.sb.startModule('resultbox',myApp.resultbox);
		
	},
	end:  function(){
	
	}
}
myApp.inputbox = {

	start: function(){
		var self = this;
		$(this.$).append('\
			<div class="inputbox">\
				<input id="value1" type="text" />\
				<input id="value2" type="text" />\
				<input id="add" type="button" value="Add">\
			</div>\
		');
		$(this.$).find("#add").click(function(){
			//Send the signal to Result box
			self.sb.publish('toResultBox', {
				val1 : $(self.$).find("#value1").val(),
				val2 : $(self.$).find("#value2").val()
			});
		});
		
	},
	end: function(){
	
	}
}
myApp.resultbox = {

	start: function(){
		var self = this;
		$(this.$).append('\
			<div id="resultbox" class="resultbox">\
			</div>\
		');
		
		this.sb.subscribe('toResultBox', 
			function(config){
				var result = parseInt(config.val1) + parseInt(config.val2);
				$(self.$).find("#resultbox").html(result);
			}
		);
	},
	end: function(){
	
	}
}

```
