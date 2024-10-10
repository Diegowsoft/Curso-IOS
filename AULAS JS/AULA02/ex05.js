// Calculadora IMC

let peso = parseFloat(prompt('Digite o seu peso: '))
let altura = parseFloat(prompt('Digite o sua altura: '))

let imc = parseFloat(peso / (altura*altura))

alert(`O seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5){
    alert("Você está abaixo do peso")
} else if (imc <= 24.9){
    alert("Você está dentro do IMC ideal")
} else if (imc <= 29.9){
    alert("Você está com sobrepeso")
} else {
    alert("Você é uma baleia")
}

