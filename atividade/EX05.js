let tempIdeal = +prompt(`Digite a temperatura ideal:`);
let tempo = 0;
let TempAtual = +prompt(`Digite a temperatura atual:`)

if (!isNaN(tempIdeal) && !isNaN(TempAtual) && tempIdeal > 0
&& TempAtual >= 0) {
    if (TempAtual == tempIdeal) {
        alert(`A Temperatura ideal ja está na tempreatura desejada`)
    } else {
        while (TempAtual < tempIdeal) {
            TempAtual++
            tempo++
            alert(`Aquecendo... ${tempo} segundos`)
        }
        alert(`Temperatura ideal atingida....`)
    }
    for(let i = 1; i <= 5; i++){
        if(tempIdeal == TempAtual){
            alert(`Aquecendo por mais ${i} segundos`)
        }
        tempo++
    }
    alert(`O tempo em que a esteira de aquecimento ficou ligada foi de ${tempo} segundos.....`)
}