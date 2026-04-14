let maioridade = 0;
let menoridade = 0;
let i;

for (i = 0; i <= 3; i++) {
    let idade = prompt(`Iforme a sua idade:`);
    if (idade >= 18) {
        maioridade += 1
    } else {
        menoridade += 1
    }
}

alert(`
--------------------------------------------------------------------
    Dados da idade das pessoas
    Quantidades de Pessoas Maior de Idade: ${maioridade}
    Quantidades de Pessoas Menor de Idade: ${menoridade}
    `)