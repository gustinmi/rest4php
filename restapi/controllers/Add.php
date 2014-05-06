<?php

namespace controllers;

class Add extends Controller implements ICrud {

    public function __construct() {
        parent::__construct();
    }

    // retrieve
    public function get($args){
        logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        $q = isset($id) ? "SELECT id, name, content, folder_id FROM adds where id = $id" : "SELECT id, name, content FROM adds";
        $r = mysqli_query($this->link, $q);
        if (!$r) die ('SQL SELECT failed' . $q);
        $result = array();
        while ($row = mysqli_fetch_array($r)) {
            $el = array();
            array_push($el, $row[0]);
            array_push($el, $row[1]);
            array_push($el, htmlentities($row[2]));
            array_push($el, $row[3]);
            array_push($result, $el);
        }
        return $this->renderResponse($result);
    }

    // replace
    public function set($args){
        logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        if (array_key_exists('id',$args) && array_key_exists('content',$args)){
            extract($args);
            $q = "UPDATE adds SET content='$content' WHERE id = $id";
            logm($q);
            $result = mysql_query($q);
        }
        return $result == true ? $this->renderResponse(array()) : $this->renderError(array());
    }

    // create new
    public function create($args){
        if (array_key_exists('name',$args) && array_key_exists('content',$args)){
            extract($args);
            $q = "INSERT INTO folders VALUES (NULL, '$name', '$content')";
            $result = mysql_query($q);
        }

        return $result == true ? $this->renderResponse(array()) : $this->renderError(array());
    }

    // delete
    public function delete($args){
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        $q = "DELETE FROM adds where id = $id";
        mysql_query($q);
        return $this->renderResponse(array());
    }


}