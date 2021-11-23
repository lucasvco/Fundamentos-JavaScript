const botao = document.getElementById("botao");

function tabuada(){
   const numero = document.getElementById("numero").value;
   let textoResultado;
   textoResultado = `A tabuada de ${numero} é: \r`;

  for(i=1; i<=10; i++){
    textoResultado += `${i} x ${numero} = ${i * numero} \r`;
    }
  resultado.textContent = textoResultado; 
}

botao.addEventListener("click", tabuada);
