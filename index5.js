//Array

//indice -----> 01 <---> 02 <----> 03 <---> 04 <----> 5 <--/
var persona = ['joao', 'lucas', 'pedro', 'jonas', 'eduardo']

//pula uma linha.
console.log()

console.log(persona)

//pula uma linha.
console.log()

//Exemplo com for para imprimir todos os elementos do array.
for (var i = 0; i < persona.length; i++) {
    console.log(persona[i])
}

//pula uma linha.
console.log()

//adiciona um nome no array.
persona.push("eduardo")
persona.push("daniel")

//Exemplo com for para imprimir todos os elementos do array.
for (var i = 0; i < persona.length; i++) {
    console.log("indice: " , i , ", nome:" , persona[i])
}

//pula uma linha.
console.log()

//remover um nome do array.
persona.pop("daniel")

/*
    ^
    |    
também posso utilizar pop(), sem passar um elemento e então ele remove o ultimo da fila.
EX: persona.pop()
*/

//pula uma linha.
console.log()

//coloca um novo elemento no inicio do array.
persona.unshift('tania')

//Exemplo com for para imprimir todos os elementos do array.
for (var i = 0; i < persona.length; i++) {
    console.log("indice: " , i , ", nome:" , persona[i])
}

//pula uma linha.
console.log()

//remove o primeiro elemento do array.
persona.shift()

//Exemplo com for para imprimir todos os elementos do array.
for (var i = 0; i < persona.length; i++) {
    console.log("indice: " , i , ", nome: " , persona[i])
}

//pula uma linha.
console.log()

/*
remove a partir do indice 0 os próximos 2 elementos do array, no caso o elemento inicial que foi passado [0] e o elemento
na posição [1], totalizando os dois elementos.
*/
persona.splice(0, 2)
console.log(persona)

//pula uma linha.
console.log()

//retorna um boolean, se tiver o elemento no array retorna true se não false.
console.log("Existe a palvra eduardo no array: " + persona.includes("eduardo"))

//pula uma linha.
console.log()

//retorna o indice do vetor, buscando pelo valor ou nome da string dentro do indice, se caso o o nome a ser buscado no
//retorna -1.
console.log("Posição no array: " + persona.indexOf("eduardo"))

//pula uma linha.
console.log()

//a função sort(), retorna os elementos do array em ordem alfabética ou numérica.
var ordemAlfabetica = persona.sort()
console.log(ordemAlfabetica)

//exemplo com números.
var numerosDaSorte = [22,45,-54,85,69,1]

//pula uma linha.
console.log()

var ordemNumerica = numerosDaSorte.sort()
console.log(ordemNumerica)