<?php

/** factory function for logging
 * @param $msg
 */
function logm($msg){
    if (php_sapi_name() == 'cli')
        echo $msg;
    else
        error_log("$msg");
}
