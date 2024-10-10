// var idade            = 16           - real
// let idade            = 16.0         - float
// let nome             = "samuel"     - string
// let nome             = 'samuel'     - string
// let nome             = `samuel`     - string
// let alunoMatriculado =  true        - boolean
// const CPF            = '20904814074'


// let nome = 'Diego'
// let sobrenome = 'Fagundes'
// let idade = 18
// console.log(typeof nome, nome)
// console.log(typeof sobrenome, sobrenome)
// console.log(typeof idade, idade)
// console.log(`Olá ${nome} , sejá bem vindo ao nosso site pode confirmar se você tem ${idade} anos?`)

// let nome, idade;
// nome = `Ermeson`



// Tudo que tem escopo global pode ser redeclarado e ser redefinido
// var = escopo global, isso significa que em qualuqer luga r do meu código eu posso redeclarar o meu código
// var nome = `Diego`
// var nome = `Ermeson`

// Se você criar uma váriavel com uma letra maiúscula com o mesmo nome será considerada como uma outra váriavel 
// Ex: 
// let nome = "Diego"
// let Nome = "Diego"


// const é um valor definitivo, pois não é possível mudá-lo nem redecralá-lo
// Vamos observar num contexto no qual o professor define a média necessária para aprovação do aluno
// Ex: const mediaAp = 7
// Ex: const valorPi = 3.14
// Ex: const CPF = 56059499930


// Você pode criar uma variavel mesmo sem declarar o tipo dela 
// Ex: sNome = `Diego`
// Para não cometer esse erro no começo do código digite 'use strict'


let nome = "Diego"
let sobrenome = 'Fagundes'
let estadoCivil = `namorando`
console.log("Olá, " + nome, sobrenome + ". Pelo visto atualmente você está " + estadoCivil + ".")
console.log("Olá,", nome, sobrenome, ". Pelo visto atualmente você está", estadoCivil)
console.log(`Olá, ${nome} ${sobrenome}. Pelo visto atualmente você está ${estadoCivil}.`)