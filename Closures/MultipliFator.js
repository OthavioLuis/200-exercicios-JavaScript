// Escreva uma função que recebe um número e retorna uma função que, quando chamada, retorna o número multiplicado por um fator passado como argumento.

function mult(valor) {
    return function(fator) {
        return valor * fator
    }
}

const testeValor = mult(3)

console.log(testeValor(2))

// Se tudo der certo o resultado será 6, o valor 3 é o valor e passamos o 2 como um argumento, que tendo os dois, ele faz a multiplicação