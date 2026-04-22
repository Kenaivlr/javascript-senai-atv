let senha= prompt("Digite sua senha:");
let senhaPrint = '';

alert(`Quantidade de caracteres: ${senha.length}`)

for(let i = 0; i < senha.length; i++){
    senhaPrint += senha[i] + '\n'
}
alert(`senha digito por digito:\n${senhaPrint}`)