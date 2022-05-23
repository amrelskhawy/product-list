<?php
require_once('./server.php');

$connect = new Connection();


$sql = "SELECT * FROM `all_products`" ;
$result = mysqli_query($connect->connectDB(), $sql);


// GET DATA FROM DATABASE
if (!$result) {
    http_response_code(404);
    die(mysqli_error($connect->connectDB()));

} else {
    echo '[';
    // DVD
    for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        echo ($i > 0 ? ',' : "") . json_encode(mysqli_fetch_object($result));
    }
    echo ']';
}

$connect->connectDB()->close();