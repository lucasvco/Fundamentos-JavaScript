const botao = document.getElementById("botao");


function adivinhacao(){
    const chute = document.getElementById("chute").value;
    const numAleatorio = Math.floor(Math.random() * 15) + 1;
  
    let textoResultado;

    if(chute === numAleatorio){
        textoResultado = "Parabéns você acertou de primeira!!!";
    }else {
        textoResultado = "Tente novamente."
    }
    resultado.textContent = textoResultado;
}
botao.addEventListener("click", adivinhacao);