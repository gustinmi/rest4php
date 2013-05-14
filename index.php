<?php

require('Bootstrap.php');

//from here or from any file that includes Bootstrap, you can now instantiate classes without using require
//if you map all requests to index.php, you can start your routing (MVC) from here.

$foo = new \model\Foo();