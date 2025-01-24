const precoGasolina = 5.79;
const precoEtanol = 4.13;
const kmPorlitro = 10;
const distanciaEmKM = 100;

let gastoMedioDeCombustivel = 0;

let tipoDeCombustivel = precoGasolina;

if (tipoDeCombustivel == precoGasolina) {
    gastoMedioDeCombustivel = precoGasolina / kmPorlitro * distanciaEmKM;
}

else{
    gastoMedioDeCombustivel = precoEtanol / kmPorlitro * distanciaEmKM;
}

console.log(gastoMedioDeCombustivel);