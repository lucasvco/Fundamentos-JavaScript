var botao = document.getElementById("botao");


function economia(){
    var mes = document.getElementById("mes").value;
    var recebeu = document.getElementById("recebeu").value;
    var gastou = document.getElementById("gastou").value;
    var econPorcent = document.getElementById("econPorcent").value;
    var resultado = document.getElementById("resultado");
    var calcEconomia = (recebeu - gastou);
    var economiaTotal = true;
    let textoResultado;

    if(calcEconomia > 0){
        textoResultado = "Em " + mes + " você precisa guardar " + (calcEconomia*(econPorcent/100)).toFixed(2) + "R$.";
    }else if(calcEconomia === 0){
        textoResultado = "Não sobrou dinheiro pra guardar."
    }else if(calcEconomia < 0){
        textoResultado = "Cuidado! Este mês você ficou devendo."
    }

    if (economiaTotal === true){
        textoResultado += " Se você economizar " + (calcEconomia*(econPorcent/100)).toFixed(2) + "R$ todo mês, " + "em 1 ano você terá " + ((calcEconomia*(econPorcent/100)*12)).toFixed(2) + "R$.";
    }

    resultado.textContent = textoResultado;
}
botao.addEventListener("click", economia);