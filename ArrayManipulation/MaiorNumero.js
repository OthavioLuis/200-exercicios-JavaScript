// Crie uma função que recebe um array de números e retorna o maior número.

var array = [ 2, 7, 13, 4, 1, 3, 8, 5, 9, 11 ]
var maior = Math.max.apply(null, array) // apply(null, variavel) "transforma" o array em argumentos individuais para Math.max

console.log(maior)

//A resposta será 13