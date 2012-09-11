Demo-Scalable-App
=================

This is small demo of Scalable JavaScript Application using Choona.js.
Choona.js is a very small library for creating Scalable and Modular Javascript Application. 

Learning
=========
Quick start to understand two key concepts

* How to split your application into multiple modules.
* How one module talk to other module.
 
What is this
============

Consider website like gmail.com or other web based application where large team try
maintain the codebase. Such large scale application must follow some architecture and 
principles. This dema application work a starting point to develop such application.

Demo
=======
* 


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

Links
===============
* http://www.youtube.com/watch?v=vXjVFPosQHw - Video - ( Nicholas Zakas: Scalable JavaScript Application Architecture
* http://www.slideshare.net/nzakas/scalable-javascript-application-architecture Slides - 
* http://www.ubelly.com/2011/11/scalablejs/ Blog
* https://github.com/flosse/scaleApp Implementation 1
* https://github.com/aranm/scalable-javascript-architecture Implementation 2
* https://github.com/eric-brechemier/lb_js_scalableApp Implementation 3

I have used choona.js library for this Demo. I have created choona.js which fit best for my needs
* visit https://github.com/nsisodiya/choonajs


LICENSE
===========
* BSD - OpenSource.

Tutorial
=============

