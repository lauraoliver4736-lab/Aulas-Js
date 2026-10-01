const formulario= document.getElementById("formulario");

const nome = document.getElementById("nome");
const peso = document.getElementById("peso");

const nomeresultado = document.getElementById("nomeResultado")
const pesoresultado = document.getElementById("pesoResultado")
const alturaresultado = document.getElementById("alturaResultado")
const boxResultado = document.getElementById("resultado")


formulario.addEventListener("submit", function(event ){
 event.preventDefault(); // Impede que a tela recarregue



const valornome = nome.value;
const valorpeso = peso.value;
const valoraltura = altura.value



console.log(valornome);
console.log(valorpeso);
console.log(valoraltura);
 
let IMC =  valorpeso / (valoraltura * valoraltura)

if (IMC < 18.5) {
    console.log("Abaixo do Peso");
    
} else if ( IMC > 18.5 && IMC < 25) {
    console.log("peso normal");
    
}
 else if (IMC > 25 && IMC < 30) {
    console.log("acima do peso");
    
}
 else if (IMC > 25 &&  IMC < 30 ) {
    console.log("Gordao");
    
}
else if (IMC > 30 && IMC < 35 ){
    console.log("Imenso ");
    
}

nomeresultado.textContent = valornome;
pesoresultado.textContent = valorpeso;
alturaresultado.textContent = valoraltura;

boxResultado.style.display = "block";



})



























