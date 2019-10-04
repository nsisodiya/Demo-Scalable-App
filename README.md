# Demo-Scalable-App
Demo of Scalable JavaScript Application using Choona.js. Choona.js (https://github.com/nsisodiya/choona.js) is a very small library for creating Scalable and Modular Javascript Application.
To see more, go to [this website.](https://www.narendrasisodiya.com/Demo-Scalable-App/)

(There is a presentation available via the suggested link provided above)

## Learning
Quick start to understand two key concepts.
- How to split your application into multiple modules.
- How one module talk to amother module.

## What is this
Consider website like gmail.com or other web based application where large team try maintain the codebase. Such large scale application must follow some architecture and principles. This dema application work a starting point to develop such application.

## Demo
- View files https://github.com/nsisodiya/Demo-Scalable-App/tree/master/demo
- 3_Blog-Application = Small Sample Website which has 5 module.
- 4_Blog-Application-With-Requirejs = Rewritten (3_Blog-Application), using Requirejs
- 5_Blog-Application-With-CustomEventBus = Rewritten (3_Blog-Application), With Custom EventBus

## Basic Needs
- Application must be scalable
- Application, it should be easy to debug and develop
- Application should be reusable

## Basic Concepts
- Whole application, splitted into multiple modules, modules may be dependant on other modules
- So you may have situation like this - module A depends on B & C. Module B depends on D etc
- try to develop as many as modules as you can but they should not overlap in functionality. Example - You should not create 2 modules - which have 80% functioanily common with each other.
- Module will talk to other module using Events - Pub/Sub Architecture.

## Links
- http://www.youtube.com/watch?v=vXjVFPosQHw - Video - ( Nicholas Zakas: Scalable JavaScript Application Architecture
- http://www.slideshare.net/nzakas/scalable-javascript-application-architecture Slides -
- http://www.ubelly.com/2011/11/scalablejs/ Blog
- https://github.com/flosse/scaleApp Implementation 1
- https://github.com/aranm/scalable-javascript-architecture Implementation 2
- https://github.com/eric-brechemier/lb_js_scalableApp Implementation 3
- https://github.com/nsisodiya/choona.js Implementation 4

I have used choona.js library for this Demo. I have created choona.js which fit best for my needs
- visit https://github.com/nsisodiya/choona.js

## LICENSE
- MIT - http://nsisodiya.mit-license.org

## Coding Tutorial
### Module Creation
- Module = Empty Div (html) + JS Module Object(js) + Configuration (optional)
- For creating a Module, You need one Empty Div/HTML element where you wil load module. You need to specify id of module

## Hello World Module
### Flow of execution
- you create a application module using choona.startApp by passing an ID and Module Object. Module Object has start, end function. start function inside module will be executed automatically.

## Variable available inside a module
```
*   this.id => Id of module. == applicationContainer
*   this.$ => Dom Element == document.getElementById(this.id);
*   $(this.$) => jQ  Element == $("#applicationContainer");
*   this.config => Configuration 
*   this.sb => instance of sandbox associated with module. It provide useful API
```

## Sanbox API
Module is provided by instance of sanbox. sandbox element provide API. You need not to unsubscribe the Signals. these will be unsubscribed automatically when a module ends.


```
* this.sb.publish  ==> Send Signals
* this.sb.subscribe  ==> Recieve Signals
* this.sb.unsubscribe  ==> Stop recieving Signals
* this.sb.startModule  ==> Load a child module inside current module
* this.sb.endModule  ==> End a child module inside current module
```

## Extending Module
- Modules are basically objects. JavaScript provide ability to extend objects. So in Choona.js you can easily extend one module from other module.
- This kind of Inheritance is very useful as you can create a new module by inheriting a base module.
- You can load base module too
