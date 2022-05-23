<?php

require_once('./classes.php');
require_once('./server.php');

$connect = new Connection();
$connect->connectDB();


$method = $_SERVER["REQUEST_METHOD"];
echo 'Hello in DELETE PAGE';
var_dump($_POST);

function delete( $sku) {
    $sql = "DELETE FROM `all_products` WHERE `all_products`.`sku` = '$sku'";
    mysqli_query($GLOBALS['conn'], $sql);
    echo $sql;
}

switch ($method) {
    case 'GET':
        echo 'That\'s a GET Request';
        break;
    case 'POST':
        if ( isset($_POST['sku']) ) {
            $sku = $_POST['sku'];
            delete($sku);
        }
        else {
            echo 'BAD REQUEST';
        }
}

