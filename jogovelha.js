
quadrados = document.getElementsByClassName('quadrado')
const textoVez = document.getElementById('vez');

for(i=0; i < quadrados.length; i++) {
    square = quadrados[i]

    var jogador = null

    round = 0

    var jogo = [1,2,3,4,5,6,7,8,9];
    console.log(typeof(jogo[6]))

    square.addEventListener('click', function(){

        if (this.classList.contains('marcado')) {
            return; // Sai da função se o quadrado já estiver marcado
        }

        round = round + 1
        if (round%2 == 0) {
            textoVez.textContent = "É a vez do O";
            jogador = 'x'
            id_square = this.id
            MostraIcon(id_square, jogador)
            Testar_Jogo(id_square, jogador, jogo)
            this.classList.add('marcado');
        }
        else{
            textoVez.textContent = "É a vez do X";
            jogador = 'bola'
            id_square = this.id
            MostraIcon(id_square, jogador)
            Testar_Jogo(id_square, jogador, jogo)
            this.classList.add('marcado');
        }
    });
}

function MostraIcon(id_square, jogador){
   
    var background = document.getElementById(id_square)
    console.log(jogador)

    var player = jogador+id_square
    
    var escolha = document.getElementById(player)
    
    escolha.classList.add('mostrar');
    
    background.style.backgroundColor = "white"
}


function Testar_Jogo(id_square, jogador, jogo) {
    jogo[id_square - 1] = jogador;

    const combinacoesVitoria = [
        [6, 3, 0], // Coluna 1
        [7, 4, 1], // Coluna 2
        [8, 5, 2], // Coluna 3
        [6, 7, 8], // Linha 1
        [3, 4, 5], // Linha 2
        [0, 1, 2], // Linha 3
        [6, 4, 2], // Diagonal 1
        [8, 4, 0]  // Diagonal 2
    ];

    for (const combinacao of combinacoesVitoria) {
        const [a, b, c] = combinacao;
        if (jogo[a] === jogador && jogo[b] === jogador && jogo[c] === jogador) {
            if (jogador === 'bola') {
                Bola_Ganhou();
            } else {
                X_Ganhou();
            }
            return;
        }
    }

    // Verifica empate (Deu Velha)
    if (jogo.every(posicao => typeof posicao === 'string')) {
        Deu_Velha();
    }
}

function Bola_Ganhou() {
    if (confirm("O 'O' Ganhou!!! Deseja reiniciar o jogo?")) {
        location.reload(); // Recarrega a página
    }
}

function X_Ganhou() {
    if (confirm("O 'X' Ganhou!!! Deseja reiniciar o jogo?")) {
        location.reload(); // Recarrega a página
    }
}

function Deu_Velha() {
    if (confirm("Deu Velha!!! Deseja reiniciar o jogo?")) {
        location.reload(); // Recarrega a página
    }
}

