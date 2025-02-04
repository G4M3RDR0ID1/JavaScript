/* 1) Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso. */


class Carro {
    marca;
    cor;
    gastoMedioPorKm;


    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }


    valorDaViagem(distancia, precoCombustivel) {
        return (distancia * this.gastoMedioPorKm * precoCombustivel).toFixed(2)
    }


}


const carro = new Carro('Renam Sandeiro', 'Vermelhor', 1 / 12);
console.log(carro.valorDaViagem(70, 5));
console.log(carro);