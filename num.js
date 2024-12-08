let numeroCorreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let resultado = document.getElementById("resultado");
let tentativas = document.getElementById("tentativas");
let numeroTentativa = document.getElementById("numeroTentativa");
let adivinharButton = document.getElementById("adivinharButton");
let botaoCores = document.getElementById('botaoCores');

adivinharButton.addEventListener("click", function() {
    let palpite = parseInt(numeroTentativa.value);

    if (isNaN(palpite)) {
        resultado.textContent = "Por favor, digite um número válido!";
        return;
    }

    tentativasRestantes--;
    if (palpite === numeroCorreto) {
        resultado.textContent = "Parabéns! Você acertou o número!";
        resultado.style.color = "green";
        adivinharButton.disabled = true;
    } else if (palpite < numeroCorreto) {
        resultado.textContent = "Tente um número maior.";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = "Tente um número menor.";
        resultado.style.color = "orange";
    }

    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0) {
        resultado.textContent = `Você perdeu! O número correto era ${numeroCorreto}.`;
        resultado.style.color = "red";
        adivinharButton.disabled = true; 
    }

    numeroTentativa.value = ""; 
    numeroTentativa.focus(); 
});
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
