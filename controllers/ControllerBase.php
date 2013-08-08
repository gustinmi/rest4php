<?php

namespace controllers;

abstract class ControllerBase {

	protected $answer;

	public function __construct() {
		$answer = array();
		$answer['status'] = 'ok';
		$answer['data'] = array();
	}

	public abstract function Put($items);
	
	public abstract function Get($id);
	
	public abstract function Post($new);

	public abstract function Delete($ids);

}