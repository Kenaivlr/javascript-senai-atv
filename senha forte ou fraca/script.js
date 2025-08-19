function Validarforcasenha(){
    var forca = 0;
    var senha = document.getElementById('senhaforca').value;
    console.log(senha)
    if((senha.length >= 4) && (senha.length <= 7)){
        forca+=10;
    }else if (senha.length > 7){
        forca+=25;
    }
    if((senha.length >= 4) && (senha.match(/[0-9]+/))){
        forca+=5;
    }
    if((senha.length >= 5) && (senha.match(/[a-z]+/))){
        forca+=5;
    }
    if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
        forca+=20;
    }
    if((senha.length >= 9) && (senha.match(/[!@#$%&]/))){
        forca+=25;
    }
    mostraforca(forca);
}
function mostraforca(forca){
    let mensagem = document.getElementById("forca")
    if(forca<30){
        mensagem.innerHTML = "<spam style= 'color:#331e0a'>Senha: </spam>" + "<spam style='color:#ff0000'>Fraca</spam>";
    }else if((forca>=30) && (forca<50)){
        mensagem.innerHTML = "<spam style= 'color:#331e0a'>Senha: </spam>"  + "<spam style='color:#ffD700'>Media</spam>";
    }else if((forca>=50) && (forca<70)){
        mensagem.innerHTML = "<spam style= 'color:#331e0a'>Senha: </spam>"  + "<spam style='color:#7fff00'>Forte</spam>";
    }else if(forca>75){
        mensagem.innerHTML = "<spam style= 'color:#331e0a'>Senha: </spam>"  + "<spam style='color:#008000'>Excelente</spam>";
    }
}   




