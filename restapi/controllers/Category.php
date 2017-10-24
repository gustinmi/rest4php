<?php

namespace controllers;

class Category extends Controller implements ICrud {

    public function __construct() {
        parent::__construct();
    }

	// retrieve
	public function get($args){
        if (LOG_VERBOSE) logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        if (isset($id)){

            $q = "SELECT id, name FROM categories where id = " . mysqli_real_escape_string($this->link, $id);

            // $q = printf("SELECT id, name FROM categories where id = %s ", mysqli_real_escape_string($this->link, $id));

        }else{
            $q = "SELECT  id, name FROM categories LIMIT 1, 10";
        }

        if (LOG_VERBOSE) logm($q);
        $r = mysqli_query($this->link, $q);
        if (!$r) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
        $result = array();
        while ($row = mysqli_fetch_array($r)) {
            $el = array();
            array_push($el, $row[0]);
            array_push($el, $row[1]);
            array_push($result, $el);
        }
        $this->link->close();
		return $this->renderResponse($result);
	}

	// replace
	public function put($args){
        if (LOG_VERBOSE) logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        if (array_key_exists('id',$args) && array_key_exists('name',$args)){
            extract($args);
            $q = "UPDATE categories SET name = '" . mysqli_real_escape_string($this->link, $name)  . "' WHERE id = " . mysqli_real_escape_string($this->link, $id);
            if (LOG_VERBOSE) logm($q);
            $result = mysqli_query($this->link, $q);
            if (!$result) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            $numAffected =  mysqli_affected_rows($this->link);
            if (!$numAffected || $numAffected != 1) die ('Update did not update any rows');
            $this->link->close();
            return $result == true ? $this->renderResponse(array($numAffected)) : $this->renderError(array());
        }else{
            die("Missing parameters in " . __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        }
	}

	// create new
	public function post($args){
        if (LOG_VERBOSE) logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        if (array_key_exists('name',$args)){

            extract($args);
            $q = "INSERT INTO categories VALUES (NULL, '" . mysqli_real_escape_string($this->link, $name)  . "')";
            if (LOG_VERBOSE) logm($q);
            $result = mysqli_query($this->link, $q);
            $insertId = mysqli_insert_id($this->link);
            if (!$result) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            if (!$insertId) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
            $this->link->close();
            return $result == true ? $this->renderResponse(array($insertId)) : $this->renderError(array());

        }else{
            die("Missing parameters in " . __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        }

	}

	// delete
	public function delete($args){
        if (LOG_VERBOSE) logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        $q = "DELETE FROM categories where id = " . mysqli_real_escape_string($this->link, $id);
        if (LOG_VERBOSE) logm($q);
        $result = mysqli_query($this->link, $q);
        $numAffected =  mysqli_affected_rows($this->link);
        if (!$result) die ('SQL SELECT failed with following error' . " Error description: " . mysqli_error($this->link));
        if (!$numAffected || $numAffected != 1) die ('Update did not update any rows');
        $this->link->close();
		return $this->renderResponse(array($numAffected));
	}
		

}