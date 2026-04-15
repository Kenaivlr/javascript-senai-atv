let qntFases = prompt(`Informe a quantidade de fases que você jogou:`)
let Pontos = 0;
let pontosTotal = 0;
let mediaPontos = 0;
let pontosAcima100 = 0;

let validacao = true;
let i;

let list = "----- lista de pontuação -----\n"

if (qntFases > 0) {
    for (i = 1; i <= qntFases; i++) {
        Pontos = +prompt(`Informe a quantidades de pontos que você fez na ${i}ª fase:`)

        if (isNaN(Pontos) || Pontos < 0) {
            validacao = false
            alert("Erro! Valor invalido")
            break;
        }

        pontosTotal += Pontos


        list += `${i}ª Fase\n`
        list += `Você fez: ${Pontos.toFixed(2)}\n\n`

        if (Pontos > 100) {
            pontosAcima100++
        }

    }

    mediaPontos = pontosTotal / qntFases

    list += "===== RESUMO =====\n"
    list += `Você jogou ${qntFases} fases\n`
    list += `Você teve ${pontosAcima100} fases com a pontuação acima de 100\n`
    list += `Você obteve uma pontuação total de: ${pontosTotal.toFixed(2)} pontos\nE uma media de pontos por fase de: ${mediaPontos.toFixed(2)}`

    if (validacao) {
        alert(list)
    }
} else {
    alert("Erro! informe uma quantidade de fases valida")
}
