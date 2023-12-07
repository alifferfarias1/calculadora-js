const tabela = document.querySelector('#tabela')
const resultados = document.querySelector('#resultados')
const numeros = document.querySelector('#nums')
const btnIgual = document.querySelector('#igual')
const operacoes = document.querySelectorAll('.operacao');
const display = document.querySelector('.display');

let valorSelecionado = '';
let valorSelecionadoSalvo = '';
let sinal;

tabela.addEventListener('click', function pegaValor(event) {

    if (event.target.tagName === 'TD') {
        const valorClicado = event.target.dataset.value;

        if (valorClicado !== undefined) {
            valorSelecionado += valorClicado;
            display.value = valorSelecionado;



        }
    }
})
operacoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
        if (valorSelecionado !== null) {
            // Realize a operação desejada usando valorSelecionado e a operação do botão
            sinal = botao.dataset.operacao;
            valorSelecionadoSalvo = valorSelecionado;
            valorSelecionado = ''

            // Aqui você pode chamar a função desejada, como adicao, subtracao, etc.
            // Por exemplo:
            // adicao(Number(valorSelecionado));
        }
    })
});


btnIgual.addEventListener('click', function (event) {
    if (sinal == '+') {
        soma = adicao(Number(valorSelecionadoSalvo), Number(valorSelecionado))
        display.value = `${valorSelecionadoSalvo} + ${valorSelecionado} = ${soma}`;
        valorSelecionado = '';

    }
    if (sinal == '-') {

        soma = subtracao(Number(valorSelecionadoSalvo), Number(valorSelecionado))
        display.value = `${valorSelecionadoSalvo} - ${valorSelecionado} = ${soma}`;
        valorSelecionado = '';
    }

    if (sinal == '/') {

        soma = divisao(Number(valorSelecionadoSalvo), Number(valorSelecionado))
        display.value = `${valorSelecionadoSalvo} / ${valorSelecionado} = ${soma}`;
        valorSelecionado = '';
    }


    if (sinal == '*') {

        soma = multiplicao(Number(valorSelecionadoSalvo), Number(valorSelecionado))
        display.value = `${valorSelecionadoSalvo} * ${valorSelecionado} = ${soma}`;
        valorSelecionado = '';

    }


})
const adicao = function (a, b) {
    return a + b;
}
const subtracao = (a, b) => {
    return a - b;
}
const divisao = function (a, b) {
    return a / b;
}
const multiplicao = (a, b) => {
    return a * b;
}