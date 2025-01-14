# Exercícios de JavaScript: Intermediário ao Avançado

Este repositório contém uma lista de 200 exercícios de JavaScript, variando do nível intermediário ao avançado. Os exercícios cobrem uma variedade de tópicos, incluindo manipulação de arrays, objetos, funções assíncronas, closures, promises, async/await, manipulação do DOM, e muito mais.

## Nível Intermediário

### 1. Array Manipulation
1. **Soma de Elementos**: Crie uma função que recebe um array de números e retorna a soma de todos os elementos.
2. **Strings em Maiúsculas**: Escreva uma função que recebe um array de strings e retorna um novo array com todas as strings em maiúsculas.
3. **Ordenação Decrescente**: Implemente uma função que recebe um array de números e retorna um novo array com os elementos em ordem decrescente.
4. **Maior Número**: Crie uma função que recebe um array de números e retorna o maior número.
5. **Média dos Valores**: Escreva uma função que recebe um array de números e retorna a média dos valores.

### 2. Objetos
1. **Objeto Pessoa**: Crie um objeto que represente uma pessoa, com propriedades como nome, idade e profissão. Em seguida, crie uma função que imprime uma mensagem com essas informações.
2. **Chaves do Objeto**: Escreva uma função que recebe um objeto e retorna um array com todas as chaves do objeto.
3. **Valores do Objeto**: Implemente uma função que recebe um objeto e retorna um array com todos os valores do objeto.
4. **Comparação de Objetos**: Crie uma função que recebe dois objetos e retorna `true` se eles tiverem as mesmas propriedades e valores, caso contrário, retorna `false`.
5. **Verificação de Chave**: Escreva uma função que recebe um objeto e uma chave, e retorna `true` se a chave existir no objeto, caso contrário, retorna `false`.

### 3. Funções
1. **Callback com Atraso**: Crie uma função que recebe uma função de callback e a executa após 2 segundos.
2. **Multiplicação por 2**: Escreva uma função que recebe um número e retorna uma função que, quando chamada, retorna o número multiplicado por 2.
3. **Map Personalizado**: Implemente uma função que recebe um array e uma função de callback, e retorna um novo array com os resultados da função de callback aplicada a cada elemento.
4. **Incremento por 1**: Crie uma função que recebe um número e retorna uma função que, quando chamada, retorna o número incrementado por 1.
5. **Execução Condicional**: Escreva uma função que recebe uma função de callback e a executa apenas se uma condição for verdadeira.

### 4. Closures
1. **Contador Incremental**: Crie uma função que retorna uma função que, quando chamada, retorna um número incrementado a cada chamada.
2. **Multiplicação por Fator**: Escreva uma função que recebe um número e retorna uma função que, quando chamada, retorna o número multiplicado por um fator passado como argumento.
3. **Número Aleatório**: Implemente uma função que retorna uma função que, quando chamada, retorna um número aleatório entre 1 e 100.
4. **Sequência de Fibonacci**: Crie uma função que retorna uma função que, quando chamada, retorna o próximo número da sequência de Fibonacci.
5. **Quadrado de um Número**: Escreva uma função que recebe um número e retorna uma função que, quando chamada, retorna o número elevado ao quadrado.

### 5. Manipulação do DOM
1. **Adicionar Parágrafo**: Crie uma função que adiciona um novo parágrafo com texto "Hello, World!" ao final de um elemento `div` com id `container`.
2. **Alterar Cor de Fundo**: Escreva uma função que altera a cor de fundo de um elemento com id `box` para vermelho.
3. **Evento de Clique**: Implemente uma função que adiciona um evento de clique a um botão com id `btn` que exibe um alerta com a mensagem "Botão clicado!".
4. **Remover Elementos Filhos**: Crie uma função que remove todos os elementos filhos de um elemento com id `list`.
5. **Adicionar Item à Lista**: Escreva uma função que adiciona uma nova linha (`<li>`) a uma lista (`<ul>`) com id `list` contendo o texto "Novo item".

## Nível Avançado

