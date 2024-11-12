<?php
    
    function somar($a, $b){
        return $a+$b;
    }
    function subtrair($a, $b){
        return $a+$b;
    }
    // function multiplicar($a, $b){
    //     return $a*$b;
    // }
    // function dividir($a, $b){
    //     return $a/+$b;
    // }
    echo "<h2>Funções com retorno</h2>";
    echo (somar(10,2));
    echo "<hr>";
    echo (subtrair(10,7));
    echo "<h2>Funções sem retorno</h2>";


     
    function somar1($a, $b){
     echo $a+$b;
    }

    echo (somar1(3,7));
?>