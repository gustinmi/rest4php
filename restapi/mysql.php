<?php

$link = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
if (!$link) {
    die('Connect Error: ' . mysqli_connect_error());
}

// ONLY FOR TESTING
// echo mysqli_get_host_info($link) . "\n";