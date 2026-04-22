let senha = prompt("Digite sua senha:");
let validacao = '';
let qntTentativas = 3;

for(let i = 1; i <=qntTentativas ; i++){
    validacao = prompt("confirme sua senha:")
    if(senha !== validacao){
        alert(`Tentativa ${i} invalida...`)
        if(i==qntTentativas){
            alert('acesso bloqueado. Numero de tentativas atingido.')
        }
    }else{
        alert("Acesso permitido!")
        break;
    }
}