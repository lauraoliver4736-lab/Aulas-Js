const formulario= document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");


const nomeresultado = document.getElementById("nomeResultado")
const dataresultado = document.getElementById("dataResultado")
const idaderesultado = document.getElementById("idadeResultado")
const boxresultado = document.getElementById("resultado")


formulario.addEventListener("submit", function(event ){
 event.preventDefault(); // Impede que a tela recarregue

//pegar o valor dos inputs
const valornome = nome.value;
const valornascimento = nascimento.value;

// console.log(valornome);
// console.log(valornascimento);

//separa a data em 3 valores

const dataseparada= valornascimento.split("-");

console.log(dataseparada);

//Armazena as datas separadas em formato numerico
const anoNascimento = Number(dataseparada[0])
const mesNascimento = Number(dataseparada[1])
const diaNascimento = Number(dataseparada[2])

//Pega a data de hoje do sistema
const hoje = new Date();

 const anoAtual = hoje.getFullYear(); //pega somente o ano
const mesatual = hoje.getMonth() +1;// pega somente o mes
const diaatual = hoje.getDate();// pega o dia

console.log(hoje);
console.log(anoAtual);
console.log(mesatual);
console.log(diaatual);


let idade = anoAtual - anoNascimento;



if (mesNascimento > mesatual) {
    idade = idade - 1;
}


console.log(idade)

if (mesatual == mesNascimento && diaatual < diaNascimento ) {
   
} else {
    console.log( idade = idade);
    
}

const dataformatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;


//Inserindo os valores nos elementos HTML
nomeresultado.textContent = valornome;
dataformatada.textContent = dataformatada;
idaderesultado.textContent = idade;

//Exibindo o elemento com as informações 
boxresultado.style.display = "block";









})


