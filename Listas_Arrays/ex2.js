/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

let listaNueros = [];

for (let i = 0; i <= 13; i++) {
    listaNueros[i] = i;
}

for (let i = 0; i <= listaNueros.length; i++) {
    if (listaNueros[i] % 2 === 0) {
        console.log(listaNueros[i]);
    }
}