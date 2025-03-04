// Escreva uma função que recebe um número e retorna uma função que, quando chamada, retorna o número multiplicado por 2.

function multiplicar(valor) {
    return function() {
        return valor * 2
    } 
}

const funcao = multiplicar(2)

console.log(funcao())

//se não por os parenteses ao chamar neste console ou em outro lugar, estaremos 'referenciando uma função', mas quando colocamos os parenteses (), estamos executando a função