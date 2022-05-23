<?php
require_once('./server.php');
require_once('./classes.php');

$connect = new Connection();
$connect->connectDB();

$method = $_SERVER["REQUEST_METHOD"];


switch ($method) {
    case 'POST':
        echo 'That\'s POST request';
        $name = $_POST['name'];
        $sku = $_POST['sku'];
        $price = $_POST['price'];
        $type = $_POST['type'];

        switch ($type) {
            case 'DVD' :
                if (
                    isset($_POST['size'])
                ) {
                    $size = $_POST['size'];
                    $DVDStmt = new Dvd(
                        $sku, $name,
                        $price, $size
                    );
                    $DVDStmt->insertDB($sku , $name, $price, $size);
                    break;
                }
            
            case 'Furniture' :
                if (
                    isset($_POST['height']) &&
                    isset($_POST['width']) &&
                    isset($_POST['length']) 
                ) {
                    $height = $_POST['height'];
                    $width = $_POST['width'];
                    $length = $_POST['length'];

                    $FurnStmt = new Furniture($sku,$name,$price, $height, $width,$length);
                    $FurnStmt->insertDB($sku,$name,$price, $height, $width,$length);
                    break;
                }
        
            case 'Book' :

                if (
                    isset($_POST['weight'])
                ) {
                    $weight = $_POST['weight'];
                    $BookStmt = new Books($sku,$name,$price,$weight);
                    $BookStmt->insertDB($sku,$name,$price,$weight);
                    break;
                }

            default:
                echo 'You Shoud Insert a valid Input';
                break;
        }
        break;

}
