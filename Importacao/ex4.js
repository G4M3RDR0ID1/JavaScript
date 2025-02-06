// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares4');

const n = gets();
let lista = [];
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;
let numerosPares = [];
let numerosImpares = [];

for (let i = 0; i < n; i++) {
    lista[i] = gets();
}

for (let i = 0; i < lista.length; i++) {

    if (lista[i] % 2 === 0) {
        numerosPares[i] = lista[i];

        if (numerosPares[i] > maiorNumeroPar) {
            maiorNumeroPar = numerosPares[i]
        }
    }
    else {
        numerosImpares[i] = lista[i]
        menorNumeroImpar = numerosImpares[i]

        if (menorNumeroImpar > numerosImpares[i]) {
            menorNumeroImpar = numerosImpares[i];
        }
    }

}

print(maiorNumeroPar);
print(menorNumeroImpar);

