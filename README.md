PHP REST API Minimalistic
=========

Minimalistic PHP REST API application. The application is a basic REST web service, with some minimalistic dispatcher pattern on the server side. It serves data in JSON format.

About project
--------------------------------------

This application contains simple demonstration of my quideliness for PHP enterprise grade projects. It contains no frameworks so its
possible to use it ony any hosting site that supports php5.


Configuration
--------------------------------------

1. Execute db_create.sql on your MySql instance

    mysql -u root -p < db_create.sql

2. Edit config/constans.dev(elopment) or prod(uction) to fit your database.

3. Create a symlink constants.php pointing to one of the above ones
    ln -s config/constants.dev.php constants.php


4. Create a symlink in your apache htdocs folder pointing to these application's root folder.

5. Add following directives to apache directory entry
    <pre><code>
    &lt;Directory /var/www/php2e&gt;
        RewriteEngine On
        RewriteCond %{REQUEST_URI} !(.*)\.(css|js|htc|pdf|jpg|jpeg|gif|png|ico)$ [NC]
        RewriteRule ^(.*)$ index.php?handler=$1 [QSA,L]
    &lt;/Directory&gt;
    </pre></code>

Launch application
--------------------------------------

To test application you can use your browser and navigate to

 - http://localhost/YOUR_APP/api/get/folder
 - http://localhost/YOUR_APP/api/get/folder/1
 - http://localhost/YOUR_APP/api/get/folder/1/ad

To test full application, use CURL like this:

This are sample CURL request for testing the REST API

1) Read element

    curl 'http://localhost/php2e/api/get/folder/' -H 'Host: localhost'  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Cache-Control: max-age=0' --compressed
    curl 'http://localhost/php2e/api/get/folder/1/' -H 'Host: localhost'  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Cache-Control: max-age=0' --compressed

2) Delete element

    curl 'http://localhost/php2e/api/delete/folder/1/' -H 'Host: localhost'  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Cache-Control: max-age=0' --compressed

3) Update element

    curl 'http://localhost/php2e/api/set/folder' -H 'Origin: http://localhost' -H 'Host: localhost' -H 'Content-Type: application/json' -H 'Cache-Control: max-age=0' -H 'X-Requested-With: XMLHttpRequest'  --data-binary '{"id":5,"name":"test 1"}' --compressed

4) Insert element

    curl 'http://localhost/php2e/api/create/folder' -H 'Origin: http://localhost' -H 'Host: localhost' -H 'Content-Type: application/json' -H 'Cache-Control: max-age=0' -H 'X-Requested-With: XMLHttpRequest'  --data-binary '{"name":"test new"}' --compressed

Application arhitecture and components
--------------------------------------

Error logging

With cli we can use echo php directive. However with server we cannot, or we will get our loig messages in JSON response.
We use error_log() function, which is reserved for apache.

We can see our log statements by :

    tail -f error.log | egrep '\[error\]'

Configuration

Normally the main demand for configuration is ability to swtich between different environments (development, staging, production).
The sofisticated configuration frameworks provide this utility among many others. However in order to use what build-in php functionality provide,
we use simple solution with symlink. So for the proper configuration file to be used, simple create a proper symlink.



