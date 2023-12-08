function jogadaComputador() {
    const jogada = Math.floor(Math.random() * 3) + 1;
    return jogada;
}

function compare(jogador, computador) {
    let vencedor;

    if (jogador === computador) {
        vencedor = "EMPATE";
    }

    if (jogador === 1 && computador === 2) {
        vencedor = "JOGADOR VENCEU";
    }

    if (jogador === 1 && computador === 3) {
        vencedor = "COMPUTADOR VENCEU";
    }

    if (jogador === 2 && computador === 1) {
        vencedor = "COMPUTADOR VENCEU";
    }

    if (jogador === 2 && computador === 3) {
        vencedor = "JOGADOR VENCEU";
    }

    if (jogador === 3 && computador === 1) {
        vencedor = "JOGADOR VENCEU";
    }

    if (jogador === 3 && computador === 2) {
        vencedor = "COMPUTADOR VENCEU";
    }

    return vencedor;
}

let numeroEscolhido = 0;
let numeroEscolhidoComp = 0;

function iniciar(escolha) {
    const computador = jogadaComputador();
    const resultado = compare(escolha, computador);
    
    numeroEscolhido = escolha;

    const p = document.querySelector("p");
    p.innerText = resultado;

    const escolhaJogador = document.getElementById(`jogador-${escolha}`);
    const escolhaComputador = document.getElementById(`computador-${computador}`);

    numeroEscolhidoComp = computador;

    escolhaJogador.classList.add("escolha");
    escolhaComputador.classList.add("escolha");
}

function reiniciar() {
    let escolhaJogador = document.getElementById(`jogador-${numeroEscolhido}`);

    escolhaJogador.classList.remove("escolha");

    let escolhaComputador = document.getElementById(`computador-${numeroEscolhidoComp}`);

    escolhaComputador.classList.remove("escolha");

    const p = document.querySelector("p");
    p.innerText = "Escolha uma nova opção";
}
