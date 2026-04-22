let dia = 1;
let qntdia = +prompt("Informe a quntidade de dias que você pretende economizar:")
let economia;
let calculo = 0;

if(!isNaN(qntdia) && qntdia > 0){
    economia = +prompt(`Quanto você pretende economizar nesses ${qntdia} dias:`) 
    while(dia <= qntdia){
        calculo+=economia
        alert(`A sua economia é de R$${calculo.toFixed(2)} no dia ${dia}`)
        economia++
        dia++
    }
}