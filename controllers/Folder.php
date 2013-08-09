<?php

namespace controllers;

class Folder extends ControllerBase {
	
	protected $model;

    public function __construct() {
        parent::__construct();
        $this->model = new \model\Folder();
    }

	protected function renderResponse($result) {
		if (isset($result)){
			$answer['data'] = $result;
			$answer['status'] = 'ok';
		} 
		//header("Content-Type: text/json; charset=utf-8");
    	echo json_encode($result);
	}

	// retrieve
	public function Get($id=NULL){
        echo __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n";
		$result = isset($id) ? $this->model->getById($id) : $this->model->getAll();
		$this->renderResponse($result);
	}

	// replace
	public function Put($newitems){
        if (!isset($newitems)) throw new Exception('Empty args');
		$result = is_array($newitems) ? $this->model->updateAll($newitems) : $this->model->updateById($newitems);
		$this->renderResponse($result);
	}

	// create new
	public function Post($newItem){
        if (!isset($newItem)) throw new Exception('Empty args');
		$result = $this->model->createNew($newItem);
		$this->renderResponse($result);
	}

	// delete
	public function Delete($ids){
        if (!isset($ids)) throw new Exception('Empty args');
		$result = is_array($ids) ? $this->model->deleteAll($ids) : $this->model->deleteById($ids);
		$this->renderResponse($result);
	}
		

}