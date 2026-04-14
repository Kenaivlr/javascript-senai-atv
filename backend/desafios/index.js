let qtdProdutosComp = +prompt(`Iforme a quantidade de produtos:`)
let v = [qtdProdutosComp]
let Nproduto
let maiorPreco
let menorPreco
let nomeProduto;
let qtdProdutos;
let precoProduto;
let calculoP;
let valorTotal;
let i;
if(qtdProdutosComp > 0){
for (i = 1; i <= qtdProdutosComp; i++) {
    nomeProduto = prompt(`Qual o nome do Produto:`)
    precoProduto = +prompt(`Qual o preço do produto:`)
    qtdProdutos = +prompt(`Quantos ${nomeProduto} você colocou:`)
    calculoP = precoProduto * qtdProdutos
    valorTotal += calculoP
    Nproduto = Nproduto + nomeProduto
    maiorPreco = 0
    if(maiorPreco < precoProduto){
        maiorPreco = precoProduto
    }
    if(menorPreco > precoProduto){
        menorPreco = precoProduto
    }
}

alert(`
    O valor total é R$${valorTotal} /n
    O maior valor é R$${maiorPreco} /n
    O menor valor é R$${menorPreco} /n
    `)

} else {
    alert("porfavor digite a quantidade de produtos")
    return 
}


