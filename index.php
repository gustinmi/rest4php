<?php

require('Bootstrap.php');

//from here or from any file that includes Bootstrap, you can now instantiate classes without using require
//if you map all requests to index.php, you can start your routing (MVC) from here.



public function ExecuteAction ( $ControllerName, $ActionName, $Parameters = Array () )
	{
		$controller = new $ControllerName ();
		$ActionName .= 'Action';

		if ( $Parameters == null )
			$Parameters = Array ();

		return Call_User_Func_Array ( Array ( $controller, $ActionName ), $Parameters );
	}


$foo = new \model\Foo();

