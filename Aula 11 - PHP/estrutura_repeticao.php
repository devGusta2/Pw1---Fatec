<?php
echo "<h2>Laço de repetição</h2>";

for($i = 0; $i<5; $i++){
    echo "Linha $i <br>";
}
$i = 0;
echo "<hr>";
while($i < 7){
    echo "Linha $i <br>";
    $i +=1;
}
echo "<hr>";
$ii = 0;
do{
    echo "Linha $ii <br>";
    $ii +=1;
}while($ii < 10);
?>