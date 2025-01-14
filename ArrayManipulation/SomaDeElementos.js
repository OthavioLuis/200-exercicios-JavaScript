// Crie uma função que recebe um array de números e retorna a soma de todos os elementos.
var inicial = 0
let array = [1, 3, 5, 7, 9, 2, 4, 6, 8]

for (var i = 0; i < array.length; i++) {
    inicial += array[i]
}

console.log(`O resultado do array é ${inicial}`)

//resultado neste array seria de 45