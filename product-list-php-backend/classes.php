<?php

require_once('./server.php');

$connect = new Connection();
$conn = $connect->connectDB();

abstract class Product 
{
        public $sku = '';
        public $name = '';
        public $price = 0;
        public $sql = '' ;

        public function __construct($sku , $name, $price) {
            $this->$sku = $sku;
            $this->$name = $name;
            $this->$price = $price;
        }
}

class Furniture extends Product 
{
        public $height;
        public $width;
        public $length;
        
        public function __construct($sku , $name, $price, $height, $width, $length) {
            parent::__construct($sku , $name, $price);
            $this->$height = $height ;
            $this->$width  = $width  ;
            $this->$length = $length ;
        }
        public function insertDB($sku , $name, $price, $height, $width, $length)
        {
            $sql = "INSERT INTO `all_products` ( `sku`, `name`, `price`, `type`, `width`, `height`, `length`, `size`, `weight`) VALUES ('$sku', '$name', '$price', 'furniture', '$width', '$height',  '$length', '', '');";

            mysqli_query($GLOBALS['conn'], $sql);
        }

    }


class Dvd extends Product {
        public $size;
        public function __construct($sku , $name, $price, $size) {
            parent::__construct($sku , $name, $price);
            $this->$size = $size;
        }
        public function insertDB($sku , $name, $price, $size)  
        {

            $sql = "INSERT INTO `all_products` (`sku`, `name`, `price`, `type`, `width`, `height`, `length`, `size`, `weight`) VALUES ('$sku', '$name', '$price', 'dvd', '', '', '', '$size', '');";

            


        mysqli_query($GLOBALS['conn'], $sql);
        }

}


class Books extends Product {
    public $weight;
    public function __construct($sku , $name, $price, $weight) {
        parent::__construct($sku , $name, $price);
        $this->$weight = $weight;
    }
    public function insertDB( $sku , $name, $price, $weight ) {
        $sql = "INSERT INTO `all_products` (`sku`, `name`, `price`, `type`, `width`, `height`, `length`, `size`, `weight`) VALUES ('$sku', '$name', '$price', 'book', '', '', '', '', $weight);";
        mysqli_query($GLOBALS['conn'], $sql);
    }

}
