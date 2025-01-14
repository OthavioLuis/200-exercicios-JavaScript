// Escreva uma função que recebe um array de números e retorna a média dos valores.

var array = [ 2, 5, 6, 11, 14, 43, 22, 76, 43, 78, 91 ]
var soma = 0

for (var i = 0; i < array.length; i++) {
    soma += array[i]
}
var media = soma / array.length

console.log(media)

//A resposta tem que ser 35.54545454545455
//console.log(Max.Floor(media)) arredondaria o resultado ficando 35