
const precoEtiqueta = 100;
const formaDePagaento = 4;

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

if (formaDePagaento === 1) {
    console.log('Valor a pagar: ', aplicarDesconto(precoEtiqueta, 10));
}
else if (formaDePagaento === 2) {
    console.log('Valor a pagar: ', aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagaento == 3) {
    console.log('Valor a pagar: ', precoEtiqueta);
}
else if (formaDePagaento == 4) { 
    console.log('Valor a pagar: ', aplicarJuros(precoEtiqueta, 10));
}