### 6. Promises
1. **Promise Simples**: Crie uma função que retorna uma Promise que resolve após 1 segundo com a mensagem "Resolvido!".
2. **Promise.all**: Escreva uma função que recebe um array de Promises e retorna uma Promise que resolve quando todas as Promises no array forem resolvidas.
3. **Promise com Atraso**: Implemente uma função que recebe um número e retorna uma Promise que resolve após o número de segundos especificado.
4. **Timeout de Promise**: Crie uma função que recebe uma Promise e um tempo limite (em milissegundos), e retorna uma Promise que rejeita se a Promise original não for resolvida dentro do tempo limite.
5. **Promise.race**: Escreva uma função que recebe um array de Promises e retorna uma Promise que resolve com o resultado da primeira Promise que for resolvida.

### 7. Async/Await
1. **Função Assíncrona com Atraso**: Crie uma função assíncrona que espera 2 segundos e então retorna a string "Finalizado!".
2. **Requisição HTTP Assíncrona**: Escreva uma função assíncrona que faz uma requisição HTTP para uma API e retorna os dados em formato JSON.
3. **Requisições HTTP em Paralelo**: Implemente uma função assíncrona que recebe um array de URLs e faz requisições HTTP para cada URL, retornando um array com os dados de todas as requisições.
4. **Tratamento de Erros em Async/Await**: Crie uma função assíncrona que faz uma requisição HTTP e, se a resposta for bem-sucedida, retorna os dados; caso contrário, lança um erro.
5. **Requisições HTTP em Paralelo com Async/Await**: Escreva uma função assíncrona que faz várias requisições HTTP em paralelo e retorna os dados apenas quando todas as requisições forem concluídas.

### 8. Manipulação de Arrays Avançada
1. **Ordenação de Objetos**: Crie uma função que recebe um array de objetos e retorna um novo array com os objetos ordenados por uma propriedade específica.
2. **Números Únicos**: Escreva uma função que recebe um array de números e retorna um novo array com os números únicos (sem duplicatas).
3. **Filtro de Strings**: Implemente uma função que recebe um array de strings e retorna um novo array com as strings que têm mais de 5 caracteres.
4. **Múltiplos de 3**: Crie uma função que recebe um array de números e retorna um novo array com os números que são múltiplos de 3.
5. **Filtro de Objetos**: Escreva uma função que recebe um array de objetos e retorna um novo array com os objetos que têm uma propriedade específica com um valor específico.

### 9. Manipulação de Strings Avançada
1. **Inversão de String**: Crie uma função que recebe uma string e retorna a string invertida.
2. **Verificação de Palíndromo**: Escreva uma função que recebe uma string e retorna `true` se a string for um palíndromo, caso contrário, retorna `false`.
3. **Contagem de Vogais**: Implemente uma função que recebe uma string e retorna a quantidade de vogais na string.
4. **Alternância de Maiúsculas e Minúsculas**: Crie uma função que recebe uma string e retorna a string com todas as letras maiúsculas alternadas com minúsculas.
5. **Inversão de Palavras**: Escreva uma função que recebe uma string e retorna a string com todas as palavras invertidas.

### 10. Manipulação de Datas
1. **Formatação de Data**: Crie uma função que recebe uma data e retorna a data formatada como "DD/MM/AAAA".
2. **Diferença de Datas**: Escreva uma função que recebe duas datas e retorna a diferença em dias entre elas.
3. **Próximo Dia Útil**: Implemente uma função que recebe uma data e retorna a data do próximo dia útil (ignorando fins de semana).
4. **Cálculo de Idade**: Crie uma função que recebe uma data e retorna a idade de uma pessoa com base na data de nascimento.
5. **Dia da Semana**: Escreva uma função que recebe uma data e retorna o dia da semana correspondente.

### 11. Manipulação de Eventos
1. **Evento de Clique com Mudança de Cor**: Crie uma função que adiciona um evento de clique a um botão que altera a cor de fundo de um elemento `div`.
2. **Evento de Teclado**: Escreva uma função que adiciona um evento de teclado a um campo de entrada que exibe o valor digitado em um elemento `span`.
3. **Evento de Mouseover**: Implemente uma função que adiciona um evento de mouseover a um elemento que exibe uma mensagem quando o mouse passa sobre ele.
4. **Evento de Submit**: Crie uma função que adiciona um evento de submit a um formulário que impede o envio se um campo estiver vazio.
5. **Evento de Double-Click**: Escreva uma função que adiciona um evento de double-click a um elemento que remove o elemento do DOM.

