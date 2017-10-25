<?php

/** Binds together main parts of the application. Namely config file and common functions.
 * Registers autoload function, so that we do not need to require() controllers by hand
 * Class Bootstrap
 */
class Bootstrap {

    function __construct()
    {
        //This is a SYM link. It should point to config/[dev/prod]constants.php
        include("constants.php");
        // common functionalitie and traits
        include("common.php");

        Spl_Autoload_Register ( Array ( 'Bootstrap', 'AutoLoad' ) );
    }

    public static function AutoLoad ( $ClassName )
    {
        Require ( str_replace('\\', '/', $ClassName ) . '.php' );
    }
}

$application = new \Bootstrap();