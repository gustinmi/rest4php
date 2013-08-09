<?php

namespace controllers;

class Folder extends Controller {
	
	protected $model;

    public function __construct() {
        parent::__construct();
        $this->model = new \model\Folder();
    }

	// retrieve
	public function Read($id=NULL){
        echo __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n";
		$result = isset($id) ? $this->model->getById($id) : $this->model->getAll();
		return $this->renderResponse($result);
	}

	// replace
	public function Update($newitems){
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