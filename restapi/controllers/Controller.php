<?php

namespace controllers;


/** Base class for each controller. Controller is a REST wrapper around one database table
 * Class Controller
 * @package controllers
 */
abstract class Controller {

    /** This will be written to output via echo statement
     * @var array
     */
    protected $serialOut;

    /** Reference to connection instance
     * @var \mysqli
     */
    protected $link;

	public function __construct() {
		$this->serialOut = array();
        $this->serialOut['status'] = 'err';
        $this->serialOut['data'] = array();

        $this->link = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
        if (!$this->link) {
            die('Connect Error: ' . mysqli_connect_error($this->link));
        }

	}

    /** Wraps result from database to common message exchange format
     * @param $result
     * @return string
     */
    protected function renderResponse($result) {
        if (isset($result)){
            $this->serialOut['data'] = $result;
            $this->serialOut['status'] = 'ok';
        }
        return json_encode($this->serialOut);
    }

    /** Wraps error to common message exchange format
     * @param $msg
     * @return string
     */
    protected function renderError($msg) {
        $this->serialOut['data'] = $msg;
        $this->serialOut['status'] = 'err';
        return json_encode($this->serialOut);
    }

}