//Crie uma função que recebe dois objetos e retorna `true` se eles tiverem as mesmas propriedades e valores, caso contrário, retorna `false`.

var objeto1 = {
    chave1: "valor1",
    chave2: "valor2",
    chave3: "valor3",
}

var objeto2 = {
    chave1: "valor1",
    chave2: "valor2",
    chave3: "valor3",
}

function compararObjetos(objeto1, objeto2) {
    const obj1 = Object.keys(objeto1)
    const obj2 = Object.keys(objeto2)

    if (obj1.length !== obj2.length) {
        return false
    }

    for (let chave of obj1) {
        if (objeto1[chave] !== objeto2[chave]) {
            return false
        }
    }
    return true
}

console.log(compararObjetos(objeto1, objeto2))

//deverá retornar true se este código for rodado com esses mesmos valores de objetos