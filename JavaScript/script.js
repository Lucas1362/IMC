alert("Olá, bem-vindo à calculadora de IMC!");
function calcularIMC(event) {

    // Previne o comportamento padrão do formulário
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    //validação de dados
    if(isNaN(peso) || isNaN(altura)){
        alert("Valores inseridos incorretamente. Por favor, insira valores positivos para peso e altura.");
        return;
    }
    
    if(altura <= 0 || peso <= 0){
        alert("Valores inseridos incorretamente. Por favor, insira valores positivos tanto para peso quanto para altura.");
        return;

    }

    const imc = peso / (altura * altura);
    alert("seu IMC é: " + imc.toFixed(2));
    

    
}

