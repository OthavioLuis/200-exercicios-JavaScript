// Crie um objeto que represente uma pessoa, com propriedades como nome, idade e profissão. Em seguida, crie uma função que imprime uma mensagem com essas informações.

var pessoa = {
    nome: "Othavio",
    idade: 20,
    profissao: "Analista de Banco de dados",
}

function imprimirPessoa(pessoa) {
    console.log(`Usuário ${pessoa.nome} com ${pessoa.idade} anos, é ${pessoa.profissao}.`) 
}

imprimirPessoa(pessoa)

//a resposta na função seria: Usuário Othavio com 20 anos, é Analista de Banco de dados.