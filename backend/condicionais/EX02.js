let sabor = prompt(`
    Cardapio de sucos
    L - Laranja
    M - Morango
    A - Acerola
    U - Uva
`)

if (sabor == 'l' || sabor == 'L') {
    alert("Você escolheu o suco de Laranja");
} else if (sabor == 'm' || sabor == 'M') {
    alert("Você escolheu o suco de Morango");
} else if (sabor == 'a' || sabor == 'A') {
    alert("Você escolheu o suco de Acerola");
} else if (sabor == 'u' || sabor == 'U') {
    alert("Você escolheu o suco de Uva");
} else {
    alert("Escolha um Sabor que esteja no cardapio");
}