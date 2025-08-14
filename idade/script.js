//função de verificação de idade
function verificar() {
    let idade = document.getElementById("idade").value;
    const resultado = document.getElementById("resultado");
    //condição se é maior ou menor de idade
    if (idade>=18){
        resultado.textContent = "Você é maior de idade";
    }else if (idade<=0){
        resultado.textContent = "Idade inválida";
    }else {
        resultado.textContent = "Você é menor de idade";
    }
}
