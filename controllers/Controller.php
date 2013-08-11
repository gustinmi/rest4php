<?php

namespace controllers;

abstract class Controller {

	protected $serialOut;

	public function __construct() {
		$this->serialOut = array();
        $this->serialOut['status'] = 'err';
        $this->serialOut['data'] = array();
	}

    protected function renderResponse($result) {
        if (isset($result)){
            $this->serialOut['data'] = $result;
            $this->serialOut['status'] = 'ok';
        }
        return json_encode($this->serialOut);
    }

    public abstract function set($items);
	
	public abstract function get($id);
	
	public abstract function create($new);

	public abstract function delete($ids);

}