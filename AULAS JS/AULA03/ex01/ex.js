//1 Criando variaveis

//Crie um programa que declare duas variáveis do tipo inteiro e exiba o resultado da soma dessas variáveis.

let num1 = 2
let num2 = 2

console.log(num1 + num2);

// Crie um programa que declare uma variavel do tipo string e exiba seu conteúdo na tela

let estouNaTela = "Na tela" 

console.log(estouNaTela);

//Crie um programa que declare uma variável do tipo booleano e atribua a ela o valor "true". Em seguida, exiba o valor dessa variável na tela.

let isAluno = true

console.log(typeof isAluno)
console.log(isAluno)

// Crie um programa que declare uma variavel do tipo numerico e atribua a ela o valor de 3.1415. Em seguida, exiba o valor dessa variável na tela.

let numbers = 3.1415
console.log(numbers);

//2 - Utilizando os conceitos apresentados, pergunte ao usuário.

let nomeUsuario = prompt(`Qual é o seu nome de usuário?`);
let idade = prompt(`Qual é a sua idade?`);
let bairro = prompt(`Qual é o seu bairro?`);
let usuarioUpper = nomeUsuario.toUpperCase();
let num1 = parseInt(prompt(`Insira um número inteiro para ser somado.`));
let num2 = parseInt(prompt(`Insira outro número inteiro`));
let res = num1 + num2
alert(`O resultado da soma é: ${res}`)

//3- Aplicando métodos. 

let myName = 'Diego Samuel Fagundes '
let sName = myName.replace('Samuel','Fagundes')
console.log(myName)
console.log(sName)

// 4- Crie um variável preço e atribua a ela um valor numérico. Em seguida, crie um variável
// desconto e atribua a ela um valor 0.2, representando a porcentagem (20%) de desconto
// que você deseja aplicar. Por fim, crie uma variável Preço final que use as variáveis preço e
// desconto para calcular o preço com desconto e imprima o resultado no console.

let preco = 5;
let desconto = 0.2;
let precoFinal = preco * (1 - desconto);

console.log(precoFinal);


// 5- Utilizando os conceitos apresentados, desenvolva um programa que faça o seguinte:
//  Pergunte ao usuário os valores da primeira prova (N1) e da segunda prova (N2).
//  Calcule a média do aluno.
//  Utilize o operador ternário para informar se o aluno está aprovado ou reprovado,
// considerando que a nota mínima para aprovação é 6.

        alert(`Olá, seja bem vindo ao nosso site. Aqui você pode calcular a média das suas notas na prova N1 e N2`)
        let usuario = prompt(`Escolha seu nome de usuário`)
        let n1 = Number(prompt(`Digite a sua nota na prova N1: `))
        let n2 = Number(prompt(`Digite a sua nota na prova N2: `))
        let media = (n1 + n2)/2

        let res = media >= 6 ? 'Parabéns! Você foi aprovado' : `Infelizmente, você não foi aprovado`
        alert(`${res}. Sua média foi: ${media}`)

// 6- Crie um array contendo 5 dos seus jogos favoritos. Em seguida, acesse o segundo elemento
// desse array e converta esse valor para maiúsculas, utilizando o método aprendido em aula.

let favoriteGames = ["LOL", "Fortnite", "Minecraft", "Super Mario Odyssey", "The Witcher 3: Wild Hunt"];
let gamesString = favoriteGames.join(','); 
let gameSplit = gamesString.split(','); 

let secondGameUpperCase = gameSplit[1].toUpperCase();

console.log(secondGameUpperCase);

// 7- Crie uma variável que armazene seu nome e sobrenome. Em seguida, utilize essa variável
// para criar um array. Depois, use o console para apresentar seu sobrenome em uma frase que
// faça sentido.

let nomeCompleto = "Diego Samuel Pereira Fagundes"

let partesNome = nomeCompleto.split(" ")

let sobrenome = partesNome[3]

console.log(`Nome: ${nomeCompleto}`)
console.log(`Sobrenome: ${sobrenome}`)












