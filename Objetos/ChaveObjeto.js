//Escreva uma função que recebe um objeto e retorna um array com todas as chaves do objeto.

var objeto = {
    chave1: "resultado 1",
    chave2: "resultado 2",
    chave3: "resultado 3",
}

function pegarChave(objeto) {
    return Object.keys(objeto)
}

var array = pegarChave(objeto)

console.log(array)

//resposta deve ser igual a: [ 'chave1', 'chave2', 'chave3' ]