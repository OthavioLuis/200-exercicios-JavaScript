// Crie uma função que retorna uma função que, quando chamada, retorna o próximo número da sequência de Fibonacci.

function Fibonacci() {
    let a = 0, b = 1;

    return function() {
        const proximo = a;
        a = b;
        b = proximo + b;
        return proximo
    }
}

const pegarValor = Fibonacci()

console.log(pegarValor())
console.log(pegarValor())
console.log(pegarValor())
console.log(pegarValor())
console.log(pegarValor())