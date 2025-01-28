const peso = 103;
const altura = 1.75;

const imc = peso / Math.pow(altura,2);

console.log('Seu IMC: ', imc.toFixed(2));

if (imc < 18.5) {
    console.log('Você esta abaixo do peso');
}
else if (imc >= 18.5 && imc <= 25) {
    console.log('Voce esta com o peso normal');
}
else if (imc >= 25 && imc <= 30) {
    console.log('Voce esta acima do peso');
} else if (imc >= 25 && imc <= 30) {
    console.log('Voce esta acima do peso');
} else if (imc >= 30 && imc <= 40) {
    console.log('Voce esta obeso');
} else {
    console.log('Obesidade grave');
}