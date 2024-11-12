<?php
    
    class Veiculo{
        private $modelo;
        private $marca;
        private $cor;
        private $ano;

        public $preço;
        public $status;
        

        //o construtor recebe __construct()

        public function __construct($modelo, $marca, $cor, $ano, $preco, $status){
            $this->modelo = $modelo;
            $this->marca = $marca;
            $this->cor = $cor;
            $this->ano = $ano;
            $this->preco = $preco;
            $this->status = $status;
        }

        public function setMarca($marca){
            $this->marca = $marca;
        }
        public function getMarca(){
            return $this->marca;
        }
    }
    $ford =  new Veiculo("EcoSport", "Ford", "Prata", "2024", 120.000, "Disponível");
    echo $ford->getMarca();
?>