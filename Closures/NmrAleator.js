// Implemente uma função que retorna uma função que, quando chamada, retorna um número aleatório entre 1 e 100.

function aleatorio() {
    return function() {
        return Math.floor(Math.random() * 100) + 1
    }
}

const obterNmr = aleatorio()

console.log(obterNmr())

// Quando ele diz "uma função que retorna uma função" já entende que teremos uma função dentro de outra e as duas com "return"