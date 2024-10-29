function estruturaCondicional(){
    let idade = prompt("Digite sua idade");
     //condicional simples
    if(idade >=18){
        alert("Maior de idade");
    }
    
}

function estruturaCondicionalComposta(){
    let idade = prompt("Digite sua idade");
     //condicional simples com else
    if(idade >=18){
        alert("Maior de idade");
    }else{
        alert("Menor de idade");
    }
    
}

function estruturaComposta(){
    // se , se nao se, senao
    let idade = prompt("Digite sua idade");
    if(idade>65){
        alert("Idoso");
    }else if(idade >= 18 && idade < 65){
        alert("Adulto");
    }else if(idade >=12 && idade <18){
        alert("Adolescente");
    }else{
        alert("Criança");
    }
}



function estruturaDeCaso(){
    // Switch case; 
    let idade = prompt("Digite sua idade");
    switch(idade){
        case idade > 65:
            alert("Idoso");
            break;

        case idade >17:
            alert("Adulto");
            break;

        case idade >12 && idade<18:
            alert("Adolescente");
            break;
        
        case idade <13:
            alert("Criança");
            break;
    }
}

// estruturaCondicional();
// estruturaCondicionalComposta();
estruturaComposta();

