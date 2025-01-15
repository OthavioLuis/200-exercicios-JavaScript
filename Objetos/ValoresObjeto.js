//Implemente uma função que recebe um objeto e retorna um array com todos os valores do objeto.

var objeto = {
    chave1: "valor1",
    chave2: "valor2",
    chave3: "valor3",
}

function pegarValores(objeto) {
    return Object.values(objeto)
}

var array = pegarValores(objeto)

console.log(array)

//Resposta deve ser igual a: [ 'valor1', 'valor2', 'valor3' ]