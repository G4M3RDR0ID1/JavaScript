const entradas = [2000, 250];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

function calcularPorcentagem(salarioBruto, imposto){
    return salarioBruto * (imposto/100);

}

function percentualImposto(salário){
    if (salário <= 1100.00){
        return 5;
    }else if (salário <= 2500.00){
        return 10;
    }else{
        return 15;
    }
}

module.exports = { gets, print , calcularPorcentagem, percentualImposto};