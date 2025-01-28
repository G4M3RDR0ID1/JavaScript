const precoProduto = 8;
const tipoDePagamento = 'Acima de duas';

if (tipoDePagamento == 'Debito') {
    const desconto = precoProduto / 10;
    console.log('Valor a pagar: ', desconto.toFixed(2));
}
else if (tipoDePagamento == 'Dinheiro' || 'Pix') {
    const desconto = precoProduto * 0.15;
    console.log('Valor a pagar: ', desconto.toFixed(2));
} else if (tipoDePagamento == 'Duas vezes') {
    console.log('Valor a pagar: ', precoProduto);
}
else if (tipoDePagamento == 'Acima de duas') { 
    const valorComjuros = (precoProduto * 0.1 * 3) + precoProduto;
    console.log('Valor a pagar: ', valorComjuros);
}
