<?php

    $idade = 18;
    //exemplo com if
    if($idade >= 18){
        echo "Maior de idade";
    }
    echo "<hr>";
    //exemplo com else
    $idade = 11;
    if($idade >= 18){
        echo "Maior de idade";
    }else{
        echo "Menor de idade";
    }
    echo "<hr>";
    //exemplo com IF ELSE IF
    $idade = 11;
    if($idade >= 18){
        echo "Adulto";
    }else if($idade >=12){
        echo "Adolescente";
    }else{
        echo "Criança";
    }
    echo "<hr>";
    //switch
    $dia = 1;
    switch($dia){
        case 1:
            echo "Domingo";
            break;
        case 2:
            echo "Segunda-feira";
            break;
        case 3:
            echo "Terça-feira";
            break;
        case 4:
            echo "Quarta-feira";
            break;
        case 5:
            echo "Quinta-feira";
            break;
        case 6:
            echo "Sexta-feira";
            break;
        case 7:
            echo "Sábado";
            break;
        default:
            echo "Dia inválido";
    }

    echo "<hr>";
    $res = ($idade >=18) ? 'Maior de idade': 'Menor de idade';
    echo $res;
?>