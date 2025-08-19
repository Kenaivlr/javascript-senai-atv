var numeroAleatorio = 0;
    var tentativas = 0;

    function refresh(){
        var nm = document.getElementById('aposta');
        nm.value = '';
        
        numeroAleatorio = parseInt(Math.random() * 100);
        tentativas = 0;

        console.log('O numero aleatorio é: '+numeroAleatorio);
    }

    refresh();

    function verifyNumber(){
        var numero = document.getElementById('aposta');
        var aposta = numero.value;

        if(aposta > 100 || aposta < 0)
        {
            alert('Aposta é inválida');
            return;
        }

        if(aposta > numeroAleatorio)
        {
            tentativas++;
            alert('🚨 O número para ser encontrado é MENOR');
        }
        else if(aposta < numeroAleatorio)
        {
            tentativas++;
            alert('🚨 O número para ser encontrado é MAIOR')
        }
        else
        {
            alert('✅ Parabéns você acertou!! Com '+tentativas+' erros!');
            refresh();
        }
    }