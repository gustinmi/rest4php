<?php

namespace model;

class Ad {

    function __construct()
    {
        include( "mysql.php" );
    }

    public function read($args){
        echo __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n";

        if (array_key_exists('id',$args))
            $q= "SELECT  id, name FROM ads where id = " . $args['id'];
        if (array_key_exists('folder_id',$args))
            $q= "SELECT  id, name FROM ads where id = " . $args['id'] . " AND folder_id = " . $args['folder_id'];

        $r = mysql_query($q);
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

    public function getAll($args){
        echo __CLASS__  . ' ' . __METHOD__ . __LINE__ ."\r\n";

        array_key_exists('folder_id',$args) ?
            $q= "SELECT  id, name FROM ads where folder_id = " . $args['folder_id'] : $q= "SELECT  id, name FROM ads";

        $r = mysql_query($q);
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