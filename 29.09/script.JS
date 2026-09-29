// let produto = "Shampoo"
// let produtos = ["Shampoo", "vassoura"];
// let produto1 = {
//     nome: "Shampoo",
//     valor: 20.50,
//     descricao: "Shampoo anti caspa"
// }

// console.log(produto1);
// console.log(produto1.nome);
// produto1.descricao = "Shampoo muito cheiroso"
// console.log(produto1.descricao);

// Exercicio 1
// Exiba os atributos do produto utilizando o console log
// Produto:shampoo - Valor: R$20,50 - descricao: Shampoo muito cheiroso

 let produto = "Shampoo,"
 let produto1 = {
    nome: "Shampoo",
     valor: "R$",
     valor1: 20.50,
     descricao: "Shampoo muito cheiroso."
 }
 console.log(produto,produto1.valor,produto1.valor1,produto1.descricao);
console.log("produto: " + produto1.nome + "- Valor: "+ produto1.valor + produto1.valor1 + " - Descricao: " + produto1.descricao);

// Ex 2 
// crie um objeto aluno, com os atributos nome,idade e curso
// Exiba no console a frase
// Aluno: (nome do aluno) - idade: (idade do aluno) - Cursando: (nome do curso)

let Aluno = {
    nome: "Laurao auruda",
idade: "15",
cursando:"curso de java script - JS"
}
console.log("nome: " + Aluno.nome + "- idade: "+ Aluno.idade + " cursando " + Aluno.cursando);

//  Ex 3 
let produtos = ["teclado","Mouse","Monitor","headset","webcam"
]
//  console.log("produto 1: " + produtos[0]);
//  console.log(produtos [1]);
//  console.log(produtos [2]);
//  console.log(produtos [3]);
//  console.log(produtos [4]);
 
 for(let index = 0; index < produtos.length; index++){
console.log("produto " + (index+1) + ":" + produtos[index]);

 }
 
