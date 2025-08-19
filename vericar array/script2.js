// Array com 10 números (positivos, negativos e zero)
var numeros = [15, -7, 2, 45, -10, 0, 3, 50, -8, 11];


// Variáveis pedidas
let somaDosPares = 0;
let contadorDeImpares = 0;
let maiorNumero = numeros[0];
let menorNumero = numeros[0];

// Percorrendo o array
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];

    // Verificação se é par ou ímpar
    if(num >= 0){
        if (num % 2=== 0) {
       
            somaDosPares += num;
        } else {
       
            contadorDeImpares++;
        }
    }

    // maior
    if (num > maiorNumero) {
        maiorNumero = num;
    }
    if (num < menorNumero) {
        menorNumero = num;
    }
}

// Exibindo os resultados no console
console.log("Array analisado: ", numeros);
console.log("Soma dos números pares: ", somaDosPares);
console.log("Quantidade de números ímpares: ", contadorDeImpares);
console.log("Maior número: ", maiorNumero);
console.log("Menor número: ", menorNumero);