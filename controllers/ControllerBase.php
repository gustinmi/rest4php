<?php

namespace controllers;

abstract class ControllerBase {

	protected $serialOut;

	public function __construct() {
		$this->serialOut = array();
        $this->serialOut['status'] = 'err';
        $this->serialOut['data'] = array();
	}

	public abstract function Put($items);
	
	public abstract function Get($id);
	
	public abstract function Post($new);

	public abstract function Delete($ids);

}