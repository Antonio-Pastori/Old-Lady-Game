
quadrados = document.getElementsByClassName('quadrado')

for(i=0; i <= quadrados.length; i++) {
    square = quadrados[i]

    var jogador = null

    round = 0
    

    square.addEventListener('click', function(){

        round = round + 1
        if (round%2 == 0) {
            jogador = 'x'
            id_square = this.id
            MostraIcon(id_square, jogador)
        }
        else{
            jogador = 'bola'
            id_square = this.id
            MostraIcon(id_square, jogador)
        }
    });
    
}

function MostraIcon(id_square, jogador){
   
    var player = document.getElementById(jogador)
    
    console.log(player)
    
    
   
}
