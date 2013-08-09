PHP Enterprise Application
=========

Minimalistic PHP Enterprise application, basis for any REST JSON API web service. Serves as accompanying guide to my document php 4 enterprise.
The application is a basic REST web service, with some minimalistic MVC pattern on the server side. It serves data in JSON format.

About project
--------------------------------------

This application contains simple demonstration of my quideliness for PHP enterprise grade projects. It contains no frameworks so its
possible to use it ony any hosting site that supports php5.


Launch application
--------------------------------------

The application can be started via CLI also. For example:

php -f index.php read/folder

Calling the application that runs on server

Examples

 http://localhost/api/read/folder
 http://localhost/api/read/folder/1
 http://localhost/api/read/folder/1/items

 http://localhost/api/ [read | delete | update | create]

Otherwise you must create a folder inside apache server and also you need to create rewrite rule.


Helping tips


Error logging

With cli we can use echo php directive. However with server we cannot, or we will get our loig messages in JSON response.
We use error_log() function, which is reserved for apache.

We can see our log statements by :

    tail -f error.log | egrep '\[error\]'
