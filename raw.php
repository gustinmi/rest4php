<?php

//parse_str(file_get_contents('php://input'), $put_vars);

$raw = file_get_contents('php://input');

$ob = print_r($raw, true);

echo $ob;