<?php

namespace controllers;

abstract class Controller {

	protected $serialOut;
    protected $link;

	public function __construct() {
		$this->serialOut = array();
        $this->serialOut['status'] = 'err';
        $this->serialOut['data'] = array();

        $this->link = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
        if (!$this->link) {
            die('Connect Error: ' . mysqli_connect_error());
        }
	}

    protected function renderResponse($result) {
        if (isset($result)){
            $this->serialOut['data'] = $result;
            $this->serialOut['status'] = 'ok';
        }
        return json_encode($this->serialOut);
    }

    protected function renderError($msg) {
        $this->serialOut['data'] = $msg;
        $this->serialOut['status'] = 'err';
        return json_encode($this->serialOut);
    }

}