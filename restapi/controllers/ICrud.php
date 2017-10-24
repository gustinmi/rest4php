<?php

namespace controllers;

/** This interface represent HTTP methods. Each controller implements this interface
 * Class ICrud
 * @package controllers
 */
interface ICrud {
    function put($args);
    function get($args);
    function post($args);
    function delete($args);
}