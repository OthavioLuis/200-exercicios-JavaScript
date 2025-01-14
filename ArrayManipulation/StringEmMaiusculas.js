// Escreva uma função que recebe um array de strings e retorna um novo array com todas as strings em maiúsculas.

let arrayString = ['Othavio',' Luis',' Rodrigues']

let maiusculas = arrayString.map((str) => str.toUpperCase()) //aqui ele cria um novo array com o map()

console.log(maiusculas)

//O resultado deverá ser este: [ 'OTHAVIO', ' LUIS', ' RODRIGUES' ]