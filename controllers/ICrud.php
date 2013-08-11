<?php

namespace controllers;

interface ICrud {
    function set($args);
    function get($args);
    function create($args);
    function delete($args);
}