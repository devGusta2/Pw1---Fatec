var div = document.getElementById('minha_div1');

div.addEventListener('mouseover',()=>{
    div.style.backgroundColor='blue';
});
div.addEventListener('mouseout',()=>{
    div.style.backgroundColor='rgb(129, 207, 181)';
});

var text = document.getElementById('entrada');




// quando eu digito alguma coisa ele alerta
text.addEventListener('keyup',(e)=>{
    alert("Tecla pressionada " + e.key);
})

let form = document.getElementById('myform');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ent_nome = document.getElementById('ent_nome').value;
    alert("O nome é " + ent_nome);
    alert("Formulário enviado");
})

//quando o valor de origem é alterado

// let entrada = document.getElementById('entrada2');
// entrada.addEventListener('change', (e)=>{
//     console.log("Valor alterado " + e.target.value)
// })

