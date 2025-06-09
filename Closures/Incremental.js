// Crie uma função que retorna uma função que, quando chamada, retorna um número incrementado a cada chamada.

function criar() {
    let contador = 0
    return function() {
        contador += 1
        return contador
    }
}

const valor = criar()

console.log(valor())
console.log(valor())

// Caso chame a função sem os (), ela não lerá a função de dentro com a variavel concatenada.