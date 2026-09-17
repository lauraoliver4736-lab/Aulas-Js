// operadores aritmeticos
// + soma
// - subtração
// * multiplicação
// / divisão 
// % sobra da divisão
let n1 = 3;
let n2 = 9;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log((n2 - n1)* 2);
console.log("palavra" + n1);

//crie 3 variaveis, cada uma contendo um numero,
// some as 3 e tire a media, exiba o resultado no console

let n3 = 17;
let n4 = 18;
let n5 = 19;
console.log((n3 + n4 + n5)/ 3);
console.log( "a media de " + n3 + "," + n4 + " e " + n5 + " é " + ((n3 + n4 + n5)/ 3));
// > maior que 
// < menor que 
//== igual
// >= maior ou igual 
// <= menor ou igual 
// ! = é diferente 

//let idade = 18;
//console.log(idade > 18);
//console.log(idade < 18);
//console.log(idade == 18);
//console.log(idade >= 18);
//console.log(idade <= 18);
//console.log(idade != 18);

//console.log(idade === "18");//comparação de tipo de variavel

//console.log(idade <= 18 && habilitado == true);
// v || v = V
// v || f = V
// F || V = V
// F || F = F
let habilitado = false;
//console.log(idade <= 18 || habilitado == false);
//operadores aritmeticos
// ! operador NOT "inverte"
//console.log(!habilitado);

//se idade for igual a 18 anos 
// faça isso

// se não 
// faça isso
if (habilitado == true) {//se sim
    console.log("pode dirigir")
} else {// se não
    console.log("não pode dirigir")
}

let idade = 16;

//if (idade >= 18) {
  //   console.log("maior de idade")
// else {
  //   console.log("menor de idade")
//}

//crie um sistema que compare o valor de uma variavel 
// Senha SE for igual a 1234 escreva no console
// "acesso liberado" SE NÃO escreva "acesso negado" 
let senha = 1934 


if (senha == 1234 ) {
    console.log("acesso liberado")
} else {
     console.log("acesso negado")
}

let nota = 8


if (nota >= 6) {
    console.log("aprovado")
} else {
    console.log("reprovado")
}

let compra = 720



if (compra) {
console.log(compra * 0.8);

} else {
    console.log("compra sem desconto");
    
}

