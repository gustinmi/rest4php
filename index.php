<?php

//********************************
// This is main application file. It's the onlyone that is aware of context (that is,
// if we are running the script from server environemnt or CLI environment).
// All other classes are free from context. They can be run from server, CLi, unittestst.
// We map all requests to index.php, so this is central point (Front Controller)
//********************************

// Bootstrap provides auto_load function implementation. We can now instantiate classes without using
// require or include directives.
require('Bootstrap.php');


/** This should be called by router. All URLs should be mapped to index.php.
 * @param $ControllerName
 * @param $ActionName
 * @param array $Parameters
 * @return mixed
 */
function Dispatch($ControllerName, $ActionName, $Parameters = Array()) {
    $controller = new $ControllerName();
    return Call_User_Func_Array(Array($controller, $ActionName), $Parameters);
}

//if CLI context, pass required paramaters as CMD arguments
php_sapi_name() == 'cli' ? $handler = strtolower($argv[1]) : $handler = strtolower($_REQUEST['handler']);

/* URL REWRITING

Apache directive

    RewriteEngine On
    RewriteCond %{REQUEST_URI} !(.*)\.(css|js|htc|pdf|jpg|jpeg|gif|png|ico)$ [NC]
    RewriteRule ^(.*)$ index.php?handler=$1 [QSA,L]

Examples

 http://localhost/api/read/user/87  will become  http://localhost/api/index.php?handler=read/user/87

 http://localhost/api/read/user/87
 http://localhost/api/delete/user/87
 http://localhost/api/update/user/87
 http://localhost/api/create/user/

*/

// get/folders/1/items/

$tokens = explode("/", $handler);

$action = array_key_exists(0, $tokens) ? $tokens[0] : NULL;
$domain = array_key_exists(1, $tokens) ? $tokens[1] : NULL;

if (preg_match("/^[a-zA-Z]+$/", $domain) != 1) throw new Exception("The $domain type was not specified as latin word");

$denominator = array_key_exists(2, $tokens) ? $tokens[2] : NULL;
if (isset($denominator) && preg_match("/^[0123456789]+$/", $denominator) != 1) throw new Exception("The $denominator type was not specified as an integer");

$subdomain = array_key_exists(3, $tokens) ? $tokens[3] : NULL;
if (isset($subdomain) && preg_match("/^[a-zA-Z]+$/", $subdomain) != 1) throw new Exception("The $subdomain type was not specified as latin word");

$subdenominator = array_key_exists(4, $tokens) ? $tokens[4] : NULL;
if (isset($subdenominator) && preg_match("/^[0123456789]+$/", $denominator) != 1) throw new Exception("The $denominator type was not specified as an integer");

$response = Dispatch('\\controllers\\' . ucfirst($domain), $action, ['denominator'=>$denominator, 'subdomain'=>$subdomain, 'subdenominator'=>$subdenominator ]);

//if we are running this in server environment, render HTTP headers
if (php_sapi_name() != 'cli')
    header("Content-Type: text/json; charset=utf-8");

echo $response;