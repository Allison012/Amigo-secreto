// Array para armazenar nomes.
let listaDeAmigos = [];

// Função para adicionar amigos.
function adicionarAmigo() {
    let amigos = document.getElementById('amigo').value.trim();
    if (amigos == '') {
        alert('Por favor, insira um nome.');

    } else {
        alert(`Parabéns", você adicionou ${amigos}`);
        listaDeAmigos.push(amigos);
        console.log(listaDeAmigos);
    }

    atualizarListaDeAmigos();
    criarListaDeAmigos();
    limparCampoNomes();
}

// Função para limpar campo.
function limparCampoNomes() {
    amigos = document.getElementById('amigo');
    amigos.value = '';
}

// Função para atualizar lista de amigos.
function atualizarListaDeAmigos() {
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';
}

// Função para criar lista de amigos.
function criarListaDeAmigos() {
    let contador = 0;
    while (contador < listaDeAmigos.length) {
        let tag = document.createElement('li');
        let nomes = document.createTextNode(`${listaDeAmigos[contador]}`);

        tag.appendChild(nomes);
        let lista = document.getElementById('listaAmigos');
        lista.appendChild(tag);
        contador++;
    }
}

// Função para sortear amigos.
function sortearAmigo() {
    let indiceAleatorio = gerarNumeroAleatorio();
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = (`${listaDeAmigos[indiceAleatorio]}`);
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * listaDeAmigos.length);    
}