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

// essa função dará erro pois nao é possível reatribuir valores para
// constantes
function exemploConsts(){
    const x = 5;
    // const y , não existe const vazia, é necessário inicializar
    if(true){
        const x = 10;
        console.log(x);
    }
    x = 15;
    console.log(x);
}
function tipoVariaveis(){
    let idade = 25;
    let peso  = 80.00;
}
// chamando as funções para a execução
exemploLet();
exemploVar();
exemploConsts();