### 12. Manipulação de JSON
1. **Conversão de Objeto para JSON**: Crie uma função que converte um objeto JavaScript em uma string JSON.
2. **Conversão de JSON para Objeto**: Escreva uma função que converte uma string JSON em um objeto JavaScript.
3. **Requisição HTTP com JSON**: Implemente uma função que faz uma requisição HTTP para uma API e retorna os dados em formato JSON.
4. **Salvar Objeto como JSON**: Crie uma função que recebe um objeto JavaScript e salva ele como um arquivo JSON.
5. **Leitura de Arquivo JSON**: Escreva uma função que lê um arquivo JSON e retorna o conteúdo como um objeto JavaScript.

### 13. Manipulação de Erros
1. **Lançamento de Erro**: Crie uma função que lança um erro se um número for negativo.
2. **Captura de Erro em Promise**: Escreva uma função que captura um erro lançado por uma Promise e exibe uma mensagem de erro.
3. **Valor Padrão em Caso de Erro**: Implemente uma função que tenta executar uma operação e, se falhar, retorna um valor padrão.
4. **Erro Personalizado**: Crie uma função que lança um erro personalizado com uma mensagem específica.
5. **Tentativas Múltiplas**: Escreva uma função que tenta executar uma operação várias vezes antes de lançar um erro.

### 14. Manipulação de Módulos
1. **Exportação de Função**: Crie um módulo que exporta uma função que retorna a soma de dois números.
2. **Exportação de Objeto Utilitário**: Escreva um módulo que exporta um objeto com várias funções utilitárias, como soma, subtração, multiplicação e divisão.
3. **Exportação de Classe**: Implemente um módulo que exporta uma classe `Person` com propriedades como nome e idade.
4. **Exportação de Função Assíncrona**: Crie um módulo que exporta uma função que faz uma requisição HTTP e retorna os dados em formato JSON.
5. **Exportação de Promise**: Escreva um módulo que exporta uma função que retorna uma Promise que resolve após um tempo especificado.

### 15. Manipulação de Classes
1. **Classe Car**: Crie uma classe `Car` com propriedades como `make`, `model`, e `year`, e métodos como `start` e `stop`.
2. **Classe Person**: Escreva uma classe `Person` com propriedades como `name` e `age`, e um método que retorna a idade da pessoa em dias.
3. **Classe BankAccount**: Implemente uma classe `BankAccount` com propriedades como `balance` e métodos como `deposit` e `withdraw`.
4. **Classe Animal**: Crie uma classe `Animal` com propriedades como `name` e `sound`, e um método que faz o animal emitir seu som.
5. **Classe Rectangle**: Escreva uma classe `Rectangle` com propriedades como `width` e `height`, e métodos que calculam a área e o perímetro.

### 16. Manipulação de Protótipos
1. **Protótipo Person**: Crie um protótipo de um objeto `Person` com propriedades como `name` e `age`.
2. **Protótipo Car**: Escreva um protótipo de um objeto `Car` com métodos como `start` e `stop`.
3. **Protótipo BankAccount**: Implemente um protótipo de um objeto `BankAccount` com métodos como `deposit` e `withdraw`.
4. **Protótipo Animal**: Crie um protótipo de um objeto `Animal` com métodos que fazem o animal emitir seu som.
5. **Protótipo Rectangle**: Escreva um protótipo de um objeto `Rectangle` com métodos que calculam a área e o perímetro.

### 17. Manipulação de Iteradores
1. **Iterador de Números**: Crie um iterador que retorna os números de 1 a 10.
2. **Iterador de Números Pares**: Escreva um iterador que retorna os números pares de 1 a 20.
3. **Iterador de Fibonacci**: Implemente um iterador que retorna os números da sequência de Fibonacci.
4. **Iterador de Números Primos**: Crie um iterador que retorna os números primos de 1 a 100.
5. **Iterador Reverso**: Escreva um iterador que retorna os números de uma lista em ordem reversa.

### 18. Manipulação de Generators
1. **Generator de Números**: Crie um generator que retorna os números de 1 a 10.
2. **Generator de Números Pares**: Escreva um generator que retorna os números pares de 1 a 20.
3. **Generator de Fibonacci**: Implemente um generator que retorna os números da sequência de Fibonacci.
4. **Generator de Números Primos**: Crie um generator que retorna os números primos de 1 a 100.
5. **Generator Reverso**: Escreva um generator que retorna os números de uma lista em ordem reversa.

