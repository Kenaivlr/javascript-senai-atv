function calcular() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let resultado = parseFloat(numero1) + parseFloat(numero2);
    let mensagem = document.getElementById("resultado");
    mensagem.textContent = ("Resultado: " + resultado);
}
