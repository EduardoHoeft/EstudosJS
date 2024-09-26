
var senha = "edu123"

/*
//contar quantas letras tem a string e retorna por ex: 7.
console.log(senha.length)
*/

var nome = "    Eduardo Hoeft   "

/*
//retorna o nome em minúscilo.
console.log(nome.toLowerCase())
//retorna o nome em maiúsculo.
console.log(nome.toUpperCase())


//remove espaços no início e fim da string.
console.log(nome.trim())
*/

/*
substitui uma string de outra variável, mas se o nome passado a sersubtituido não  for mesmo
a função retorna a string original e se a string que for alterada eu quiser alterar apenas o primeiro
nome também consigo.
*/

//alterando o nome completo:
var novoNome = nome.replace('eduardo hoeft', 'Anderson lima')

//alterando apenas o sobrenome:
var novoNome = nome.replace('hoeft', 'lima')

//alterando apenas o primeiro nome:
var novoNome = nome.replace('eduardo', 'Anderson')

/*
nesse exemplo abaixo como o nome declarado está com E maiúsculo e parametro passado na função replace está com (e)
minúsculo a função retorna a string origiral e não interpreta o parametro passado.

var novoNome2 = nome.replace('eduardo', 'Anderson') //não ajustado.
var novoNome = nome.toLowerCase().replace('eduardo', 'Anderson') //ajustado.

console.log(novoNome)
console.log(novoNome2)
*/

/*
includes
O método includes retorna um boolean se caso na string houver o parametro passado dentro do método do includes()
ele retorna TRUE se não retorna FALSE.
*/

var buscarSobrenome = nome.toLowerCase().includes('hoeft')

//console.log(buscarSobrenome)

