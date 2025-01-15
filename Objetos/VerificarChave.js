//Escreva uma função que recebe um objeto e uma chave, e retorna `true` se a chave existir no objeto, caso contrário, retorna `false`.

var objeto = {
    nome: 'Othavio',
    email: 'othavio@gmail.com',
    idade: 20,
}

function verificarChave(objeto, chave) {
    return objeto.hasOwnProperty(chave)
}

console.log(verificarChave(objeto, "email"))

//Resposta deve retornar true pois email existe dentro do objeto