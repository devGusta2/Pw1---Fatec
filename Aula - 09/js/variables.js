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
    let mista = ['gol',5,1.99,true,false];
    console.log(mista);

    // nulo
    let nulo =  null;
    console.log(nulo);

    // Desconhecido

    let desc;
    console.log(desc);
}
// chamando as funções para a execução
exemploLet();
exemploVar();
exemploConsts();