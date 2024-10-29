// teste de variaveis
// atribuindo valores
let idade = 25;
console.log(idade);

// modificando valores
idade = 20;
console.log(idade);

//recuperando valores

idade +=1;
console.log(idade);

//var ou let ou const


function exemploVar(){
    var x = 5;
    if(true){
        var x = 10;
        console.log(x);
    }
    console.log(x);
}
// let nao permite a redeclaração em um escopo
function exemploLet(){
    let x = 5;
    if(true){
        let x = 10;
        console.log(x);
    }
    console.log(x);
}

// chamando as funções para a execução
exemploLet();
exemploVar();