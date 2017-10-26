<?php

namespace controllers;

class Add extends Controller implements ICrud {

    use Logger;

    public function __construct() {
        parent::__construct();
    }

    // retrieve
    public function get($args){
        $this->log("GET called");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        if (isset($id)){
            $q = "SELECT id, name, content, folder_id FROM adds where id = " . mysqli_real_escape_string($this->link, $id);
        }else{
            $q = "SELECT a.name, c.name FROM adds a, categories c WHERE a.folder_id = c.id order by c.name desc LIMIT 0,4";
        }
        $this->log($q);
        $result = mysqli_query($this->link, $q);
        if (!$result) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
        $allRows = array();
        while ($row = mysqli_fetch_array($result)) {
            $el = array();
            array_push($el, $row[0]);
            array_push($el, $row[1]);
            if (isset($id)){
                array_push($el, htmlentities($row[2]));
                array_push($el, $row[3]);
            }
            array_push($allRows, $el);
        }
        $resp = $this->renderResponse($allRows);
        mysqli_free_result($result);
        $this->link->close();
        return $resp;
    }

    // replace
    public function put($args){
        $this->log("PUT called");
        if (array_key_exists('id',$args) && array_key_exists('content', $args)){
            extract($args);
            $q = "UPDATE adds SET content='" . mysqli_real_escape_string($this->link, $content) . "' WHERE id = " . mysqli_real_escape_string($this->link, $id);
            $this->log($q);
            $result = mysqli_query($this->link, $q);
            if (!isset($result)) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            $numAffected =  mysqli_affected_rows($this->link);
            if (!isset($numAffected) || $numAffected != 1) die ('Update did not update any rows');
            $resp = $this->renderResponse(array($numAffected));
            $this->link->close();
            return $resp;
        }else{
            $this->log("Missing parameter 'content' or 'id'");
            die("Missing parameters");
        }
    }

    // create new
    public function post($args){
        $this->log("POST called" . print_r($args, true));
        if (array_key_exists('name', $args) && array_key_exists('content', $args)){
            extract($args);
            $q = "INSERT INTO folders (id, folder_id, name, content) VALUES (NULL," . mysqli_real_escape_string($this->link, $folder_id) . ", '". mysqli_real_escape_string($this->link, $name) . "', '" . mysqli_real_escape_string($this->link, $content) . "')";
            $this->log($q);
            $result = mysqli_query($this->link, $q);
            if (!isset($result)) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            $insertId = mysqli_insert_id($this->link);
            if (!isset($insertId)) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            $resp = $this->renderResponse(array($insertId));
            $this->link->close();
            return $resp;

        }else{
            $this->log("Missing parameter 'folder_id', 'name' or 'content' ");
            die("Missing parameters");
        }
    }

    // delete
    public function delete($args){
        $this->log("DELETE called");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        if(isset($id)){
            $q = "DELETE FROM adds where id = " . mysqli_real_escape_string($this->link, $id);
            $this->log($q);
            $result = mysqli_query($this->link, $q);
            $numAffected =  mysqli_affected_rows($this->link);
            if (!isset($result)) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            if (!isset($numAffected) || $numAffected != 1) die ('Update did not update any rows');
            $resp = $this->renderResponse(array($numAffected));
            $this->link->close();
            return $resp;
        }else{
            $this->log("Missing parameter 'id'");
            die("Missing parameters");
        }
    }


}