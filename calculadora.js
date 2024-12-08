let resultado = document.getElementById('resultado');
let botaoCores = document.getElementById('botaoCores');

function adicionarNumero(numero) {
    if (resultado.value === '0') {
        resultado.value = numero;
    } else {
        resultado.value += numero;
    }
}

function limpar() {
    resultado.value = '0';
}

function calcular() {
    try {
        resultado.value = eval(resultado.value);
    } catch (error) {
        resultado.value = 'Erro';
    }
}

botaoCores.addEventListener('click', () => {
    document.body.style.background = gerarCorAleatoria();
});

function gerarCorAleatoria() {
    let letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}
