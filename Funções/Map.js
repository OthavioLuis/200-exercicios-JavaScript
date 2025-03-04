// Implemente uma função que recebe um array e uma função de callback, e retorna um novo array com os resultados da função de callback aplicada a cada elemento.

function mapearArray(array, callback) {
    const novoArray = []
    for (let i = 0; i < array.length; i++) {
        novoArray.push(callback(array[i]))
    }
    return novoArray
}

function paraMaiusculas(texto) {
    return texto.toUpperCase()
}

const frase = ['Difícil','de', 'Entender']
const resultadoCallback = mapearArray(frase, paraMaiusculas)

console.log(resultadoCallback)