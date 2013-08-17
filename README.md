PHP RESTful API with CRUD operations support
=========

PHP RESTful API example using built-in PHP OOP. Simple and minimalistic RESTful web service, with FrontController pattern,
simple RegExp customizable router and JSON renderer. Web service serves data in JSON format, and offers CRUD operations
on model behind.

About project
--------------------------------------

This application contains most simplistic demonstration on how to create a RESful API with support for CRUD operations.
The code is on my humble opinion in enterprise grade. Further more, whole codebase contains no special frameworks so it's possible to use it on any hosting site that supports php5.

The RESTful API operates on 2 entitites, namely Folder and Ad (or item). They are in 1 .. * relation, like folders and files on 
your local harddrive. One folder contains many items (or files).

RESTful operations supported are

1. get  (read operations, uses a HTTP GET. We determine requested entity via URL matching)
2. delete (delete operation. Same as before)
2. set (update operation. The data is posted to server as a RAW HTTP POST request)
4. create (same as above)

To provide unified API for client, all server communication (messages) take following format. 

    {
	    "status":"[ok|err]",
	    "data":[ARRAY]
    }

Configuration
--------------------------------------

1. Execute db_create.sql on your MySql instance to create table structure and some test data.

    mysql -u root -p < db_create.sql

2. Edit config/constans.dev(elopment) or prod(uction) to fit your database.

3. Edit / Create a symlink named '''constants.php''' pointing to one of the above mentioned files
    
    ln -s config/constants.dev.php constants.php

4. Create a symlink rest4php in your apache htdocs folder pointing to these application's root folder php4rest.

5. If your apache instance does not support .htaccess files, add following directives to apache site configuration file 
    <pre><code>
    &lt;Directory /var/www/rest4php&gt;
        RewriteEngine On
        RewriteCond %{REQUEST_URI} !(.*)\.(css|js|htc|pdf|jpg|jpeg|gif|png|ico)$ [NC]
        RewriteRule ^(.*)$ index.php?handler=$1 [QSA,L]
    &lt;/Directory&gt;
    </pre></code>

Test application
--------------------------------------

To quckly test application (only read operations) you can use your browser and navigate to

 - http://[SERVER_NAME]/rest4php/api/get/folder
 - http://[SERVER_NAME]/prest4php/api/get/folder/1
 - http://[SERVER_NAME]/rest4php/api/get/folder/1/ad


To fully test application, use CURL and make rerquests like this:

This are sample CURL request for testing the REST API

1) Read element

    curl 'http://rest4php.mitjagustin.si/api/get/folder/' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' --compressed
    curl 'http://rest4php.mitjagustin.si/api/get/folder/1' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' --compressed

2) Delete element

    curl 'http://rest4php.mitjagustin.si/api/delete/folder/9' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' --compressed

3) Update element

    curl 'http://rest4php.mitjagustin.si/api/set/folder/' -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":8,"name":"testing 1"}' --compressed

4) Insert element

    curl 'http://rest4php.mitjagustin.si/api/create/folder/' -H 'Content-Type: application/json' -H 'Cache-Control: max-age=0' -H 'X-Requested-With: XMLHttpRequest'  --data-binary '{"name":"test new"}' --compressed

Application arhitecture decisions
--------------------------------------

1) Error logging

With cli we can use echo php directive. However with server we cannot, or we will get our loig messages in JSON response.
We use error_log() function, which is reserved for apache.

We can see our log statements by :

    tail -f error.log | egrep '\[error\]'

2) Configuration

Normally the main demand for configuration is ability to swtich between different environments (development, staging, production).
The sofisticated configuration frameworks provide this utility among many others. However in order to use what build-in php functionality provide,
we use simple solution with symlink. So for the proper configuration file to be used, simple create a proper symlink.

3) PHP5 Autoloader

Please see my document : http://mitjagustin.si/2013/05/14/php-autoloader-require-and-include-explained/

4) Encapsulate code that needs to be run in web context

To achieve good testability and independence of running in web context, code encapsulates all stuff that uses that web context parameters. There is also a alternate way to provide such a information via CLI arguments.


References
================================================================
Raw HTTP request processing sample is taken from here [1].


  [1]: http://daringfireball.net/projects/markdown/syntax#autolink        "RESTful API"












