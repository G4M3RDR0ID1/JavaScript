/* 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

let maiorNumero = 0;
let menorNumero = 100;

function print(texto) {
    console.log(texto);
}


function maioreMenor(listaDeEntradas){
    for (let i = 0; i <= listaDeEntradas.length; i++) {        
        if (maiorNumero < listaDeEntradas[i]){
            maiorNumero = listaDeEntradas[i];
        }
        if (menorNumero > listaDeEntradas[i]) {
            menorNumero = listaDeEntradas[i]
        }
    }
     console.log('Maior numero: ', maiorNumero);
     console.log('Menor numero: ', menorNumero);
}

module.exports = {maioreMenor, print}