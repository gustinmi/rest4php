<?php

namespace controllers;

class Ad extends Controller implements ICrud {

    public function __construct() {
        parent::__construct();
    }

    // retrieve
    public function get($args){
        logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        $q = isset($id) ? "SELECT id, name FROM ads where id = $id" : "SELECT  id, name FROM ads";
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

    // replace
    public function set($args){
        //TODO implement this
        return $this->renderResponse(array());
    }

    // create new
    public function create($args){
        //TODO implement this
        return $this->renderResponse(array());
    }

    // delete
    public function delete($args){
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        $q = "DELETE FROM ads wh ere id = $id";
        mysql_query($q);
        return $this->renderResponse(array());
    }


}