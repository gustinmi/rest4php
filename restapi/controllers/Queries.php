<?php

namespace controllers;

class Queries extends Controller {

    public function __construct() {
        parent::__construct();
    }

    public function q($args){
        logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $qPart = is_array($args) && array_key_exists('query', $args) ? $args['query'] : NULL;
        $q = "SELECT id, name $qPart";
        $r = mysqli_query($this->link, $q);
        if (!$r) die ('SQL SELECT failed' . $q);
        $result = array();
        while ($row = mysqli_fetch_array($r)) {
            $el = array();
            array_push($el, $row[0]);
            array_push($el, $row[1]);
            array_push($result, $el);
        }
        return $this->renderResponse($result);
    }


}