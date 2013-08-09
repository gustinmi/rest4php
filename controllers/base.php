<?php

namespace controllers;

abstract class ControllerBase {

	protected $serialOut;

	public function __construct() {
		$this->serialOut = array();
        $this->serialOut['status'] = 'err';
        $this->serialOut['data'] = array();
	}

	public abstract function Update($items);
	
	public abstract function Read($id);
	
	public abstract function Create($new);

	public abstract function Delete($ids);

}