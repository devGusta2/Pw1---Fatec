<?php

    echo "Olá";
    //var_dump - exibe uma array
    //print_r - imprime arrays e strings

    $veiculo = array("Gol", "Uno", "Celta", "Corsa", "Palio");
    echo "<br>";
    // imprime a tipagem
    echo "<h3>Imprimindo com VAR dump</h3>";
    var_dump($veiculo);
    echo "<br>";    
    //mais simples
    print_r($veiculo);
?>