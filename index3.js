//declara uma função e usa o return para armazenar o resultado em uma variável
function CalcularImc(recebe_peso, recebe_altura){
    var imc = peso / (altura * altura)
    return imc
}
//declarando variáveis de entrada
var peso = 80
var altura = 1.65

//retorna o resultado da função e imprime na tela
var imcGabriel = CalcularImc(peso, altura)
console.log(imcGabriel)