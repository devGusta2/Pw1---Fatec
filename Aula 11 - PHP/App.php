<?php

    include('Veiculo.php');

    $ford =  new Veiculo("EcoSport", "Ford", "Prata", "2024", 120.000, "Disponível");
    echo $ford->getMarca();
?>

