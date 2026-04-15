let matricula;
let nomeAluno = prompt(`Digite o seu nome:`);
let anoMatricula = +prompt(`Ola ${nomeAluno}, Digite o Ano que você se matriculou`);
let doisNumeros = "00";
let parar = ""
let lista = "------LISTA DE MATRICULAS CADASTRADAS-------"

matricula = Number(String(anoMatricula).slice(-2) + doisNumeros);

while (parar != 'x' || parar != 'X') {
    parar = prompt(`Precione qualquer tecla para gerar novas matriculas ou 'x' para encerrar!`)
    if (parar == 'x' || parar == 'X') {
        alert('-----Cadastro de Matriculas encerrado-----')
    } else {
        matricula++
        lista += `\nA proximas matriculas geradas automaticamente ${matricula}`
    }
}

alert(lista)
