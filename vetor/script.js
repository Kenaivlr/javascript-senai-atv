 alert("Seja Bem-Vindo")
        //variaveis
        let frutas =[];
        let i=0;
        let f;
        let boolean = false
        //laço de repetição para adicionar frutas no array
        for (i = 0; i < 3; i++) {
            let fruta = prompt("Digite a fruta " + (i + 1) + ": ");
            frutas.push(fruta);
            if(i==1){
            boolean=true 
            f=frutas[i]
            }
        }
            document.write("<h2>Fruta " + (i - 1) + ": " + f + "</h2>");
            //condição para mostrar a segunda fruta no console
            if(boolean==true){
            console.log("A segunda fruta é: " +f);
        }