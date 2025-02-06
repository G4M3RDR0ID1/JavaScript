// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

function gets(nota){
    if (nota < 5){
        return 'Reprovado';
    }
    else if (nota >= 5 && nota < 7){
        return 'Recuperação';
    }
    else if (nota >= 7){
        return 'Aprovado';
    }
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print}