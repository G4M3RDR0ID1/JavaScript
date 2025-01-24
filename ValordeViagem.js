const precoCombustivel = 5.52;
const gastoMedioDeCombustivel = 10;
const distanciaEmKmViagem = 100;

const valorDaViagem = precoCombustivel / gastoMedioDeCombustivel * distanciaEmKmViagem;

console.log(valorDaViagem.toFixed(2));