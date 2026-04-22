let num = 20;
let c = 0;

while(c < 20){
    alert(`contagem: ${c}`)
    c++
    if(c == 10){
        alert(`numero proibido encontrado! Acesso bloqueado ao laboratorio....`)
        break;
    }
}