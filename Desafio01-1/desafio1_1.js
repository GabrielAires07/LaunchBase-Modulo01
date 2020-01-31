// CALCULO DE IMC]

const nome = 'Carlos'
const peso = 105
const altura = 1.88

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`Carlos você está acima do peso!`);
} else if (imc < 30) {
    console.log(`Carlos você abaixo do peso!`)
}