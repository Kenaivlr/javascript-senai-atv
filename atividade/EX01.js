let numInicial = +prompt("DIgite o numero que vai começar:");
let numFinal = +prompt("Digite o numero final:");
let numTroca = 0;
let qntpar = 0;
let list = '';
let i = 0;
if (!isNaN(numInicial) && !isNaN(numFinal) && numInicial > 0 && numFinal > 0) {

    if (numInicial > numFinal) {
        numTroca = numInicial
        numInicial = numFinal
        numFinal = numTroca
    }

    for (i = numInicial; i <= numFinal; i++) {
        if (i % 2 == 0) {
            list += i + '\n'
            qntpar++
        }
    }
    alert(`Os numeros pares de ${numInicial} a ${numFinal}:\n${list}quatidades de numeros pares: ${qntpar}`)
}else{
    alert("Erro! informe numeros validos....")
}