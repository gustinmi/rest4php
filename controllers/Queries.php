<?php

namespace controllers;

class Queries extends Controller {

    public function __construct() {
        parent::__construct();
    }

    public function get($args){
        logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $qPart = is_array($args) && array_key_exists('query', $args) ? $args['query'] : NULL;
        $q = "SELECT id, name FROM $qPart";
        $r = mysql_query($q);
        if (!$r) die ('SQL SELECT failed' . $q);
        $result = array();
        while ($row = mysql_fetch_array($r, MYSQL_NUM)) {
            $el = array();
            array_push($el, $row[0]);
            array_push($el, $row[1]);
            array_push($result, $el);
        }
        return $this->renderResponse($result);
    }


}