PHP RESTful API with CRUD operations support
=========

PHP RESTful API example using built-in PHP OOP. Simple and minimalistic RESTful web service, with FrontController pattern,
simple RegExp customizable router and JSON renderer. Web service serves data in JSON format, and offers CRUD operations
on model behind.

About project
--------------------------------------

This application contains most simplistic demonstration on how to create a RESTful API with support for CRUD operations.
The code is on my humble opinion of enterprise grade. Further more, whole codebase contains no special frameworks so it's possible to use it on any hosting site that supports php5, even if user has no right to modify webserver configuration files. So basically it's a drop-in RESTt interface written for php version from 5 up.

The demo RESTful API operates on 2 entitites, namely Category and Add. They are in 1 .. * relation, like folders and files on 
your local hard drive. One category contains contains many sub items.

Supported RESTful operations  are

1. GET (read operations. We determine requested entity via URL matching)

3. 2. DELETE (delete operation. The data is posted to server as a raw HTTP DELETE request)

3. 2. PUT (update operation. The data is posted to server as a raw HTTP PUT request)

5. 4. POST (adding nw content. The data is posted to server as a raw HTTP POST request)

To provide unified API for client, all server communication (messages) take following format. 

    {
	    "status":"[ok|err]",
	    "data":[ARRAY]
    }

Configuration
--------------------------------------

1. Execute db_create.sql on your MySql instance to create table structure and fill in some dummy test data.

    mysql -u root -p < db_creacurl 'http://localhost:8083/index.php?&handler=Category&id=1' -X PUT -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":8}'te.sql

2. Edit config/constans.dev(elopment) or prod(uction) to fit your database.

3. Edit / Create a symlink named '''constants.php''' pointing to one of the above mentioned files
    
    ln -s config/constants.dev.php constants.php

   As alternative, is using windows, just copy the file from config folder to the root folder 

4. If serving from apache webserver, create a symlink rest4php in your apache htdocs folder pointing to these application's root folder php4rest.

5. If you wanna use real REST urls, you need to tweak apache .htaccess files, to rewrite REST urls to query string parameters.
    You need something like these 
    <pre><code>
    &lt;Directory /var/www/rest4php&gt;
        RewriteEngine On
        RewriteCond %{REQUEST_URI} !(.*)\.(css|js|htc|pdf|jpg|jpeg|gif|png|ico)$ [NC]
        RewriteRule ^(.*)$ index.php?handler=$1 [QSA,L]
    &lt;/Directory&gt;
    </pre></code>

Test application
--------------------------------------

To quckly test application (only read operations) you can use embedded PHP server. Start it from root folder like these:
    
    php -S localhost:8083

Then navigate your browser to 

    http://localhost:8083/index.php?&handler=Add&id=1

To fully test application, use CURL and make rerquests like this:

This are sample CURL request for testing the REST API

1) Insert element with HTTP POST

    curl 'http://localhost:8083/index.php?&handler=Category' -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"name":"test new category"}' 

2) Read element with HTTP GET request

    curl -v 'http://localhost:8083/index.php?&handler=Add&id=1'

3) Update element with HTTP PUT

    curl 'http://localhost:8083/index.php?&handler=Category&id=1' -X PUT -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":8, "name":"testing 1"}'

4) Delete element with HTTP DELETE

    curl 'http://localhost:8083/index.php?&handler=Category&id=1' -X DELETE -H 'Content-Type: application/json' -H 'X-Requested-With: XMLHttpRequest' --data-binary '{"id":8}'

Please see the tests/tests.sh for example test script.

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

Please see documentation for php autoloader

4) Encapsulate code that needs to be run in web context

To achieve good testability and independence of running in web context, code encapsulates all stuff that uses that web context parameters. There is also a alternate way to provide such a information via CLI arguments.