let formularioTarefa = document.getElementById('formularioTarefa');
let entradaTarefa = document.getElementById('entradaTarefa');
let listaTarefas = document.getElementById('listaTarefas');
let botaoCores = document.getElementById('botaoCores');


let tarefas = [];


formularioTarefa.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let textoTarefa = entradaTarefa.value.trim();
    if (textoTarefa) {
        tarefas.push({ texto: textoTarefa, concluida: false });
        entradaTarefa.value = '';
        atualizarLista();
    }
});


function atualizarLista() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, indice) => {

        let itemLista = document.createElement('li');
        itemLista.textContent = tarefa.texto;
        itemLista.className = tarefa.concluida ? 'concluida' : '';
        itemLista.addEventListener('click', () => alternarConcluida(indice));
        

        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'X';
        botaoExcluir.style.marginLeft = '10px';
        botaoExcluir.addEventListener('click', () => excluirTarefa(indice));
        itemLista.appendChild(botaoExcluir);
        
        listaTarefas.appendChild(itemLista);
    });
}


function alternarConcluida(indice) {
    tarefas[indice].concluida = !tarefas[indice].concluida;
    atualizarLista();
}

function excluirTarefa(indice) {
    tarefas.splice(indice, 1);
    atualizarLista();
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
