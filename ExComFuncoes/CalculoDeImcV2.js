
function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);

}
function classificadarImc(imc) {
    if (imc < 18.5) {
        return 'Você esta abaixo do peso';
    }
    else if (imc >= 18.5 && imc <= 25) {
        return 'Voce esta com o peso normal';
    }
    else if (imc >= 25 && imc <= 30) {
        return 'Voce esta acima do peso';
    } else if (imc >= 25 && imc <= 30) {
        return 'Voce esta acima do peso';
    } else if (imc >= 30 && imc <= 40) {
        return 'Voce esta obeso';
    } else {
        return 'Obesidade grave';
    }
}

function main() {
    const imc = calcularIMC(82, 1.63);
    console.log(classificadarImc(imc));
}

main();