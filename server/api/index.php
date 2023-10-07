<?php
include_once '../config/config.php';
include_once '../classes/RequestProcessore.php';


$method = $_SERVER["REQUEST_METHOD"];
$request = new RequestProcessore();
$request->processRequest($method);
