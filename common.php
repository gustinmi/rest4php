<?php

function logm($msg){
    if (php_sapi_name() == 'cli')
        echo $msg;
    else
        error_log("\n $msg");
}
