let qtdProdutosComp = +prompt(`Informe a quantidade de produtos:`)
let Nomemaiscaro = "";
let Nomemaisbarato = "";
let maiorPreco = 0;
let menorPreco = 0;

let nomeProduto = "";
let qtdProdutos = 0;
let precoProduto = 0;
let produtosAcima100 = 0;
let calculoP;

let valorTotal = 0;
let lista = "----- LISTA DE PRODUTOS -----\n";

let validacao = true
let i;

if (qtdProdutosComp > 0) {

    for (i = 1; i <= qtdProdutosComp; i++) {
        nomeProduto = prompt(`Qual o nome do Produto:`)
        precoProduto = +prompt(`Qual o preço do produto:`)
        qtdProdutos = +prompt(`Quantos ${nomeProduto} você colocou:`)

        if (!nomeProduto || isNaN(precoProduto) || precoProduto <= 0 || isNaN(qtdProdutos) || qtdProdutos <= 0) {
            validacao = false;
            alert("Erro nos dados!");
            break;
        }
        calculoP = precoProduto * qtdProdutos
        valorTotal += calculoP

        lista += `\nProduto numero ${i}\n`
        lista += `Nome:  ${nomeProduto}\n`
        lista += `Preço: R$ ${precoProduto.toFixed(2)}\n`
        lista += `Quantidade: ${qtdProdutos}\n`
        lista += `Total: ${calculoP.toFixed(2)}\n`

        if (precoProduto > 100) {
            produtosAcima100++;
        }
        if (!isNaN(precoProduto) && (i === 1 || maiorPreco < precoProduto) && nomeProduto) {
            maiorPreco = precoProduto;
            Nomemaiscaro = nomeProduto;
        }

        if (!isNaN(precoProduto) && (i === 1 || menorPreco > precoProduto) && nomeProduto) {
            menorPreco = precoProduto;
            Nomemaisbarato = nomeProduto
        }
    }

    lista += "\n===== RESUMO =====\n";
    lista += `Valor total da compra: R$ ${valorTotal.toFixed(2)}\n`;
    lista += `Produtos acima de R$100: ${produtosAcima100}\n`;
    lista += `Produto mais caro: ${Nomemaiscaro} (R$ ${maiorPreco.toFixed(2)})\n`;
    lista += `Produto mais barato: ${Nomemaisbarato} (R$ ${menorPreco.toFixed(2)})`;

    if (validacao) {
        alert(lista)
    } else {
        alert("Dados inválidos detectados!")
    }


} else {
    alert("Erro! Porfavor digite a quantidade de produtos em seu carrinho")
}