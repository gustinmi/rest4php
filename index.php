<?php

//from here or from any file that includes Bootstrap, you can now instantiate classes without using require
//if you map all requests to index.php, you can start your routing (MVC) from here.
require('Bootstrap.php');


/** This should be called by router. All URLs should be mapped to index.php.
 * @param $ControllerName
 * @param $ActionName
 * @param array $Parameters
 * @return mixed
 */
function ExecuteAction ( $ControllerName, $ActionName, $Parameters = Array () ) {
    $controller = new $ControllerName ();

    return Call_User_Func_Array ( Array ( $controller, $ActionName ), $Parameters );
}


ExecuteAction('\\controllers\\Folder','Get');


//$foo = new \model\Foo();

