<?php

namespace model;

class Folder {

    function __construct()
    {

    }

	public function getById($id){
        echo __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n";
		$r = mysql_query("SELECT  id, name FROM folders where id = $id");
    	if (!$r) throw new Exception('SQL SELECT failed');
    	$result = array();
	    while ($row = mysql_fetch_array($r, MYSQL_NUM)) {
	        $el = array();
	        array_push($el, $row[0]);
	        array_push($el, $row[1]);
	        array_push($result, $el);
	    }
        return $result;
	}

	public function getAll(){
        echo __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n";
		$r = mysql_query("SELECT  id, name FROM folders");
    	if (!$r) throw new Exception('SQL SELECT failed');
    	$result = array();
	    while ($row = mysql_fetch_array($r, MYSQL_NUM)) {
	        $el = array();
	        array_push($el, $row[0]);
	        array_push($el, $row[1]);
	        array_push($result, $el);
	    }
        return $result;
	} 	
		
	public function updateById($newItem){

	}

	public function updateAll($collection){

	} 	

	public function createNew($newItem){

	} 	

	public function deleteById($id){

	}

	public function deleteAll(){

	} 	

}