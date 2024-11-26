<?php
    namespace config;
    use PDO;
    use PDOException;
    class connection{
        private $host = "localhost";
        private $password = '';
        private $database = 'fatecFv';
        private $user = 'root';

        public $conn;

        public function getConn(){
            try{
            this->conn = new PDO("mysql:host=$this->host; 
            dbname=$this->database,$this->user, $this->password");
            this->conn->execute("set names utf8");
            }catch(PDOException $error){
                echo "Erro:".$error->getMessage();
            }
        }
    }




?>