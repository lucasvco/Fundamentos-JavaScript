const botao = document.getElementById("botao");


function economia(){
    const mes = document.getElementById("mes").value;
    const recebeu = document.getElementById("recebeu").value;
    const gastou = document.getElementById("gastou").value;
    const econPorcent = document.getElementById("econPorcent").value;
    const resultado = document.getElementById("resultado");
    const calcEconomia = (recebeu - gastou);
    const economiaTotal = true;
    let textoResultado;

    if(calcEconomia > 0){
        textoResultado = `Em ${mes} você precisa guardar ${porcentagem.toFixed(2)}R$.`;
    }else if(calcEconomia === 0){
        textoResultado = "Não sobrou dinheiro pra guardar."
    }else if(calcEconomia < 0){
        textoResultado = "Cuidado! Este mês você ficou devendo."
    }

    if (economiaTotal === true){
        textoResultado += `Se você economizar ${porcentagem.toFixed(2)}R$ todo mês, em 1 ano você terá ${economiaAnual.toFixed(2)}R$.`;
    }

    resultado.textContent = textoResultado;
}
botao.addEventListener("click", economia);
