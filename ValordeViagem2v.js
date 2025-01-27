const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorlitro = 10;
const distanciaEmKM = 100;
const tipoDeCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKM / kmPorlitro;



if (tipoDeCombustivel === 'Gasolina') {
    const valorGasto = precoGasolina * litrosConsumidos;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = precoEtanol * litrosConsumidos;
    console.log(valorGasto.toFixed(2));
}