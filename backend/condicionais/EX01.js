let nacionalidade = prompt(`Você tem nacionalidade é Brasileira ? informe 'sim' ou 'não'`)

if (nacionalidade == "sim" || nacionalidade == "Sim" || nacionalidade == "SIM"){
    let rg = prompt (`Informe seu RG:`);
    if(typeof rg === 'Number'){
    alert(`RG informado: ${rg}`);
    }else{
        alert(`RG informado não é valido`)
    }
}
if(nacionalidade == "não" || nacionalidade == "Não" || nacionalidade == "NÃO"){
    let passaport = prompt(`Informe seu Passaport`);
    alert(`Passaport infomado: ${passaport}`);
}
