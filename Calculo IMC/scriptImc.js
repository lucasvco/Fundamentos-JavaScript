
const botao = document.getElementById("botao");


function imc(){
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
    const calcImc = (peso/(altura*altura)).toFixed(1);

    if(calcImc >= 18.5 && calcImc <= 24.9){
        resultado.textContent = nome + " " + "o seu IMC é " + calcImc + ". Você esta com o peso normal.";
    }else if(calcImc<18.5){
        resultado.textContent = nome + " " + "o seu IMC é " + calcImc + ". Você esta abaixo do peso recomendado.";
    }else if(calcImc>24.9){
        resultado.textContent = nome + " " + "o seu IMC é " + calcImc + ". Você esta acima do peso recomendado.";
    }    
}
botao.addEventListener("click", imc);
