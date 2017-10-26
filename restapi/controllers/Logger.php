<?php

namespace controllers;


trait Logger {

    public function log($logString) {

        if (LOG_VERBOSE) logm(__CLASS__  . '->' . __METHOD__ . ':' . __LINE__ . "[[${logString}]]");

    }

}