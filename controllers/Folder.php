<?php

namespace controllers;

class Folder extends Controller {

    public function __construct() {
        parent::__construct();
    }

	// retrieve
	public function get($args){
        logm(__CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n");
        $id = is_array($args) && array_key_exists('id', $args) ? $args['id'] : NULL;
        $q = isset($id) ? "SELECT id, name FROM folders where id = $id" : "SELECT  id, name FROM folders";
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
	public function set($newitems){
        if (!isset($newitems)) throw new Exception('Empty args');
		$result = is_array($newitems) ? $this->model->updateAll($newitems) : $this->model->updateById($newitems);
		return $this->renderResponse($result);
	}

	// create new
	public function Create($newItem){
        if (!isset($newItem)) throw new Exception('Empty args');
		$result = $this->model->createNew($newItem);
		return $this->renderResponse($result);
	}

	// delete
	public function Delete($ids){
        if (!isset($ids)) throw new Exception('Empty args');
		$result = is_array($ids) ? $this->model->deleteAll($ids) : $this->model->deleteById($ids);
		return $this->renderResponse($result);
	}
		

}