### 19. Manipulação de Map, Filter, Reduce
1. **Map para Dobrar Números**: Crie uma função que usa `map` para dobrar todos os números em um array.
2. **Filter para Números Pares**: Escreva uma função que usa `filter` para retornar apenas os números pares de um array.
3. **Reduce para Soma**: Implemente uma função que usa `reduce` para calcular a soma de todos os números em um array.
4. **Map para Converter Strings em Números**: Crie uma função que usa `map` para converter um array de strings em um array de números.
5. **Filter para Strings Longas**: Escreva uma função que usa `filter` para retornar apenas as strings que têm mais de 5 caracteres.

### 20. Manipulação de Sets
1. **Criação de Set**: Crie um `Set` a partir de um array de números e retorne o tamanho do `Set`.
2. **Set com Números Únicos**: Escreva uma função que recebe um array de números e retorna um `Set` com os números únicos.
3. **União de Sets**: Implemente uma função que recebe dois `Sets` e retorna a união deles.
4. **Interseção de Sets**: Crie uma função que recebe dois `Sets` e retorna a interseção deles.
5. **Diferença de Sets**: Escreva uma função que recebe dois `Sets` e retorna a diferença entre eles.

## Desafios Finais

### 21. Desafios de Lógica
1. **Torre de Hanói**: Implemente uma função que resolve o problema da Torre de Hanói.
2. **Labirinto**: Escreva uma função que resolve o problema do labirinto usando backtracking.
3. **N-Rainhas**: Crie uma função que resolve o problema das N-rainhas.
4. **Caixeiro-Viajante**: Implemente uma função que resolve o problema do caixeiro-viajante.
5. **Subsequência Comum Mais Longa**: Escreva uma função que resolve o problema da subsequência comum mais longa.

### 22. Desafios de Performance
1. **Fatorial com Memoização**: Crie uma função que calcula o fatorial de um número usando memoização.
2. **Fibonacci com Memoização**: Escreva uma função que calcula a sequência de Fibonacci usando memoização.
3. **QuickSort**: Implemente uma função que ordena um array de números usando o algoritmo QuickSort.
4. **MergeSort**: Crie uma função que ordena um array de números usando o algoritmo MergeSort.
5. **Divisão e Conquista**: Escreva uma função que encontra o maior número em um array usando divisão e conquista.

### 23. Desafios de Algoritmos
1. **Maior Número com Recursão**: Implemente uma função que encontra o maior número em um array usando recursão.
2. **Menor Número com Recursão**: Escreva uma função que encontra o menor número em um array usando recursão.
3. **Verificação de Ordenação com Recursão**: Crie uma função que verifica se um array está ordenado usando recursão.
4. **Inversão de Array com Recursão**: Implemente uma função que inverte um array usando recursão.
5. **Soma de Array com Recursão**: Escreva uma função que calcula a soma de todos os números em um array usando recursão.

### 24. Desafios de Estruturas de Dados
1. **Pilha com Arrays**: Implemente uma pilha (stack) usando arrays.
2. **Conversão de Decimal para Binário**: Escreva uma função que converte um número decimal para binário usando uma pilha.
3. **Fila com Arrays**: Crie uma fila (queue) usando arrays.
4. **Lista Ligada**: Implemente uma lista ligada (linked list) em JavaScript.
5. **Inversão de Lista Ligada**: Escreva uma função que inverte uma lista ligada.

### 25. Desafios de Programação Funcional
1. **Aplicação de Função**: Crie uma função que recebe uma função e um valor, e retorna uma nova função que aplica a função original ao valor.
2. **Map Personalizado**: Escreva uma função que recebe uma função e um array, e retorna um novo array com a função aplicada a cada elemento.
3. **Reduce Personalizado**: Implemente uma função que recebe uma função e um valor inicial, e retorna uma função que acumula os resultados da função aplicada a cada elemento de um array.
4. **Atraso na Execução**: Crie uma função que recebe uma função e um valor, e retorna uma nova função que aplica a função original ao valor após um atraso.
5. **Execução Condicional**: Escreva uma função que recebe uma função e um valor, e retorna uma nova função que aplica a função original ao valor apenas se uma condição for verdadeira.

---

Este README foi criado para praticar e aprimorar minhas habilidades em JavaScript. Sinta-se à vontade para contribuir com mais exercícios ou melhorias!