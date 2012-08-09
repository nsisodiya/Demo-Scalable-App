Demo-Scalable-App
=================

This is small demo of Scalable JavaScript Application

What is this
============

Consider website like gmail.com or other web based application where large team try
maintain the codebase. Such large scale application must follow some architecture and 
principles. This dema application work a starting point to develop such application.

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
* Once you 
