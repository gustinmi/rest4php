<?php

class Bootstrap {

    function __construct()
    {
        //This is a SYM link. It will work only on linux
        //Require ( 'appconfig.php' );

        Spl_Autoload_Register ( Array ( 'Bootstrap', 'AutoLoad' ) );
    }

    public static function AutoLoad ( $ClassName )
    {
        echo $ClassName . "\r\n";
        Require ( str_replace('\\', '/', $ClassName ) . '.php' );
    }
}

$application = new \Bootstrap();