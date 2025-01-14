// Implemente uma função que recebe um array de números e retorna um novo array com os elementos em ordem decrescente.

let array = [3, 6, 1, 2, 5, 9, 4, 8, 7]

array.sort((a, b) => b - a)
for (var i = 0; array > i; i++) {

}

console.log(array)

//O resultado deve ser igual a este: 
// [
//   9, 8, 7, 6, 5,
//   4, 3, 2, 1
// ]