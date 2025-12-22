alert("Olá, bem-vindo à calculadora de IMC!");
function calcularIMC(event) {

    // Previne o comportamento padrão do formulário
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const mensagemErro = document.getElementById("mensagemErro");

    //validação de dados
    if(isNaN(peso) || isNaN(altura)){
        mensagemErro.textContent = "Por favor, insira valores numéricos válidos para peso e altura.";
        return;
    }
    if(altura <= 0 || peso <= 0){
        mensagemErro.textContent = "Por favor, insira valores positivos tanto para peso quanto para altura.";
        return;

    }
    
    const imc = peso / (altura * altura);
    mensagemErro.style.color = "green";
    mensagemErro.textContent = `Seu IMC é ${imc.toFixed(2)}`;
    


    

}

