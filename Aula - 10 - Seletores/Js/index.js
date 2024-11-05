//query selector é usado par apegar elemeto do proprio html ou class ou

//selectionamos os elemtos no HTML

const titulo = document.getElementById("titulo");
const text = document.querySelector(".texto");
const botao = document.getElementById("botao");

botao.addEventListener("click", ()=>{
    alert('Php is better');
    document.querySelector(".texto").style.color = "blue";
});


//manipulando conteudo e estilos
// titulo.textContent = "Aula com o DOM em JS";
// titulo.innerHTML = "<strong>Texto escuro</strong>";

// text.style.fontSize = "20px";


//Manipulando elementos
//criando um elemento
const novoParagrafro = document.createElement('p')

novoParagrafro.textContent = "Meu novo paragrafo"
document.body.appendChild(novoParagrafro)

const div = document.getElementsByClassName("textoInicio")
document.div.append(div);