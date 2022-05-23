<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

class Connection {
    public $host = "localhost";
    public $user = "root";
    public $password = "";
    public $dbname = "products";

    // $host = "localhost";
    // $user = "id18932693_amr";
    // $password = "j(P%MC8xlt24xK^w";
    // $dbname = "id18932693_products";

    public function connectDB()
    {
        try {
            $conn = mysqli_connect($this->host, $this->user, $this->password, $this->dbname);
            return $conn;
        } catch (\Throwable $th) {
            echo $th;
        }
        
    }
}