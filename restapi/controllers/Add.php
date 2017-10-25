<?php

namespace controllers;

class Add extends Controller implements ICrud {

    use Logger;

    public function __construct() {
        parent::__construct();
    }

    // retrieve
    public function get($args){
        if (LOG_VERBOSE) logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        $q = isset($id) ? "SELECT id, name, content, folder_id FROM adds where id = $id" : "SELECT id, name, content, folder_id FROM adds LIMIT 1, 10";
        if (LOG_VERBOSE) logm($q);
        $r = mysqli_query($this->link, $q);
        if (!$r) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
        $result = array();
        while ($row = mysqli_fetch_array($r)) {
            $el = array();
            array_push($el, $row[0]);
            array_push($el, $row[1]);
            array_push($el, htmlentities($row[2]));
            array_push($el, $row[3]);
            array_push($result, $el);
        }
        $resp = $this->renderResponse($result);
        mysqli_free_result($result);
        $this->link->close();
        return $resp;
    }

    // replace
    public function put($args){
        if (LOG_VERBOSE) logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        if (array_key_exists('id',$args) && array_key_exists('content',$args)){
            extract($args);
            $q = "UPDATE adds SET content='" . mysqli_real_escape_string($this->link, $content) . "' WHERE id = " . mysqli_real_escape_string($this->link, $id);
            if (LOG_VERBOSE) logm($q);
            $result = mysqli_query($this->link, $q);
            $numAffected =  mysqli_affected_rows($this->link);
            if (!$result) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            if (!$numAffected || $numAffected != 1) die ('Update did not update any rows');
            $resp = $result == true ? $this->renderResponse(array($numAffected)) : $this->renderError(array());
            mysqli_free_result($result);
            $this->link->close();
            return $resp;
        }else{
            die("Missing parameters in " . __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        }
    }

    // create new
    public function post($args){
        if (LOG_VERBOSE) logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        if (array_key_exists('name',$args) && array_key_exists('content',$args)){
            extract($args);
            // not tested yet
            $q = "INSERT INTO folders (id, folder_id, name, content) VALUES (NULL,"
                . mysqli_real_escape_string($this->link, $folder_id)
                . "'" . mysqli_real_escape_string($this->link, $name) . "'"
                . ", '" . mysqli_real_escape_string($this->link, $content)  . "')";

            if (LOG_VERBOSE) logm($q);
            $result = mysqli_query($this->link, $q);
            $insertId = mysqli_insert_id($this->link);
            if (!$result) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            if (!$insertId) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            $resp = $result == true ? $this->renderResponse(array($insertId)) : $this->renderError(array());
            mysqli_free_result($result);
            $this->link->close();
            return $resp;

        }else{
            die("Missing parameters in " . __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        }
    }

    // delete
    public function delete($args){
        if (LOG_VERBOSE) logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        $q = "DELETE FROM adds where id = " . mysqli_real_escape_string($this->link, $id);
        if (LOG_VERBOSE) logm($q);
        $result = mysqli_query($this->link, $q);
        $numAffected =  mysqli_affected_rows($this->link);
        if (!$result) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
        if (!$numAffected || $numAffected != 1) die ('Update did not update any rows');
        $resp = $this->renderResponse(array($numAffected));
        mysqli_free_result($result);
        $this->link->close();
        return $resp;
    }


}