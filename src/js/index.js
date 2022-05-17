/* Primeiro objeitvo: quando o mouse for passado em cima do personagem, tem que:
 - colocar classe "selecionado" no personagem que for passado o cursor em cima
 para adicionar uma animação nele 

 -retirar o selecionado do personagem que esta selecionado atualmente.

 Segundo Objetivo: trocar imagem e nome do personagem quando o cursor for 
 passado em cima de outro personagem
 - alterar imagem e nome do jogador 1
 
 */


const personagens = document.querySelectorAll('.personagem')
personagens.forEach((personagem) => {
    
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado === 'mario') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')


     
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;
    })
})

